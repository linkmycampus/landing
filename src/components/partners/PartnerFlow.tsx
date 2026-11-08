import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Ban,
  BadgeCheck,
  Building2,
  Check,
  Clock,
  Download,
  FileText,
  Megaphone,
  MessageCircle,
  Newspaper,
  PenLine,
  Repeat,
  Shirt,
  ShieldCheck,
  Smartphone,
  Ticket,
  Type,
  UserPlus,
  Users,
  Video,
  Wallet,
} from 'lucide-react';
import type { IconName, Item, Program } from '../../config/partners';
import { BRAND, BRAND_ICON, ICON_GREY_ON_DARK } from '../../config/iconColors';
import { buildSignedPdf, submitRecord, type Signature, type SignedRecord } from '../../lib/signedAgreement';
import SignaturePad from './SignaturePad';
import Select from '../forms/Select';
import UniversityInput from '../forms/UniversityInput';

const ICONS: Record<IconName, typeof Award> = {
  award: Award,
  megaphone: Megaphone,
  message: MessageCircle,
  shirt: Shirt,
  users: Users,
  certificate: BadgeCheck,
  shield: ShieldCheck,
  file: FileText,
  video: Video,
  ticket: Ticket,
  repeat: Repeat,
  clock: Clock,
  phone: Smartphone,
  userPlus: UserPlus,
  wallet: Wallet,
  ban: Ban,
  building: Building2,
  newspaper: Newspaper,
};

const STEP_NAMES = ['The role', 'The perks', 'The ground rules', 'About you', 'The agreement', 'Sign', 'Done'];
const STEP_NAMES_SHORT = ['The role', 'The perks', 'The ground rules', 'About you', 'Done'];

const titleCls = 'font-display text-[clamp(1.75rem,1.3rem+1.5vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink';

/* ---------- Step pieces ---------- */

function Header({ step, total, names }: { step: number; total: number; names: string[] }) {
  const pct = ((step + 1) / total) * 100;
  return (
    <div className="mb-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[12px] tracking-[0.08em] text-muted">
          <span className="text-ink">{String(step + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
        </span>
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{names[step]}</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-fill" aria-hidden>
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-[var(--ease-out)]"
          style={{ width: `${pct}%`, background: BRAND.purple }}
        />
      </div>
    </div>
  );
}

function Chip({ icon, size = 40 }: { icon: IconName; size?: number }) {
  const Icon = ICONS[icon];
  const c = BRAND_ICON;
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[12px]"
      style={{ width: size, height: size, background: c.bg, color: c.fg }}
    >
      <Icon size={Math.round(size * 0.45)} strokeWidth={1.9} aria-hidden />
    </span>
  );
}

/** Step 1: a numbered run-down of the role. */
function RoleList({ items }: { items: Item[] }) {
  return (
    <ol className="relative mt-7 space-y-3">
      {items.map((it, i) => (
        <li
          key={it.text}
          className="stagger-in flex items-center gap-4 rounded-[18px] bg-surface p-3 pr-5"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <Chip icon={it.icon} size={48} />
          <span className="flex-1 text-[15.5px] font-semibold leading-snug tracking-[-0.01em] text-ink">{it.text}</span>
          <span className="font-mono text-[12px] text-faint">{String(i + 1).padStart(2, '0')}</span>
        </li>
      ))}
    </ol>
  );
}

/** Step 2: perks as a colourful bento. A perk with a badge gets a dark standout card. */
function Perks({ items }: { items: Item[] }) {
  return (
    <div className="mt-7 grid grid-cols-2 gap-3">
      {items.map((it, i) => {
        const Icon = ICONS[it.icon];
        const c = BRAND_ICON;
        // With an odd number of plain cards, the first one spans the full row so there is no gap.
        const plain = items.filter((x) => !x.badge).length;
        const wide = plain % 2 === 1 && i === 0;
        if (it.badge) {
          return (
            <div
              key={it.text}
              className="stagger-in relative col-span-2 flex items-center gap-4 overflow-hidden rounded-[22px] bg-brand p-5 text-white"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <Icon size={30} strokeWidth={1.6} className="shrink-0" style={{ color: ICON_GREY_ON_DARK }} aria-hidden />
              <span>
                <span
                  className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ background: '#fff', color: BRAND.purple }}
                >
                  {it.badge}
                </span>
                <span className="mt-1.5 block text-[17px] font-semibold leading-snug tracking-[-0.015em]">{it.text}</span>
              </span>
            </div>
          );
        }
        return (
          <div
            key={it.text}
            className={`stagger-in relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-[22px] p-4 ${wide ? 'col-span-2' : ''}`}
            style={{ background: 'var(--bg-2)', animationDelay: `${i * 90}ms` }}
          >
            <Icon size={22} strokeWidth={1.8} style={{ color: c.fg }} aria-hidden />
            <span className="relative mt-6 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ink">{it.text}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Step 3: ground rules as a checklist. */
function Rules({ items }: { items: Item[] }) {
  return (
    <ul className="mt-7 overflow-hidden rounded-[22px] border border-border">
      {items.map((it, i) => (
        <li
          key={it.text}
          className="stagger-in flex items-center gap-4 border-b border-border px-5 py-4 last:border-0"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <Check size={18} strokeWidth={2.4} className="shrink-0" style={{ color: BRAND_ICON.fg }} aria-hidden />
          <span className="flex-1 text-[15px] font-medium text-ink">{it.text}</span>
          <Chip icon={it.icon} size={32} />
        </li>
      ))}
    </ul>
  );
}

function Nav({
  onBack,
  next = 'Continue',
  disabled,
  submit,
  onNext,
}: {
  onBack?: () => void;
  next?: string;
  disabled?: boolean;
  submit?: boolean;
  onNext?: () => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-3">
      {onBack ? (
        <button type="button" onClick={onBack} className="btn btn-lg btn-quiet ring-glow">
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type={submit ? 'submit' : 'button'}
        onClick={onNext}
        disabled={disabled}
        className="btn btn-lg ring-glow disabled:opacity-40"
      >
        {next}
      </button>
    </div>
  );
}

/* ---------- The flow ---------- */

export default function PartnerFlow({ program, onExit }: { program: Program; onExit?: () => void }) {
  const hasAgreement = !!program.terms;
  const names = hasAgreement ? STEP_NAMES : STEP_NAMES_SHORT;
  const total = names.length;
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [readAll, setReadAll] = useState(false);
  const [mode, setMode] = useState<'typed' | 'drawn'>('typed');
  const [typed, setTyped] = useState('');
  const [drawn, setDrawn] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [signedUrl, setSignedUrl] = useState('');
  const top = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  // Bring the top of the card into view on each step (helps on phones).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  useEffect(
    () => () => {
      if (signedUrl) URL.revokeObjectURL(signedUrl);
    },
    [signedUrl],
  );

  const back = () => (step === 0 ? onExit?.() : setStep((s) => s - 1));
  const next = () => setStep((s) => s + 1);
  const firstName = (details.fullName ?? '').trim().split(/\s+/)[0] ?? '';

  const saveDetails = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    setDetails(data);
    if (!typed) setTyped(data.fullName ?? '');
    if (hasAgreement) return next();

    // No agreement for this role yet: send the application and finish.
    setBusy(true);
    setError('');
    const ok = await submitRecord({
      program: program.slug,
      agreementVersion: program.version,
      fullName: data.fullName ?? '',
      details: data,
      signature: { kind: 'typed', text: '' },
      signedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });
    setBusy(false);
    if (ok) next();
    else setError('We couldn’t send that. Check your connection and try again.');
  };

  const sign = async () => {
    const signature: Signature = mode === 'typed' ? { kind: 'typed', text: typed.trim() } : { kind: 'drawn', dataUrl: drawn };
    const record: SignedRecord = {
      program: program.slug,
      agreementVersion: program.version,
      fullName: details.fullName ?? '',
      details,
      signature,
      signedAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };
    setBusy(true);
    setError('');
    try {
      const doc = await buildSignedPdf(program, record);
      const pdfBase64 = doc.output('datauristring').split(',')[1];
      const ok = await submitRecord(record, pdfBase64);
      if (!ok) throw new Error('submit failed');
      setSignedUrl(URL.createObjectURL(doc.output('blob')));
      next();
    } catch {
      setError('We couldn’t save your signature. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  };

  const canSign = mode === 'typed' ? typed.trim().length > 1 : !!drawn;
  const fileName = `LMC_${program.agreementTitle.replace(/[^A-Za-z]+/g, '_')}_${(details.fullName ?? '').replace(/\s+/g, '_')}.pdf`;
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  let body: React.ReactNode;

  if (step === 0) {
    body = (
      <>
        <h2 className={titleCls}>Here’s the gig.</h2>
        <p className="t-body mt-2">As a {program.name}, this is what your week looks like.</p>
        <RoleList items={program.doing} />
        <Nav onBack={onExit ? back : undefined} onNext={next} />
      </>
    );
  } else if (step === 1) {
    body = (
      <>
        <h2 className={titleCls}>What’s in it for you.</h2>
        <p className="t-body mt-2">The good part.</p>
        <Perks items={program.get} />
        <Nav onBack={back} onNext={next} />
      </>
    );
  } else if (step === 2) {
    body = (
      <>
        <h2 className={titleCls}>A few ground rules.</h2>
        <p className="t-body mt-2">Simple ones. They keep the community great.</p>
        <Rules items={program.expect} />
        <Nav onBack={back} onNext={next} next="I’m in" />
      </>
    );
  } else if (step === 3) {
    body = (
      <form onSubmit={saveDetails}>
        <h2 className={titleCls}>Tell us about you.</h2>
        <p className="t-body mt-2">Takes less than a minute.</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {program.fields.map((f) => {
            const wide = f.type === 'textarea' || f.type === 'select' || f.id === 'fullName' || f.id === 'university';
            return (
              <div key={f.id} className={wide ? 'sm:col-span-2' : ''}>
                <label htmlFor={f.id} className="field-label">
                  {f.label}
                </label>
                {f.type === 'select' ? (
                  <Select id={f.id} name={f.id} required options={f.options ?? []} defaultValue={details[f.id] ?? ''} />
                ) : f.id === 'university' ? (
                  <UniversityInput id={f.id} name={f.id} defaultValue={details[f.id] ?? ''} />
                ) : f.type === 'textarea' ? (
                  <textarea
                    id={f.id}
                    name={f.id}
                    required={f.required !== false}
                    rows={3}
                    placeholder={f.placeholder}
                    defaultValue={details[f.id]}
                    className="field"
                  />
                ) : (
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type ?? 'text'}
                    required={f.required !== false}
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    defaultValue={details[f.id]}
                    className="field"
                  />
                )}
              </div>
            );
          })}
        </div>
        {error && <p className="mt-4 text-[13px] text-red-600">{error}</p>}
        <Nav onBack={back} submit disabled={busy} next={hasAgreement ? 'Continue' : busy ? 'Sending…' : 'Send application'} />
      </form>
    );
  } else if (hasAgreement && step === 4) {
    body = (
      <>
        <h2 className={titleCls}>Read the agreement.</h2>
        <p className="t-body mt-2">Short and plain. {program.terms!.length} points, no fine print.</p>

        {/* A sheet of paper */}
        <div className="relative mt-7 overflow-hidden rounded-[18px] bg-white shadow-[0_24px_50px_-28px_rgba(30,12,80,0.45),0_0_0_1px_rgba(0,0,0,0.06)]">
          <div className="h-1.5" style={{ background: BRAND.purple }} aria-hidden />
          <div className="flex items-start justify-between gap-4 px-6 pb-3 pt-5">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">LinkMyCampus</p>
              <p className="mt-1 font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">{program.agreementTitle}</p>
            </div>
            {program.pdf && (
              <a
                href={program.pdf}
                download
                aria-label="Download the agreement as a PDF"
                className="ring-glow flex h-10 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[12.5px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--fill)', color: 'var(--label)' }}
              >
                <Download size={15} strokeWidth={2} aria-hidden />
                PDF
              </a>
            )}
          </div>
          <ol
            className="max-h-[46vh] overflow-y-auto px-6 pb-10"
            onScroll={(e) => {
              const el = e.currentTarget;
              if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24) setReadAll(true);
            }}
          >
            {program.terms!.map((t, i) => (
              <li key={t.title} className="grid grid-cols-[28px_1fr] gap-2 border-t border-dashed border-border py-3.5">
                <span className="font-mono text-[13px] font-semibold" style={{ color: BRAND_ICON.fg }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-ink">{t.title}</span>
                  <span className="mt-0.5 block text-[13.5px] leading-relaxed text-muted">{t.body}</span>
                </span>
              </li>
            ))}
          </ol>
          {!readAll && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-white to-transparent pb-2 text-[11.5px] font-medium text-muted">
              Scroll to read all
            </div>
          )}
        </div>

        <button
          type="button"
          role="checkbox"
          aria-checked={agreed}
          onClick={() => setAgreed((a) => !a)}
          className="mt-4 flex w-full items-center gap-3 rounded-[16px] px-4 py-3.5 text-left text-[14px] font-medium transition-colors duration-200"
          style={agreed ? { background: BRAND.purpleSoft, color: BRAND.purple } : { background: 'var(--fill)', color: 'var(--label)' }}
        >
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            style={agreed ? { background: BRAND.purple, color: '#fff' } : { background: '#fff', boxShadow: 'inset 0 0 0 1.5px rgba(0,0,0,0.2)' }}
          >
            {agreed && <Check size={14} strokeWidth={3} aria-hidden />}
          </span>
          I’ve read the {program.name} agreement and I agree to it.
        </button>
        <Nav onBack={back} onNext={next} disabled={!agreed} next="Continue to sign" />
      </>
    );
  } else if (hasAgreement && step === 5) {
    body = (
      <>
        <h2 className={titleCls}>Make it official.</h2>
        <p className="t-body mt-2">Type your name or draw your signature.</p>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-fill p-1" role="tablist" aria-label="Signature type">
          {(
            [
              ['typed', 'Type it', Type],
              ['drawn', 'Draw it', PenLine],
            ] as const
          ).map(([m, label, Icon]) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`flex h-10 items-center justify-center gap-2 rounded-full text-[13.5px] font-semibold transition-colors ${
                mode === m ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              <Icon size={15} strokeWidth={2} aria-hidden />
              {label}
            </button>
          ))}
        </div>

        {/* The signing line, like the bottom of a paper contract */}
        <div className="mt-5 rounded-[18px] bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          {mode === 'typed' ? (
            <>
              <label htmlFor="typedSig" className="sr-only">
                Type your full name
              </label>
              <input
                id="typedSig"
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent text-[34px] leading-tight text-ink outline-none placeholder:text-faint"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive' }}
              />
            </>
          ) : (
            <SignaturePad onChange={setDrawn} />
          )}
          <div className="mt-2 flex items-center gap-2 border-t-2 border-ink/80 pt-2">
            <span className="text-[16px] font-semibold text-ink" aria-hidden>
              ✕
            </span>
            <span className="flex-1 truncate text-[12.5px] text-muted">
              {details.fullName}, {program.signer}
            </span>
            <span className="text-[12.5px] text-muted">{today}</span>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-muted">
          Your electronic signature counts the same as signing on paper. We record the agreement version, the date and time,
          and the device you sign on.
        </p>
        {error && <p className="mt-3 text-[13px] text-red-600">{error}</p>}
        <Nav onBack={back} onNext={sign} disabled={!canSign || busy} next={busy ? 'Signing…' : 'Sign agreement'} />
      </>
    );
  } else {
    const { label, url } = program.community;
    body = (
      <>
        <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
          <span
            className="pop relative flex items-center justify-center"
            style={{ color: BRAND_ICON.fg }}
          >
            <Check size={64} strokeWidth={2} aria-hidden />
          </span>
        </div>
        <h2 className={`${titleCls} text-center`}>
          {hasAgreement ? `You’re in${firstName ? `, ${firstName}` : ''}!` : 'Application sent!'}
        </h2>
        <p className="t-body mx-auto mt-2 max-w-sm text-center">
          {hasAgreement
            ? `Welcome to LinkMyCampus as a ${program.name}. Here’s what to do next.`
            : 'Thanks for reaching out. Our team will get back to you soon.'}
        </p>

        <div className="mt-7 grid gap-3">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-[20px] bg-brand p-4 text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={22} strokeWidth={1.8} className="shrink-0" style={{ color: ICON_GREY_ON_DARK }} aria-hidden />
              <span className="flex-1 font-semibold">{label}</span>
            </a>
          ) : (
            <div className="flex items-center gap-4 rounded-[20px] bg-brand p-4 text-white">
              <MessageCircle size={22} strokeWidth={1.8} className="shrink-0" style={{ color: ICON_GREY_ON_DARK }} aria-hidden />
              <span className="text-[14px] leading-snug">
                <span className="block font-semibold">{label}</span>
                <span className="text-white/70">
                  We’ll send the link to {details.email || 'your email'} and WhatsApp.
                </span>
              </span>
            </div>
          )}

          {signedUrl && (
            <a
              href={signedUrl}
              download={fileName}
              className="group flex items-center gap-4 rounded-[20px] p-4 transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--bg-2)' }}
            >
              <FileText size={22} strokeWidth={1.8} className="shrink-0" style={{ color: BRAND_ICON.fg }} aria-hidden />
              <span className="flex-1">
                <span className="block font-semibold text-ink">Your signed agreement</span>
                <span className="text-[13px] text-muted">Download a PDF copy to keep</span>
              </span>
              <Download size={18} style={{ color: BRAND_ICON.fg }} aria-hidden />
            </a>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-[14px] font-medium text-muted underline underline-offset-4 hover:text-ink">
            Back to home
          </Link>
        </div>
      </>
    );
  }

  return (
    <div ref={top} className="scroll-mt-24">
      {step < total - 1 && <Header step={step} total={total} names={names} />}
      <div key={step} className="hero-fade" style={{ animationDuration: '450ms' }}>
        {body}
      </div>
    </div>
  );
}
