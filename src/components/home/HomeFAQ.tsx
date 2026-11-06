import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is LinkMyCampus?',
    a: 'LinkMyCampus is the digital home of Planet Campus: one app where students discover what’s happening on campus, find events, meet people, join communities and share what’s going on around them. It brings your campus feed, chat, Pages, events and reels into one place.',
  },
  {
    q: 'What is Planet Campus?',
    a: 'Every campus is more than a school. It’s a world of its own, with its own people, culture, communities, businesses, events and stories. We call it Planet Campus, and LinkMyCampus is where that world lives online.',
  },
  {
    q: 'Why did we build LinkMyCampus?',
    a: 'Because campus life is scattered. One event is on Instagram, an announcement is buried in a WhatsApp group, an opportunity is shared in someone’s DM. You shouldn’t have to know the right people, or be in ten group chats, to know what’s happening on your campus.',
  },
  {
    q: 'What can I do on LinkMyCampus?',
    a: 'Follow your campus feed, watch campus reels, chat with coursemates, join Pages for your department, hostel or club, and find and register for events on your campus.',
  },
  {
    q: 'Who can join LinkMyCampus?',
    a: 'LinkMyCampus is open to students at all 328 universities, 203 polytechnics and 355 colleges in Nigeria. When you sign up you pick your campus, so your feed, Pages and events are full of people from your school.',
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
      {/* FAQ structured data so Google can show these questions in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
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
          {faqs.map((f) => (
            <details
              key={f.q}
              className="faq-q group mb-2 rounded-[18px] bg-surface px-5"
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
