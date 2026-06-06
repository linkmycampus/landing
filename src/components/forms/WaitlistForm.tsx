import { useState, type FormEvent } from 'react';

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
      <div className="text-center py-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand text-2xl">
          ✓
        </div>
        <h2 className="mt-4 text-xl font-bold text-ink">You&apos;re on the list</h2>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll email you when LinkMyCampus opens at your university. Share with friends on campus.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Your full name"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
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
          placeholder="you@email.com"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-ink">
          WhatsApp number
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="+234 …"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="university" className="mb-1.5 block text-sm font-medium text-ink">
          University
        </label>
        <input
          id="university"
          name="university"
          type="text"
          required
          placeholder="e.g. University of Lagos"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="faculty" className="mb-1.5 block text-sm font-medium text-ink">
          Faculty / Department
        </label>
        <input
          id="faculty"
          name="faculty"
          type="text"
          required
          placeholder="e.g. Faculty of Science, Computer Science"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="matric" className="mb-1.5 block text-sm font-medium text-ink">
          Matric number <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="matric"
          name="matric"
          type="text"
          placeholder="For faster verification when we launch"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-shadow focus:border-cta focus:ring-2 focus:ring-cta/20"
        />
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-ink">
          What are you most excited about?
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
        >
          <option value="campus-feeds">Campus Feeds</option>
          <option value="anonymous">Anonymous Posting</option>
          <option value="marketplace">Student Marketplace</option>
          <option value="reels">Reels</option>
          <option value="groups">Campus Groups</option>
          <option value="search">Search</option>
          <option value="all">Everything</option>
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" required className="mt-1 rounded border-border text-cta focus:ring-cta" />
        <span>
          I am a current or incoming university student and agree to receive launch updates from LinkMyCampus.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-cta py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover disabled:opacity-60"
      >
        {loading ? 'Submitting…' : 'Join the waitlist'}
      </button>

      <p className="text-center text-xs text-muted">
        Form storage not connected yet — submissions are simulated locally until you wire a backend.
      </p>
    </form>
  );
}
