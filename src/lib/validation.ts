import type { Field } from '../config/partners';

/* The same rules run again in the Google Apps Script, so a bypassed browser check still fails there. */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Nigerian numbers become +234XXXXXXXXXX. Other numbers must start with + and a country code. */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/[\s\-().]/g, '');
  const ng = digits.match(/^(?:\+?234|0)([789][01]\d{8})$/);
  if (ng) return `+234${ng[1]}`;
  if (/^\+[1-9]\d{7,14}$/.test(digits)) return digits;
  return null;
}

export function normalizeEmail(raw: string) {
  return raw.trim().toLowerCase();
}

/** Checks the details form. Returns cleaned values and an error message per field. */
export function validateDetails(fields: Field[], raw: Record<string, string>) {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const v = (raw[f.id] ?? '').trim();
    const required = f.required !== false;
    if (f.type === 'socials') {
      // One account per line. Keep the line breaks so each lands on its own line in the sheet.
      const lines = v.split('\n').map((l) => l.trim().replace(/\s+/g, ' ')).filter(Boolean);
      values[f.id] = lines.join('\n');
      if (!lines.length && required) errors[f.id] = 'Add at least one social media handle.';
      else if (values[f.id].length > 1000) errors[f.id] = 'That’s too long.';
      continue;
    }
    if (!v) {
      if (required) errors[f.id] = `Enter your ${f.label.toLowerCase()}.`;
      values[f.id] = '';
      continue;
    }
    if (v.length > 500) {
      errors[f.id] = 'That’s too long.';
    } else if (f.id === 'fullName') {
      if (v.split(/\s+/).length < 2 || !/^[\p{L}][\p{L}'’.\- ]+$/u.test(v) || v.length > 80) {
        errors[f.id] = 'Enter your first and last name.';
      }
    } else if (f.type === 'email') {
      if (!EMAIL_RE.test(v)) errors[f.id] = 'Enter a valid email address.';
      values[f.id] = normalizeEmail(v);
      continue;
    } else if (f.type === 'tel') {
      const p = normalizePhone(v);
      if (!p) errors[f.id] = 'Enter a valid WhatsApp number, e.g. 0803 123 4567.';
      values[f.id] = p ?? v;
      continue;
    } else if (f.type === 'url') {
      try {
        new URL(v.startsWith('http') ? v : `https://${v}`);
      } catch {
        errors[f.id] = 'Enter a valid link.';
      }
    }
    values[f.id] = v.replace(/\s+/g, ' ');
  }
  return { values, errors };
}
