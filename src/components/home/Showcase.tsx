import { useEffect, useRef } from 'react';
import { images } from '../../assets/images';

/*
  "Your school, in your pocket."
  The three screens start stacked in the middle and fan out into a row as you scroll.
  On desktop the section pins while it plays; on phones it plays as the section scrolls in.
  Progress is written to --p (0 → 1) and the CSS below turns it into motion.
*/
const screens = [
  { src: images.appChat, alt: 'LinkMyCampus chat', pos: 'fan-left' },
  { src: images.appFeed, alt: 'LinkMyCampus campus feed', pos: 'fan-mid' },
  { src: images.appEvent, alt: 'LinkMyCampus event details', pos: 'fan-right' },
];

const captions = [
  ['Chat', 'Message coursemates and friends on campus.'],
  ['Feed', 'Trending reels, gist and people to follow.'],
  ['Events', 'See who’s going and register in a tap.'],
];

const clamp = (n: number) => Math.min(1, Math.max(0, n));

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let reduce = false;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      /* ignore */
    }
    if (reduce) {
      el.style.setProperty('--p', '1');
      return;
    }
    const desktop = window.matchMedia('(min-width: 1024px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = desktop.matches
        ? clamp(-r.top / ((r.height - vh) * 0.7)) // pinned: play during the first 70% of the pin
        : clamp((vh * 0.85 - r.top) / (vh * 0.6)); // phones: play as it scrolls in
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="app"
      aria-labelledby="showcase-title"
      className="fan bg-surface py-[clamp(72px,10vw,144px)] lg:h-[240vh] lg:py-0"
    >
      <div className="wrap overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:pt-14">
        <div className="text-center">
          <h2 id="showcase-title" className="mx-auto max-w-[16em] text-[clamp(2.25rem,1.5rem+2.4vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Your school, <span className="text-faint">in your pocket.</span>
          </h2>
        </div>

        <div className="relative mt-[clamp(32px,5vw,64px)] flex items-start justify-center gap-[var(--gap)]">
          {screens.map((s) => (
            <figure
              key={s.alt}
              className={`${s.pos} w-[min(30%,220px)] overflow-hidden rounded-[24px] bg-white shadow-[var(--shadow)] lg:w-[min(30%,clamp(180px,24vh,230px))]`}
            >
              <img src={s.src} alt={s.alt} className="block h-auto w-full" loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="fan-captions mx-auto mt-[clamp(40px,5vw,64px)] grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          {captions.map(([t, b]) => (
            <div key={t}>
              <p className="t-title">{t}</p>
              <p className="t-body mx-auto mt-1.5 max-w-[22em]">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
