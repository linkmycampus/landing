import { useState, type FormEvent } from 'react';

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
      <div className="text-center py-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand text-2xl">
          ✓
        </div>
        <h2 className="mt-4 text-xl font-bold text-ink">Application received</h2>
        <p className="mt-2 text-sm text-muted">
          Thanks for applying to represent LinkMyCampus. Our team will review and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-ink">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-ink">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@university.edu"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
          WhatsApp / phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+234 …"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="faculty" className="mb-1.5 block text-sm font-medium text-ink">
          Faculty / Department / Level
        </label>
        <input
          id="faculty"
          name="faculty"
          type="text"
          required
          placeholder="e.g. Social Sciences, 300 level"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="instagram" className="mb-1.5 block text-sm font-medium text-ink">
          Instagram / TikTok handle <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          placeholder="@yourhandle"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="why" className="mb-1.5 block text-sm font-medium text-ink">
          Why do you want to be an ambassador?
        </label>
        <textarea
          id="why"
          name="why"
          required
          rows={4}
          placeholder="Tell us about your reach on campus, past promo experience, or ideas for launch…"
          className="w-full resize-y rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="reach" className="mb-1.5 block text-sm font-medium text-ink">
          Estimated campus reach
        </label>
        <select
          id="reach"
          name="reach"
          required
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        >
          <option value="">Select one</option>
          <option value="50">Up to 50 students</option>
          <option value="200">50–200 students</option>
          <option value="500">200–500 students</option>
          <option value="500+">500+ students</option>
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" required className="mt-1 rounded border-border text-cta focus:ring-cta" />
        <span>
          I agree to represent LinkMyCampus responsibly and follow community guidelines when promoting on campus.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-cta py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover disabled:opacity-60"
      >
        {loading ? 'Submitting…' : 'Submit application'}
      </button>

      <p className="text-center text-xs text-muted">
        Form storage not connected yet — submissions are simulated locally until you wire a backend.
      </p>
    </form>
  );
}
