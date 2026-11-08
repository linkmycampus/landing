import { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import StoreBadges from '../StoreBadges';

type Screen = { src: string; label: string };

/* Three slanted, parallel columns of app screens drifting in opposite directions. */
const COLUMNS: { screens: Screen[]; dir: 'up' | 'down'; speed: number }[] = [
  {
    dir: 'up',
    speed: 48,
    screens: [
      { src: images.appFeed, label: 'Campus feed' },
      { src: images.appEvent, label: 'Events' },
      { src: images.appCreatePost, label: 'Create a post' },
    ],
  },
  {
    dir: 'down',
    speed: 56,
    screens: [
      { src: images.appChat, label: 'Chats' },
      { src: images.appPage, label: 'Pages' },
    ],
  },
  {
    dir: 'up',
    speed: 52,
    screens: [
      { src: images.appEvent, label: 'Events' },
      { src: images.appFeed, label: 'Campus feed' },
      { src: images.appChat, label: 'Chat' },
    ],
  },
];

/* A bare app screen: no device frame, just the screen with rounded corners. */
function ScreenTile({ screen }: { screen: Screen }) {
  return (
    <figure className="overflow-hidden rounded-[22px] bg-white shadow-[0_28px_60px_-24px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.12)]">
      <img src={screen.src} alt="" className="block h-auto w-full" decoding="async" />
    </figure>
  );
}

function Reel({ playing }: { playing: boolean }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_72%,transparent_92%)]"
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/2 flex w-[150%] gap-[clamp(12px,1.6vw,22px)] [transform:translate(-50%,-50%)_rotate(-10deg)_skewX(4deg)] sm:w-[110%] lg:left-[72%] lg:w-[56%]">
        {COLUMNS.map((col, ci) => (
          <div key={ci} className="flex-1">
            <div
              className="flex flex-col gap-[clamp(12px,1.6vw,22px)]"
              style={{
                animation: `reel-${col.dir} ${col.speed}s linear infinite`,
                animationPlayState: playing ? 'running' : 'paused',
              }}
            >
              {[...col.screens, ...col.screens].map((s, i) => (
                <ScreenTile key={i} screen={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export default function HomeHero() {
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());

  return (
    /* -mt-14 slides the hero up under the sticky 56px header so the two blend */
    <section id="top" aria-labelledby="hero-title" className="-mt-14">
      <div className="relative isolate h-[clamp(840px,calc(100svh+160px),1140px)] overflow-hidden">
        {/* The window: brand purple */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 70% at 72% 32%, #6a45d6 0%, rgba(106,69,214,0) 70%), radial-gradient(45% 55% at 8% 4%, #4b26a8 0%, rgba(75,38,168,0) 70%), linear-gradient(175deg, #35167f 0%, #2a1168 50%, #170b3d 100%)',
          }}
          aria-hidden
        />

        <button
          type="button"
          className="absolute inset-0 z-[2] cursor-pointer"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause the app preview' : 'Play the app preview'}
          aria-pressed={!playing}
        >
          <Reel playing={playing} />
        </button>

        {/* Shade: from the left on desktop, from the bottom on phones */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(to_top,rgba(14,6,40,0.95)_0%,rgba(14,6,40,0.8)_45%,rgba(14,6,40,0.15)_80%)] lg:bg-[linear-gradient(to_right,rgba(23,11,61,0.96)_0%,rgba(23,11,61,0.85)_36%,rgba(23,11,61,0)_60%)]"
          aria-hidden
        />

        {/* Clouds: the hero dissolves into the white page below */}
        <div className="hero-clouds" aria-hidden>
          <span className="cloud-layer cloud-back" />
          <span className="cloud-layer cloud-front" />
        </div>

        {/* Copy, bottom-left */}
        <div className="absolute inset-x-0 bottom-[clamp(220px,calc(14vh+110px),260px)] lg:bottom-[clamp(330px,calc(28vh+120px),450px)] z-[5] px-[var(--gutter)] text-white lg:pl-[max(var(--gutter),calc((100vw_-_var(--max))/2_+_var(--gutter)))] lg:pr-[clamp(24px,3vw,44px)]">
          <div className="lg:w-[calc(64vw_-_40px)]">
            <h1 id="hero-title" className="hero-title [text-shadow:0_1px_30px_rgba(0,0,0,0.15)]">
              {['Your whole campus,', 'in one app.'].map((line, i) => (
                <span key={line} className="hero-line">
                  <span className="hero-line-in" style={{ animationDelay: `${150 + i * 110}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <div
              className="hero-fade mt-[clamp(20px,2.4vw,32px)] flex flex-col-reverse items-start gap-[18px] sm:flex-row sm:items-center sm:gap-5"
              style={{ animationDelay: '560ms' }}
            >
              <Link to="/waitlist" className="btn btn-light ring-glow">
                Join the waitlist
              </Link>
              <div className="grid gap-1">
                <p className="text-[15px] font-medium">Feed, Chat, Pages, Events and Reels.</p>
                <p className="text-[13px] text-white/70">Open to all students in Nigeria.</p>
              </div>
            </div>
            <StoreBadges className="hero-fade mt-5" style={{ animationDelay: "680ms" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
