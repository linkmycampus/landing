import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import UniversityInput from './UniversityInput';
import Turnstile, { turnstileEnabled } from './Turnstile';
import { submitErrorMessage, submitRecord } from '../../lib/signedAgreement';
import { COMMUNITY_REDIRECT_SECONDS } from '../../config/partners';

/* The LinkMyCampus WhatsApp channel, shown after someone joins the waitlist. */
const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb9SBw59sBIHimJ1iB2y';

const fields = [
  { id: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', autoComplete: 'email' },
  { id: 'university', label: 'University', type: 'text', placeholder: 'e.g. Obafemi Awolowo University', autoComplete: 'organization' },
] as const;

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tick, setTick] = useState(0);
  const [stay, setStay] = useState(false);

  // After joining, count down and open the WhatsApp channel (unless they choose to stay).
  const redirecting = submitted && !stay;
  const countdown = Math.max(0, COMMUNITY_REDIRECT_SECONDS - tick);
  useEffect(() => {
    if (!redirecting) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => window.clearInterval(id);
  }, [redirecting]);
  useEffect(() => {
    if (redirecting && tick >= COMMUNITY_REDIRECT_SECONDS) window.location.assign(WHATSAPP_CHANNEL);
  }, [redirecting, tick]);

  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);
  const onToken = useCallback((t: string) => setToken(t), []);

  // Saves the sign-up to the "Waitlist" tab of the Google Sheet.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const details = {
      fullName: (raw.fullName ?? '').trim().replace(/\s+/g, ' '),
      email: (raw.email ?? '').trim().toLowerCase(),
      university: (raw.university ?? '').trim(),
    };
    if (details.fullName.split(' ').length < 2) return setError('Enter your first and last name.');
    setLoading(true);
    setError('');
    const res = await submitRecord(
      {
        program: 'waitlist',
        agreementVersion: '',
        fullName: details.fullName,
        details,
        signature: { kind: 'typed', text: '' },
        signedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
      },
      { hp: raw.website ?? '', elapsedMs: Date.now() - shownAt.current, turnstileToken: token },
    );
    setLoading(false);
    if (res.ok) setSubmitted(true);
    else setError(res.error === 'duplicate' ? `${details.email} is already on the waitlist.` : submitErrorMessage(res, details.email));
  };

  if (submitted) {
    return (
      <div className="py-10 text-center" aria-live="polite">
        <div className="pop mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl text-white">
          ✓
        </div>
        <h2 className="hero-fade mt-6 font-display text-[24px] font-semibold tracking-[-0.02em] text-ink" style={{ animationDelay: '150ms' }}>
          You’re on the list
        </h2>
        <p className="hero-fade t-body mx-auto mt-2 max-w-sm" style={{ animationDelay: '250ms' }}>
          We’ll email you when LinkMyCampus opens at your university.
        </p>
        <div className="hero-fade mt-7" style={{ animationDelay: '350ms' }}>
          <a href={WHATSAPP_CHANNEL} className="btn btn-lg ring-glow">
            Follow us on WhatsApp
          </a>
          {redirecting ? (
            <p className="mt-3 text-[13px] text-muted">
              Opening the LinkMyCampus channel in {countdown}s…{' '}
              <button type="button" onClick={() => setStay(true)} className="font-medium text-ink underline underline-offset-4">
                Stay here
              </button>
            </p>
          ) : (
            <p className="mt-3 text-[13px] text-muted">Get launch news first on the LinkMyCampus channel.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em]">Get early access</h2>
        <p className="t-body mt-1">Takes less than a minute.</p>
      </div>

      {fields.map((f, i) => (
        <div key={f.id} className={`hero-fade ${f.id === 'university' ? 'relative z-20' : ''}`} style={{ animationDelay: `${320 + i * 70}ms` }}>
          <label htmlFor={f.id} className="field-label">
            {f.label}
          </label>
          {f.id === 'university' ? (
            <UniversityInput id={f.id} name={f.id} />
          ) : (
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              required
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              className="field"
            />
          )}
        </div>
      ))}

      {/* Honeypot: hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-px w-px opacity-0" />

      <label className="hero-fade flex items-start gap-3 text-[13px] leading-5 text-muted" style={{ animationDelay: '560ms' }}>
        <input type="checkbox" required className="check" />
        <span>I’m a university student and I’d like launch updates from LinkMyCampus.</span>
      </label>

      <Turnstile onToken={onToken} />
      {error && <p className="text-[13px] text-red-600" role="alert">{error}</p>}

      <button
        type="submit"
        disabled={loading || (turnstileEnabled && !token)}
        className="hero-fade btn btn-lg ring-glow w-full disabled:opacity-60"
        style={{ animationDelay: '620ms' }}
      >
        {loading ? 'Joining…' : 'Join the waitlist'}
      </button>
    </form>
  );
}
