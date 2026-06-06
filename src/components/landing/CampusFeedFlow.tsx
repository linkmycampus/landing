import { useEffect, useState } from 'react';
import { images } from '../../assets/images';
import SectionHeader from './SectionHeader';

const ROTATE_MS = 5000;

export const feedFlowSteps = [
  {
    label: 'Campus Feeds',
    description:
      'Your campus has a story unfolding every day. The Campus Feed is where students share updates, start conversations, discover opportunities, discuss campus issues, celebrate wins, and stay informed about what matters most. It\u2019s the fastest way to understand what\u2019s happening across your university, all from students who are living it.',
    image: images.appFeed,
    alt: 'LinkMyCampus campus feed for university students',
  },
  {
    label: 'Campus Reels',
    description:
      'Every campus has its own culture, stories, trends, and unforgettable moments. Campus Reels is where students capture and share what university life actually looks like\u2014from events and campus activities to hostel experiences, student talents, and viral moments. Watch, create, and share short videos that bring your campus culture to life.',
    image: images.appReels,
    alt: 'Campus reels on LinkMyCampus student app',
  },
  {
    label: 'Campus Groups',
    description:
      'Find your people and build meaningful connections within your university. Join faculty communities, hostel groups, study circles, student organizations, interest-based communities, and campus networks where students come together to learn, collaborate, share opportunities, and support one another. Ask questions, share resources, stay informed, and build relationships with students who are walking the same journey as you.',
    image: images.appGroups,
    alt: 'University student groups on LinkMyCampus',
  },
  {
    label: 'Anonymous Posting',
    description:
      'Sometimes the questions you want to ask are the hardest to say out loud. University life comes with questions, opinions, challenges, and experiences that students don\u2019t always feel comfortable sharing publicly. Anonymous Posting allows you to participate in honest conversations, seek advice, discuss sensitive topics, and share your perspective without attaching your name to it. Because sometimes the most important conversations happen when people feel safe enough to be real.',
    image: images.appCreatePost,
    alt: 'Anonymous posting on LinkMyCampus',
  },
  {
    label: 'Student Marketplace',
    description:
      'Looking for a hostel, apartment, roommate, gadget, services, thrifted fashion, foodstuff, or any student essential? The LinkMyCampus Marketplace helps you discover trusted listings from verified students, vendors, and businesses around your campus. Buy, sell, and connect within your university community \u2014 all in one place, built specifically for university life.',
    image: images.appMarketplace,
    alt: 'Student marketplace on LinkMyCampus',
  },
] as const;

const steps = feedFlowSteps;

const ROTATING_WORDS = [
  'campus life',
  'campus feed',
  'student groups',
  'marketplace',
  'anonymous posts',
] as const;

const WORD_SWAP_MS = 2800;
const WORD_FADE_MS = 280;

function RotatingTitleWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimer: number | undefined;

    const interval = window.setInterval(() => {
      setVisible(false);
      fadeTimer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, WORD_FADE_MS);
    }, WORD_SWAP_MS);

    return () => {
      window.clearInterval(interval);
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <span className="rotating-title-word relative inline-flex h-[1.15em] min-w-[16ch] items-center justify-center">
      <span
        className={`transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

function CardSkeleton() {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 bg-transparent p-4 pt-5">
      <div className="flex items-center gap-2.5">
        <div className="skeleton-shimmer h-9 w-9 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="skeleton-shimmer h-2.5 w-20 rounded-full" />
          <div className="skeleton-shimmer h-2 w-28 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="skeleton-shimmer h-2 w-full rounded-full" />
        <div className="skeleton-shimmer h-2 w-[85%] rounded-full" />
        <div className="skeleton-shimmer h-2 w-[60%] rounded-full" />
      </div>
      <div className="skeleton-shimmer mt-1 flex-1 rounded-xl" />
      <div className="flex gap-3">
        <div className="skeleton-shimmer h-2 w-10 rounded-full" />
        <div className="skeleton-shimmer h-2 w-10 rounded-full" />
        <div className="skeleton-shimmer h-2 w-10 rounded-full" />
      </div>
    </div>
  );
}

export default function CampusFeedFlow() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <SectionHeader
        animate
        title="One app for your whole"
        subtitle={<RotatingTitleWord />}
        body="LinkMyCampus brings your campus feed, faculty and hostel groups, short-form reels, and a student marketplace into one verified university network. Scroll what classmates are posting, join conversations that actually matter to your school, buy and sell with verified students, and post anonymously when you want your opinion without your name on it. No random strangers, no generic social noise, just real campus life in one place."
      />

      <div className="feed-card-stack relative mt-10 flex items-end gap-3 overflow-x-auto overflow-y-visible pb-6 pt-6 snap-x snap-mandatory md:mt-14 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-8 md:pt-8">
        {steps.map((step, index) => {
          const isActive = active === index;
          const isHovered = hovered === index;
          const isRevealed = isActive || isHovered;

          return (
            <button
              key={step.label}
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative shrink-0 snap-start overflow-visible text-left transition-[height,width] duration-500 ease-out md:w-auto ${
                isActive
                  ? 'z-30 h-[400px] w-[210px] md:h-[460px]'
                  : 'z-0 h-[340px] w-[200px] md:h-[380px]'
              }`}
              aria-pressed={isActive}
            >
              <div
                className={`feed-card-glass relative flex h-full flex-col rounded-[2.75rem] p-1.5 ${
                  isActive ? 'feed-card-glass-active' : 'feed-card-glass-idle'
                }`}
              >
                <div className="relative h-full overflow-hidden rounded-[2.25rem]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                      isRevealed ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {!isRevealed && <CardSkeleton />}

                  {isRevealed && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/25 to-transparent" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
