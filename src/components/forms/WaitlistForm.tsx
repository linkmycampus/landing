import { useState, type FormEvent } from 'react';
import UniversityInput from './UniversityInput';

const fields = [
  { id: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', autoComplete: 'email' },
  { id: 'university', label: 'University', type: 'text', placeholder: 'e.g. Obafemi Awolowo University', autoComplete: 'organization' },
] as const;

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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

      <label className="hero-fade flex items-start gap-3 text-[13px] leading-5 text-muted" style={{ animationDelay: '560ms' }}>
        <input type="checkbox" required className="check" />
        <span>I’m a university student and I’d like launch updates from LinkMyCampus.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="hero-fade btn btn-lg ring-glow w-full disabled:opacity-60"
        style={{ animationDelay: '620ms' }}
      >
        {loading ? 'Joining…' : 'Join the waitlist'}
      </button>
    </form>
  );
}
