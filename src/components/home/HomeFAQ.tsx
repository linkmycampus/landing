import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Who can join LinkMyCampus?',
    a: 'LinkMyCampus is built for university and college students. When you sign up you pick your campus, so your feed, Pages and events are full of people from your school.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. LinkMyCampus is free for students. Join the waitlist and we’ll let you know when your campus is live.',
  },
  {
    q: 'Is the ambassador or creator program a job?',
    a: 'No. They are community and creator programs, not full-time jobs. Ambassadors, creators and media partners get recognition, distribution, perks and early access while they help shape campus culture.',
  },
  {
    q: 'Can our campus magazine or blog partner with you?',
    a: 'Yes. Campus magazines, blogs and media collectives can join as Media Partners to collaborate on distribution, features and cross-campus stories.',
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="sec">
      <div className="wrap split">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="faq-title" className="h2">
            Questions,
            <span className="t2">answered plainly.</span>
          </h2>
          <p className="lede mt-5 max-w-[26em]">
            Anything else, email{' '}
            <a href="mailto:hello@linkmycampus.com" className="inline-link">
              hello@linkmycampus.com
            </a>
            .
          </p>
        </div>

        <div>
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className={`faq-q group border-b border-border ${i === 0 ? 'border-t' : ''}`}
            >
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 rounded-[6px] py-[18px]">
                <span className="t-title">{f.q}</span>
                <span className="faq-plus inline-flex h-6 w-6 shrink-0 items-center justify-center text-muted transition-transform duration-200 ease-[var(--ease)]">
                  <Plus size={18} strokeWidth={1.6} />
                </span>
              </summary>
              <p className="t-body max-w-[38em] pb-6 pr-[52px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
