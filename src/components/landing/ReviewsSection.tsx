import { Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

const featured = {
  quote:
    'I found out about my faculty tutorial, and another department event all in the same place. That\'s exactly how campus information should work.',
  name: 'David Adebayo',
  handle: '300L Mechanical Engineering',
};

const cards = [
  {
    quote: 'Most times the person you need is just one department away, but you don\'t know how to find them. I like that I can actually discover people in my school beyond my department.',
    handle: 'Maryam Bello',
    followers: '200L Mass Communication',
  },
  {
    quote: 'If this was available when I first gained admission, it would\'ve saved me weeks of asking random people where to get accommodation, and other essentials.',
    handle: 'Chinedu Okeke',
    followers: '400L Economics Department',
  },
  {
    quote: 'The anonymous feature is probably what I use most. There are many personal questions I want to ask but I don\'t want to be judge by it.',
    handle: 'Abdulrahman Yusuf',
    followers: '200L Computer Science',
  },
  {
    quote: 'I spend too much time jumping between WhatsApp groups, TVs Status and pages, just to stay informed. Having everything in one place makes so much sense now.',
    handle: 'Favour Nwankwo',
    followers: '100L Law',
  },
  {
    quote: 'Buying from verified students and businesses feels safer than sending money to random people from social media.',
    handle: 'Samuel Adeyemi',
    followers: '500L Pharmacy',
  },
  {
    quote: 'The reels is my favourite because they\'re about people and events I know, not strangers from the other side of the world.',
    handle: 'Precious Eze',
    followers: '300L Microbiology',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-border bg-surface py-20 md:py-28">
      <div className="marketing-container">
        <SectionHeader
          title="Early Users Feedback"
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
