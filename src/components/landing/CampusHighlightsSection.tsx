import { Link } from 'react-router-dom';
import { images } from '../../assets/images';

type HighlightCard = {
  title: string;
  image: string;
  alt: string;
  badge: {
    avatars: string[];
    names: string;
    time: string;
    position: 'top' | 'bottom';
    align: 'left' | 'right';
  };
  caption?: string;
};

const highlights: HighlightCard[] = [
  {
    title: 'Campus reels',
    image: images.appReels,
    alt: 'LinkMyCampus campus reels screen',
    badge: {
      avatars: ['CA', 'KO'],
      names: 'Chioma A. × Kemi O.',
      time: '12m ago',
      position: 'top',
      align: 'left',
    },
    caption:
      '“Hostel vibes, faculty events, and campus creativity — short-form video made for your university.”',
  },
  {
    title: 'Campus marketplace',
    image: images.appMarketplace,
    alt: 'LinkMyCampus campus marketplace screen',
    badge: {
      avatars: ['TM'],
      names: 'Tunde M.',
      time: 'Listed · 2h ago',
      position: 'top',
      align: 'left',
    },
  },
  {
    title: 'Your campus awaits',
    image: images.appOnboarding,
    alt: 'LinkMyCampus onboarding — Your Campus Awaits',
    badge: {
      avatars: ['LC'],
      names: 'LinkMyCampus',
      time: 'Get started',
      position: 'bottom',
      align: 'right',
    },
  },
];

function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex -space-x-2">
      {initials.map((initial, i) => (
        <span
          key={i}
          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand text-[10px] font-bold text-white"
        >
          {initial}
        </span>
      ))}
    </div>
  );
}

function FeatureBadge({ badge }: { badge: HighlightCard['badge'] }) {
  const horizontal = badge.align === 'left' ? 'left-4' : 'right-4';
  const vertical =
    badge.position === 'top'
      ? '-top-4'
      : '-bottom-4';

  return (
    <div
      className={`absolute ${horizontal} ${vertical} z-20 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-border bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm`}
    >
      <AvatarStack initials={badge.avatars} />
      <div className="min-w-0 text-left">
        <p className="truncate text-xs font-semibold text-ink">{badge.names}</p>
        <p className="text-[10px] text-muted">{badge.time}</p>
      </div>
    </div>
  );
}

export default function CampusHighlightsSection() {
  return (
    <section id="about" className="border-t border-border bg-white py-20 md:py-28">
      <div className="marketing-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Features focused
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
            Campus reels, marketplace &amp; more{' '}
            <span className="font-normal text-muted">your campus awaits</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {highlights.map((card) => (
            <article key={card.title} className="group relative flex flex-col">
              <div className="relative">
                <FeatureBadge badge={card.badge} />
                <div className="overflow-hidden rounded-[1.75rem] bg-surface shadow-md ring-1 ring-border transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {card.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 pt-16">
                        <p className="text-sm leading-relaxed text-white">{card.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-center text-lg font-bold text-ink">{card.title}</h3>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/waitlist"
            className="inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            Get early access
          </Link>
        </div>
      </div>
    </section>
  );
}
