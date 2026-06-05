import { Link } from 'react-router-dom';
import { Check, GraduationCap, Shield, Smartphone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Join the waitlist',
    body: 'Reserve your spot on the anonymous campus social network. We\'ll notify you the moment your university campus goes live on LinkMyCampus.',
    mock: (
      <div className="rounded-xl border border-border bg-surface p-4 text-left">
        <p className="text-xs font-semibold text-muted">Your email</p>
        <div className="mt-2 h-9 rounded-lg border border-border bg-white" />
        <div className="mt-3 h-9 rounded-lg bg-cta" />
      </div>
    ),
    note: 'Takes under a minute',
  },
  {
    num: '02',
    title: 'Verify your campus',
    body: 'Confirm you\'re a real student at your university. Campus verification keeps your anonymous feed student-only and keeps outsiders out of your conversations.',
    mock: (
      <div className="rounded-xl border border-border bg-surface p-4 text-left">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Shield size={16} className="text-cta" />
          Campus verification
        </div>
        <p className="mt-2 text-xs text-muted">University email · Student status</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full w-2/3 rounded-full bg-cta" />
        </div>
      </div>
    ),
    note: 'Privacy-first verification',
  },
  {
    num: '03',
    title: 'Post anonymously',
    body: 'Enter your campus feed and post without your name attached. Toggle to a visible profile when you want, join anonymous-friendly groups, and scroll campus reels.',
    mock: (
      <div className="rounded-xl border border-border bg-surface p-4 text-left">
        <div className="flex gap-2">
          {['Feed', 'Groups', 'Reels'].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                i === 0 ? 'bg-cta text-white' : 'bg-white text-muted border border-border'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink">Anonymous by default. Visible when you choose.</p>
      </div>
    ),
    note: 'Dual profile always available',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-grid border-t border-border py-20 md:py-28">
      <div className="marketing-container">
        <SectionHeader
          title="Start posting anonymously in 3 steps"
          body="Getting on LinkMyCampus takes minutes. Verify your student status once, then share campus thoughts anonymously or on your visible profile whenever you want."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">
                {step.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{step.body}</p>
              <div className="my-5">{step.mock}</div>
              <p className="flex items-center gap-1.5 text-xs font-medium text-ink">
                <Check size={14} className="text-emerald-600" />
                {step.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-white p-6 md:flex-row md:p-8">
          <div>
            <h3 className="text-lg font-bold text-ink">Ready to be first on campus?</h3>
            <p className="mt-1 text-sm text-muted">
              Join the waitlist for early access to feed, groups, marketplace, reels, and
              anonymous posting on LinkMyCampus.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:bg-cta-hover"
            >
              <Smartphone size={16} />
              Join waitlist
            </Link>
            <Link
              to="/ambassador"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
            >
              <GraduationCap size={16} />
              Ambassador program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
