import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faqs = [
  {
    q: 'What is LinkMyCampus?',
    a: 'LinkMyCampus is a campus app for university students that combines a social feed, student groups, campus reels, a peer-to-peer marketplace, and anonymous posting. Everything happens inside your verified university network, so you connect with real students at your school.',
  },
  {
    q: 'Who can join right now?',
    a: 'We are rolling out campus by campus. Join the waitlist with your student details and we will notify you when your university goes live on LinkMyCampus.',
  },
  {
    q: 'How does the student marketplace work?',
    a: 'Verified students on your campus can list and browse items like hostel spaces, textbooks, electronics, fashion, and more. It is a campus-only marketplace, so you buy and sell with people who actually attend your university.',
  },
  {
    q: 'How do visible and anonymous profiles work?',
    a: 'You choose your mode when you post or interact. Visible posts show your photo, username, and campus. Anonymous posts show no identifiable information, and that activity is not publicly linked to your visible profile.',
  },
  {
    q: 'How does campus verification work?',
    a: 'We verify that you are a real student at your university through methods like university email and student status. Only verified students can access your campus feed, groups, marketplace, and reels.',
  },
  {
    q: 'Is anonymous posting really private?',
    a: 'Anonymous posts do not display your identity to other students on campus. We protect privacy by design, while keeping moderation tools so abuse can be reported and reviewed.',
  },
  {
    q: 'How do you handle inappropriate content?',
    a: 'Students can report any post. We use automated filtering plus manual moderation review to keep campus conversations, groups, and marketplace listings safe and respectful.',
  },
  {
    q: 'What is the ambassador program?',
    a: 'Ambassadors help introduce LinkMyCampus on campus by hosting conversations, sharing the waitlist, and representing the brand among students. Apply on our ambassador page.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border bg-white py-20 md:py-28">
      <div className="marketing-container">
        <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="FAQ"
          body="Learn about the campus feed, student marketplace, groups, reels, and anonymous posting before you join the waitlist."
        />

        <div className="mt-12 overflow-hidden border border-border bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-muted transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
                  <div className="faq-panel-inner">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Still have questions?{' '}
          <a href="mailto:hello@linkmycampus.com" className="font-semibold text-cta underline">
            Contact our team
          </a>
        </p>
        </div>
      </div>
    </section>
  );
}
