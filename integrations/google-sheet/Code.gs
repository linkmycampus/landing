/**
 * LinkMyCampus applications -> one Google Sheet file per form, in one Drive folder.
 *
 * Receives every waitlist sign-up and partner application from the website, then:
 *   - checks it is a person (Cloudflare Turnstile, honeypot, too-fast check)
 *   - checks the details again (the browser checks can be bypassed)
 *   - rejects an email that is already on that form's tab
 *   - adds one row to that form's own sheet and saves any signed PDF to Drive
 *
 * Drive layout (created automatically):
 *   LinkMyCampus applications/
 *     Waitlist/                 LinkMyCampus – Waitlist (sheet)
 *     Campus Ambassadors/       LinkMyCampus – Campus Ambassadors (sheet) + Signed agreements/ (PDFs)
 *     O.G Creators/             ... one folder per form, each with its own sheet and signed PDFs
 *
 * Setup: see SETUP.md next to this file.
 * Script properties (Project Settings > Script properties):
 *   TURNSTILE_SECRET   Cloudflare Turnstile secret key. Required in production.
 *   ALLOWED_HOSTNAMES  Optional, comma separated, e.g. "linkmycampus.com,www.linkmycampus.com"
 *   ROOT_FOLDER_ID, FOLDER_<form>, SHEET_<form>, PDF_<form>   Set automatically. Delete one to start that afresh.
 */

/* Each form on the website gets its own sheet file. Unknown forms are rejected, so nobody can add sheets. */
const TABS = {
  waitlist: 'Waitlist',
  ambassador: 'Campus Ambassadors',
  'og-creator': 'O.G Creators',
  'departmental-creator': 'Departmental Creators',
  'faculty-page-moderator': 'Faculty Page Moderators',
  'onboarding-team-member': 'Onboarding Team',
  media: 'Media & Blog Partners',
};
/* Each form's own questions, in the order they appear on the website: [field id, column name]. */
const FORM_FIELDS = {
  waitlist: [['university', 'University']],
  ambassador: [['university', 'University'], ['role', 'Role you want'], ['why', 'Why you?']],
  'og-creator': [['handle', 'Social media handles']],
  'departmental-creator': [['handle', 'Social media handles'], ['department', 'Department'], ['faculty', 'Faculty']],
  'faculty-page-moderator': [['faculty', 'Faculty']],
  'onboarding-team-member': [],
  media: [['outlet', 'Media or blog name'], ['handle', 'Social media handles']],
};
/* Dropdown answers are saved as their readable names. */
const OPTION_LABELS = {
  role: {
    recruitment: 'Recruitment Ambassador',
    content: 'Content Ambassador',
    community: 'Community Ambassador',
    event: 'Event Ambassador',
    'campus-lead': 'Campus Lead',
  },
};

/* Column order for each form's sheet. */
function headersFor(program) {
  const own = FORM_FIELDS[program].map(function (f) { return f[1]; });
  if (program === 'waitlist') return ['Submitted at', 'Full name', 'Email'].concat(own, ['Device']);
  return ['Submitted at', 'Full name', 'Email', 'WhatsApp'].concat(own, ['Agreement version', 'Signature', 'Signed PDF', 'Device']);
}
const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (body.action === 'check') return json(checkOnly(body));
    if (body.action === 'submit') return json(submit(body));
    return json({ ok: false, error: 'invalid', message: 'Unknown request.' });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'server' });
  }
}

function doGet() {
  return json({ ok: true, service: 'linkmycampus-applications' });
}

/**
 * Run from the editor (select "setupSheets", press Run) to create the folder and every sheet,
 * and to bring each sheet's columns up to date. A sheet with no responses yet gets its columns
 * rewritten in the right order; a sheet that already has responses only gets missing columns added.
 */
function setupSheets() {
  Object.keys(TABS).forEach(function (p) {
    const sh = sheet(p);
    // Sheets made by an older version sit in the main folder: move each into its form's folder.
    DriveApp.getFileById(sh.getParent().getId()).moveTo(formFolder(p));
    const want = headersFor(p);
    if (sh.getLastRow() <= 1) {
      sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).clearContent();
      writeHeaders(sh, want);
    } else {
      const have = headers(sh);
      want.forEach(function (k) {
        if (have.indexOf(k) === -1) {
          sh.getRange(1, have.length + 1).setValue(k);
          have.push(k);
        }
      });
      styleSheet(sh);
    }
  });
}

/* ---------- actions ---------- */

function checkOnly(body) {
  const program = clean(body.program);
  const email = normalizeEmail(body.email);
  if (!TABS[program] || !EMAIL_RE.test(email)) return { ok: false, error: 'invalid', message: 'Enter a valid email address.' };
  return alreadyApplied(sheet(program), email) ? { ok: false, error: 'duplicate' } : { ok: true };
}

function submit(body) {
  // Bot checks first, so bots never touch the sheet.
  if (clean(body.hp)) return { ok: false, error: 'bot' };
  if (Number(body.elapsedMs) > 0 && Number(body.elapsedMs) < MIN_FILL_MS) return { ok: false, error: 'bot' };
  if (!verifyTurnstile(body.turnstileToken)) return { ok: false, error: 'bot' };

  const program = clean(body.program);
  const details = body.details && typeof body.details === 'object' ? body.details : {};
  const v = validate(details);
  if (!TABS[program]) return { ok: false, error: 'invalid', message: 'Unknown form.' };
  if (v.error) return { ok: false, error: 'invalid', message: v.error };

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = sheet(program);
    if (alreadyApplied(sh, v.email)) return { ok: false, error: 'duplicate' };

    const row = { 'Submitted at': new Date(), 'Full name': v.fullName, Email: v.email, Device: clean(body.userAgent).slice(0, 300) };
    if (program !== 'waitlist') {
      const sig = body.signature || {};
      row.WhatsApp = v.phone;
      row['Agreement version'] = clean(body.agreementVersion);
      row.Signature = sig.kind === 'typed' ? (sig.text ? 'Typed: ' + clean(sig.text) : '') : sig.kind === 'drawn' ? 'Drawn (see PDF)' : '';
      row['Signed PDF'] = body.pdfBase64 ? savePdf(body.pdfBase64, program, v.fullName) : '';
    }
    // The form's own questions, under their column names.
    const known = { fullName: 1, email: 1, phone: 1, website: 1 };
    FORM_FIELDS[program].forEach(function (f) {
      known[f[0]] = 1;
      const raw = clean(details[f[0]]).slice(0, 1000);
      row[f[1]] = (OPTION_LABELS[f[0]] && OPTION_LABELS[f[0]][raw]) || raw;
    });
    // Anything new the website sends later still gets its own column.
    Object.keys(details).forEach(function (k) {
      if (!known[k]) row[label(k)] = clean(details[k]).slice(0, 500);
    });
    appendRow(sh, row);
    return { ok: true };
  } finally {
    lock.releaseLock();
  }
}

/* ---------- checks ---------- */

function validate(d) {
  const fullName = clean(d.fullName).replace(/\s+/g, ' ');
  const email = normalizeEmail(d.email);
  const phone = 'phone' in d ? normalizePhone(d.phone) : '';
  if (fullName.split(' ').length < 2 || fullName.length > 80 || /[0-9<>@]/.test(fullName)) return { error: 'Enter your first and last name.' };
  if (!EMAIL_RE.test(email)) return { error: 'Enter a valid email address.' };
  if ('phone' in d && !phone) return { error: 'Enter a valid WhatsApp number.' };
  return { fullName: fullName, email: email, phone: phone || '' };
}

function normalizeEmail(s) {
  return clean(s).toLowerCase();
}

function normalizePhone(raw) {
  const digits = clean(raw).replace(/[\s\-().]/g, '');
  const ng = digits.match(/^(?:\+?234|0)([789][01]\d{8})$/);
  if (ng) return '+234' + ng[1];
  return /^\+[1-9]\d{7,14}$/.test(digits) ? digits : '';
}

function verifyTurnstile(token) {
  const props = PropertiesService.getScriptProperties();
  const secret = props.getProperty('TURNSTILE_SECRET');
  if (!secret) {
    console.warn('TURNSTILE_SECRET is not set: bot check skipped.');
    return true;
  }
  if (!token) return false;
  const res = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'post',
    payload: { secret: secret, response: String(token) },
    muteHttpExceptions: true,
  });
  const out = JSON.parse(res.getContentText() || '{}');
  if (!out.success) return false;
  const allowed = (props.getProperty('ALLOWED_HOSTNAMES') || '').split(',').map(function (h) { return h.trim(); }).filter(String);
  return !allowed.length || allowed.indexOf(out.hostname) !== -1;
}

/* ---------- sheet helpers ---------- */

/* The Drive folder that holds every form's sheet and the signed PDFs. */
function rootFolder() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('ROOT_FOLDER_ID');
  try {
    if (id) return DriveApp.getFolderById(id);
  } catch (err) {
    // Folder was deleted: make a new one below.
  }
  const folder = DriveApp.createFolder('LinkMyCampus applications');
  props.setProperty('ROOT_FOLDER_ID', folder.getId());
  return folder;
}

/* Each form has its own folder inside the main one, named after the form. */
function formFolder(program) {
  const props = PropertiesService.getScriptProperties();
  const key = 'FOLDER_' + program;
  const id = props.getProperty(key);
  try {
    if (id) return DriveApp.getFolderById(id);
  } catch (err) {
    // Folder was deleted: make a new one below.
  }
  const folder = rootFolder().createFolder(TABS[program]);
  props.setProperty(key, folder.getId());
  return folder;
}

/* Each form has its own Google Sheet file in its folder, e.g. "Waitlist/LinkMyCampus – Waitlist". */
function sheet(program) {
  const props = PropertiesService.getScriptProperties();
  const key = 'SHEET_' + program;
  const id = props.getProperty(key);
  let ss = null;
  try {
    ss = id ? SpreadsheetApp.openById(id) : null;
  } catch (err) {
    ss = null;
  }
  if (!ss) {
    ss = SpreadsheetApp.create('LinkMyCampus – ' + TABS[program]);
    DriveApp.getFileById(ss.getId()).moveTo(formFolder(program));
    props.setProperty(key, ss.getId());
  }
  const sh = ss.getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.setName(TABS[program]);
    writeHeaders(sh, headersFor(program));
  }
  return sh;
}

function writeHeaders(sh, head) {
  sh.getRange(1, 1, 1, head.length).setValues([head]);
  styleSheet(sh);
}

/* Brand look for every sheet: purple header with white text, frozen, sized columns, light row stripes. */
const WIDTHS = {
  'Submitted at': 150,
  'Full name': 180,
  Email: 230,
  WhatsApp: 140,
  'Why you?': 320,
  'Social media handles': 260,
  'Agreement version': 170,
  Signature: 170,
  'Signed PDF': 230,
  Device: 260,
};
function styleSheet(sh) {
  const cols = sh.getLastColumn();
  if (!cols) return;
  const head = headers(sh);
  sh.getRange(1, 1, 1, cols)
    .setBackground('#35167f')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setFontSize(11)
    .setFontFamily('Arial')
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('left')
    .setWrap(true);
  sh.setRowHeight(1, 40);
  sh.setFrozenRows(1);
  head.forEach(function (name, i) {
    sh.setColumnWidth(i + 1, WIDTHS[name] || 170);
  });
  const dateCol = head.indexOf('Submitted at');
  if (dateCol !== -1) sh.getRange(2, dateCol + 1, sh.getMaxRows() - 1, 1).setNumberFormat('d mmm yyyy, h:mm am/pm');
  // Long answers and lists (one social account per line) wrap inside their cell.
  ['Why you?', 'Social media handles'].forEach(function (name) {
    const c = head.indexOf(name);
    if (c !== -1) sh.getRange(2, c + 1, sh.getMaxRows() - 1, 1).setWrap(true).setVerticalAlignment('top');
  });
  // Light purple stripes on the rows below the header.
  try {
    sh.getBandings().forEach(function (b) { b.remove(); });
    sh.getRange(1, 1, sh.getMaxRows(), cols)
      .applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false)
      .setHeaderRowColor('#35167f')
      .setFirstRowColor('#ffffff')
      .setSecondRowColor('#f6f3fc');
  } catch (err) {
    console.warn('Banding skipped: ' + err);
  }
  sh.getRange(1, 1, 1, cols).setFontColor('#ffffff');
}
function headers(sh) {
  return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
}

function alreadyApplied(sh, email) {
  const last = sh.getLastRow();
  if (last < 2) return false;
  const eCol = headers(sh).indexOf('Email');
  if (eCol === -1) return false;
  return sh
    .getRange(2, eCol + 1, last - 1, 1)
    .getValues()
    .some(function (r) {
      return String(r[0]).toLowerCase() === email;
    });
}

function appendRow(sh, row) {
  const h = headers(sh);
  let added = false;
  Object.keys(row).forEach(function (k) {
    if (h.indexOf(k) === -1) {
      sh.getRange(1, h.length + 1).setValue(k);
      h.push(k);
      added = true;
    }
  });
  if (added) styleSheet(sh);
  sh.appendRow(h.map(function (k) { return k in row ? row[k] : ''; }));
}

function savePdf(base64, program, name) {
  // Signed PDFs go in a "Signed agreements" folder inside that form's own folder.
  const props = PropertiesService.getScriptProperties();
  const key = 'PDF_' + program;
  const id = props.getProperty(key);
  let folder;
  try {
    folder = id ? DriveApp.getFolderById(id) : null;
  } catch (err) {
    folder = null;
  }
  if (!folder) {
    folder = formFolder(program).createFolder('Signed agreements');
    props.setProperty(key, folder.getId());
  }
  const fileName = name + ' - ' + TABS[program] + ' - ' + Utilities.formatDate(new Date(), 'Africa/Lagos', 'yyyy-MM-dd HHmm') + '.pdf';
  const blob = Utilities.newBlob(Utilities.base64Decode(String(base64)), 'application/pdf', fileName);
  return folder.createFile(blob).getUrl();
}

/* ---------- small helpers ---------- */

function clean(v) {
  return v === undefined || v === null ? '' : String(v).trim();
}

function label(key) {
  const s = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
