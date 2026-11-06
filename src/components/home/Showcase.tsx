import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, PenSquare, Users, Newspaper } from 'lucide-react';
import { images } from '../../assets/images';

/*
  "Your school, in your pocket." — one large app screen in the centre, features placed on both
  sides (after the "Glow" app template in the LINKMYCAMPUS Figma). The features take turns on
  their own; hover or tap one to show it.
*/
const FEATURES = [
  { title: 'Campus feed', body: 'Trending reels, posts and gist from your school.', src: images.appFeed, ratio: 1.964, icon: Newspaper, side: 'left' },
  { title: 'Chat', body: 'Message coursemates, with delivered and seen receipts.', src: images.appChat, ratio: 1.958, icon: MessageCircle, side: 'left' },
  { title: 'Create a post', body: 'Photos, tags, sounds, and who can see it.', src: images.appCreatePost, ratio: 2.103, icon: PenSquare, side: 'left' },
  { title: 'Pages', body: 'Communities for your department, hostel or club.', src: images.appPage, ratio: 2.474, icon: Users, side: 'right' },
  { title: 'Events', body: 'See who’s going and register in a tap.', src: images.appEvent, ratio: 2.2, icon: Calendar, side: 'right' },
] as const;

const STEP_MS = 3800;

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const reduce = useRef(prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (hovering || !inView || reduce.current) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % FEATURES.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [active, hovering, inView]);

  const Callout = ({ k }: { k: number }) => {
    const f = FEATURES[k];
    const Icon = f.icon;
    const on = k === active;
    const right = f.side === 'right';
    return (
      <button
        type="button"
        onMouseEnter={() => setActive(k)}
        onFocus={() => setActive(k)}
        onClick={() => setActive(k)}
        aria-pressed={on}
        className={`group flex w-full items-start gap-4 rounded-[20px] p-5 text-left transition-[background-color,box-shadow,transform] duration-300 ${
          right ? '' : 'lg:flex-row-reverse lg:text-right'
        } ${on ? 'bg-white shadow-[var(--shadow)]' : 'hover:bg-white/60'}`}
      >
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            on ? 'bg-brand text-white' : 'bg-white text-brand shadow-[var(--knob)]'
          }`}
        >
          <Icon size={19} strokeWidth={1.8} />
        </span>
        <span className="min-w-0">
          <span className={`block font-display text-[18px] font-semibold tracking-[-0.02em] ${on ? 'text-ink' : 'text-ink/70'}`}>
            {f.title}
          </span>
          <span className="t-body mt-1 block">{f.body}</span>
        </span>
      </button>
    );
  };

  return (
    <section
      ref={ref}
      id="app"
      aria-labelledby="showcase-title"
      className="overflow-hidden py-[clamp(72px,10vw,144px)]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="showcase-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Your school, <span className="text-faint">in your pocket.</span>
          </h2>
          <p className="lede mx-auto mt-4">Everything happening on campus, in one app.</p>
        </div>

        {/* Mobile: feature chips above the screen */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          {FEATURES.map((f, k) => (
            <button
              key={f.title}
              type="button"
              onClick={() => setActive(k)}
              aria-pressed={k === active}
              className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors ${
                k === active ? 'bg-brand text-white' : 'bg-white text-ink shadow-[var(--knob)]'
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-6 lg:mt-[clamp(48px,6vw,80px)] lg:grid-cols-[1fr_auto_1fr] lg:gap-[clamp(24px,3vw,48px)]">
          {/* Left features */}
          <div className="hidden flex-col gap-3 lg:flex">
            {FEATURES.map((f, k) => (f.side === 'left' ? <Callout key={f.title} k={k} /> : null))}
          </div>

          {/* The screen */}
          <div className="relative mx-auto w-[min(74vw,300px)] lg:w-[min(320px,calc(78vh/2.474))]">
            <div
              className="pointer-events-none absolute -inset-[30%] rounded-full bg-[radial-gradient(closest-side,rgba(107,79,216,0.32),transparent)] blur-2xl"
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_50px_100px_-35px_rgba(30,12,80,0.5),0_0_0_1px_rgba(0,0,0,0.06)] transition-[padding-top] duration-700 ease-[var(--ease-out)]"
              style={{ paddingTop: `${FEATURES[active].ratio * 100}%` }}
            >
              {FEATURES.map((f, k) => (
                <img
                  key={f.title}
                  src={f.src}
                  alt={k === active ? `LinkMyCampus ${f.title}` : ''}
                  aria-hidden={k !== active}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-[var(--ease-out)]"
                  style={{ opacity: k === active ? 1 : 0, transform: k === active ? 'none' : 'scale(1.04)' }}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            {/* Progress dots under the screen */}
            <div className="mt-6 flex justify-center gap-2" aria-hidden>
              {FEATURES.map((f, k) => (
                <span key={f.title} className={`h-1.5 rounded-full transition-all duration-300 ${k === active ? 'w-6 bg-brand' : 'w-1.5 bg-faint'}`} />
              ))}
            </div>
          </div>

          {/* Right features */}
          <div className="hidden flex-col gap-3 lg:flex">
            {FEATURES.map((f, k) => (f.side === 'right' ? <Callout key={f.title} k={k} /> : null))}
          </div>

          {/* Mobile caption */}
          <p className="t-body text-center lg:hidden">{FEATURES[active].body}</p>
        </div>
      </div>
    </section>
  );
}
