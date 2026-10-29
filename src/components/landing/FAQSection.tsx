import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Is it for a job?',
    a: 'LinkMyCampus paths are community and creator programs — not traditional full-time jobs. Ambassadors, creators, and media partners grow influence, access perks, and help shape campus culture.',
  },
  {
    q: 'Who can become a Campus Ambassador?',
    a: 'Any active university student who wants to lead on campus can apply. We look for energy, credibility with peers, and a clear plan to grow the community at your school.',
  },
  {
    q: 'What do Campus Creators do?',
    a: 'Creators publish campus stories, short video, and culture moments. You keep your voice while gaining distribution, recognition, and access to network opportunities.',
  },
  {
    q: 'Can media houses and blogs partner?',
    a: 'Yes. Campus magazines, blogs, and media collectives can join as Media Partners to collaborate on distribution, features, and cross-campus storytelling.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most applicants move from sign-up to community access in minutes once they pick a path and complete the short digital application.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="marketing-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand">Help</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Got questions? We&apos;re here to help
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Everything you need to know about joining as an ambassador, creator, or media partner.
          </p>
          <a
            href="mailto:hello@linkmycampus.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
          >
            Contact us
          </a>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-brand transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
                  <div className="faq-panel-inner">
                    <p className="pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
