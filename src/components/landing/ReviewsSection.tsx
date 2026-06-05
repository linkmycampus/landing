import { Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

const featured = {
  quote:
    'Finally an app that gets student life. I can post anonymously about campus stuff, find hostel listings on the marketplace, and join my faculty group without juggling five different apps.',
  name: 'University student',
  handle: '@early_tester',
};

const cards = [
  {
    quote: 'The marketplace alone is worth it. Sold my old textbooks to someone in my faculty same day.',
    handle: '@sci_student',
    followers: 'Faculty of Science',
  },
  {
    quote: 'Campus reels from people I actually know hit different from random TikToks.',
    handle: '@campus_creator',
    followers: 'Campus creator',
  },
  {
    quote: 'Anonymous for the honest takes, visible profile when my student org needs me.',
    handle: '@union_volunteer',
    followers: 'Student org',
  },
  {
    quote: 'Hostel group chat on here beats the WhatsApp chaos we used to have.',
    handle: '@hostel_rep',
    followers: 'Block A',
  },
  {
    quote: 'Knowing only verified students are on here makes the marketplace feel way safer.',
    handle: '@safety_first',
    followers: 'Verified student',
  },
  {
    quote: 'Feed, groups, marketplace, reels. Everything I need as a student in one app.',
    handle: '@waitlist_day1',
    followers: 'Waitlist',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="marketing-container">
        <SectionHeader
          title="What students are saying"
          subtitle="From early waitlist conversations"
          body="Early waitlist students are excited about a campus app with anonymous posting, student groups, reels, and a marketplace built for university life."
        />

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-cta text-white lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">&ldquo;{featured.quote}&rdquo;</p>
            <div className="mt-8">
              <p className="font-semibold">{featured.name}</p>
              <p className="text-sm text-white/70">{featured.handle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 p-6 md:p-8">
            {['Anonymous mode', 'Marketplace', 'Campus groups', 'Reels'].map((label) => (
              <div key={label} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold">…</p>
                <p className="mt-1 text-xs text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.handle} className="rounded-2xl border border-border bg-white p-5">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink">&ldquo;{card.quote}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold text-ink">{card.handle}</span>
                <span className="text-xs text-muted">{card.followers}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
