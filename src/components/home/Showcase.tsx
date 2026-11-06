import { useEffect, useRef, useState } from 'react';
import { images } from '../../assets/images';

/*
  "Your school, in your pocket." — a scroll-driven product tour.
  Desktop: the section pins; the feature list on the left follows your scroll and the
  single large screen on the right changes to match.
  Phones: a swipeable row of screens with their captions.
*/
const FEATURES = [
  {
    title: 'Campus feed',
    body: 'Trending reels, posts and gist from people at your school, all in one feed.',
    src: images.appFeed,
  },
  {
    title: 'Chat',
    body: 'Message coursemates and friends, with delivered and seen receipts.',
    src: images.appChat,
  },
  {
    title: 'Pages',
    body: 'Join communities like OAU Confessions, or Pages for your department, hostel or club.',
    src: images.appPage,
  },
  {
    title: 'Events',
    body: 'Parties, conferences and quizzes. See who’s going and register in a tap.',
    src: images.appEvent,
  },
  {
    title: 'Create a post',
    body: 'Add photos, tag people, add a sound or hashtag, and choose who can see it.',
    src: images.appCreatePost,
  },
];

const clamp = (n: number) => Math.min(1, Math.max(0, n));

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const onRailScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[0] as HTMLElement | undefined;
    const w = card ? card.offsetWidth + 16 : rail.clientWidth;
    setSlide(Math.min(FEATURES.length - 1, Math.round(rail.scrollLeft / w)));
  };

  // Desktop: turn scroll position inside the pinned section into the active feature.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!desktop.matches) return;
      const r = el.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - window.innerHeight));
      setActive(Math.min(FEATURES.length - 1, Math.floor(p * FEATURES.length)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Clicking a feature scrolls to its part of the pinned section.
  const goTo = (k: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + span * ((k + 0.5) / FEATURES.length), behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="app" aria-labelledby="showcase-title" className="bg-surface lg:h-[420vh]">
      {/* Desktop: pinned tour */}
      <div className="wrap hidden h-screen items-center gap-[clamp(32px,5vw,96px)] lg:sticky lg:top-0 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:pt-14">
        <div>
          <h2 id="showcase-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Your school,
            <span className="block text-faint">in your pocket.</span>
          </h2>

          <ol className="mt-10">
            {FEATURES.map((f, k) => {
              const on = k === active;
              return (
                <li key={f.title} className="border-t border-border last:border-b">
                  <button
                    type="button"
                    onClick={() => goTo(k)}
                    aria-current={on ? 'step' : undefined}
                    className="group flex w-full items-start gap-4 py-4 text-left"
                  >
                    <span
                      className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                        on ? 'bg-brand' : 'bg-faint group-hover:bg-muted'
                      }`}
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-[20px] font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                          on ? 'text-ink' : 'text-faint group-hover:text-muted'
                        }`}
                      >
                        {f.title}
                      </span>
                      <span
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out)] ${
                          on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="t-body block max-w-[28em] pt-1.5">{f.body}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* The stage: one large screen at a time */}
        <div className="relative flex h-[min(80vh,760px)] items-center justify-center">
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(107,79,216,0.28),transparent)] blur-2xl"
            aria-hidden
          />
          <div className="relative h-full w-auto" style={{ aspectRatio: '9 / 19' }}>
            {FEATURES.map((f, k) => (
              <figure
                key={f.title}
                className="absolute inset-0 overflow-hidden rounded-[30px] bg-white shadow-[0_40px_80px_-30px_rgba(30,12,80,0.45),0_0_0_1px_rgba(0,0,0,0.06)] transition-[opacity,transform,filter] duration-700 ease-[var(--ease-out)]"
                style={{
                  opacity: k === active ? 1 : 0,
                  transform: k === active ? 'none' : k < active ? 'translateY(-4%) scale(0.96)' : 'translateY(6%) scale(0.96)',
                  filter: k === active ? 'none' : 'blur(6px)',
                }}
                aria-hidden={k !== active}
              >
                <img
                  src={f.src}
                  alt={k === active ? `LinkMyCampus ${f.title}` : ''}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Phones and tablets: swipeable screens */}
      <div className="py-[clamp(64px,10vw,112px)] lg:hidden">
        <div className="wrap">
          <h2 className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Your school,
            <span className="block text-faint">in your pocket.</span>
          </h2>
        </div>
        <div
          ref={railRef}
          onScroll={onRailScroll}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {FEATURES.map((f) => (
            <figure key={f.title} className="w-[68vw] max-w-[300px] shrink-0 snap-center">
              <div className="overflow-hidden rounded-[24px] bg-white shadow-[var(--shadow)]">
                <img
                  src={f.src}
                  alt={`LinkMyCampus ${f.title}`}
                  className="aspect-[9/19] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4">
                <span className="t-title block">{f.title}</span>
                <span className="t-body mt-1 block">{f.body}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* Dots show where you are in the row; tap one to jump to it */}
        <div className="mt-4 flex justify-center gap-2">
          {FEATURES.map((f, k) => (
            <button
              key={f.title}
              type="button"
              onClick={() => {
                const rail = railRef.current;
                const card = rail?.children[k] as HTMLElement | undefined;
                if (rail && card) rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft - 16, behavior: 'smooth' });
              }}
              aria-label={`Show ${f.title}`}
              aria-current={k === slide ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${k === slide ? 'w-6 bg-brand' : 'w-2 bg-faint'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
