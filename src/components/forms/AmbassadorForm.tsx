import { useState, type FormEvent } from 'react';

const fields = [
  { id: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', autoComplete: 'email' },
  { id: 'phone', label: 'WhatsApp number', type: 'tel', placeholder: '+234 …', autoComplete: 'tel' },
  { id: 'university', label: 'University', type: 'text', placeholder: 'e.g. Obafemi Awolowo University', autoComplete: 'organization' },
] as const;

const roles = [
  ['recruitment', 'Recruitment Ambassador'],
  ['content', 'Content Ambassador'],
  ['community', 'Community Ambassador'],
  ['event', 'Event Ambassador'],
  ['campus-lead', 'Campus Lead'],
] as const;

export default function AmbassadorForm() {
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
          Application received
        </h2>
        <p className="hero-fade t-body mx-auto mt-2 max-w-sm" style={{ animationDelay: '250ms' }}>
          Thanks for applying. Our team will review it and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em]">Apply in two minutes</h2>
        <p className="t-body mt-1">Tell us who you are and why you’d be great.</p>
      </div>

      {fields.map((f, i) => (
        <div key={f.id} className="hero-fade" style={{ animationDelay: `${320 + i * 70}ms` }}>
          <label htmlFor={f.id} className="field-label">
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            required
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            className="field"
          />
        </div>
      ))}

      <div className="hero-fade" style={{ animationDelay: '600ms' }}>
        <label htmlFor="ambassadorRole" className="field-label">
          Role you want
        </label>
        <select id="ambassadorRole" name="ambassadorRole" required className="field" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {roles.map(([v, l]) => (
            <option key={v} value={v}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="hero-fade" style={{ animationDelay: '670ms' }}>
        <label htmlFor="why" className="field-label">
          Why you?
        </label>
        <textarea
          id="why"
          name="why"
          required
          rows={3}
          placeholder="Your reach on campus, or ideas for the launch…"
          className="field"
        />
      </div>

      <label className="hero-fade flex items-start gap-3 text-[13px] leading-5 text-muted" style={{ animationDelay: '740ms' }}>
        <input type="checkbox" required className="check" />
        <span>I’ll represent LinkMyCampus responsibly and follow the community standards.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="hero-fade btn btn-lg w-full disabled:opacity-60"
        style={{ animationDelay: '800ms' }}
      >
        {loading ? 'Sending…' : 'Submit application'}
      </button>
    </form>
  );
}
