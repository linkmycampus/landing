import { Link } from 'react-router-dom';

function SideAvatar({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  return (
    <div
      className={`pointer-events-none absolute bottom-0 hidden w-36 md:block lg:w-44 ${
        isLeft ? 'left-4 lg:left-10' : 'right-4 lg:right-10'
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 180 200" className="h-auto w-full">
        <ellipse cx="90" cy="190" rx="55" ry="14" fill="rgba(0,0,0,0.12)" />
        <circle cx="90" cy="70" r="38" fill="#f2c9a0" />
        <path
          d={isLeft ? 'M52 70 Q90 24 128 70 Q128 42 90 38 Q52 42 52 70 Z' : 'M55 68 Q90 22 125 68 Q125 40 90 36 Q55 40 55 68 Z'}
          fill="#1c1917"
        />
        <path
          d="M48 200 L48 120 Q48 95 90 90 Q132 95 132 120 L132 200 Z"
          fill={isLeft ? '#ede9fe' : '#ddd6fe'}
        />
        <circle cx="76" cy="72" r="4" fill="#1c1917" />
        <circle cx="104" cy="72" r="4" fill="#1c1917" />
        <path d="M80 88 Q90 96 100 88" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function FinalCTASection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="marketing-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-16 text-center text-white md:rounded-[2.5rem] md:px-16 md:py-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 80%, rgba(255,255,255,0.35), transparent 35%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.25), transparent 35%)',
            }}
            aria-hidden
          />

          <SideAvatar side="left" />
          <SideAvatar side="right" />

          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
              Join now and help build campus life.
            </h2>
            <Link
              to="/waitlist"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand shadow-lg transition-colors hover:bg-brand-light"
            >
              Check programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
