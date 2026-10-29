import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

const avatars = [
  'bg-violet-400',
  'bg-fuchsia-400',
  'bg-indigo-400',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/4 top-40 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />

      <div className="marketing-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-rise max-w-xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-brand">
            For Media & Creator Ecosystems
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
            Build the{' '}
            <span className="text-brand">campus network</span> with us
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Connect creators, ambassadors, and media partners into one campus voice.
            Grow your reach, get recognized, and help shape campus culture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-cta-hover"
            >
              Get started
            </Link>
            <a
              href="#paths"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand bg-transparent px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-light"
            >
              Find out more info
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {avatars.map((tone, i) => (
                <span
                  key={tone}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-page text-xs font-bold text-white ${tone}`}
                  style={{ zIndex: avatars.length - i }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-muted">
              Trusted by 1,000+ creators across campus.
            </p>
          </div>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
