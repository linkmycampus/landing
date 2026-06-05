import { Link } from 'react-router-dom';
import PhoneStack from './PhoneStack';

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-x-hidden bg-white pt-14 pb-20 md:pt-20 md:pb-28 lg:min-h-[90vh]">
      <div className="hero-grid-bg absolute inset-0" aria-hidden />

      <div className="marketing-container relative grid min-h-[calc(88vh-7rem)] items-center gap-12 md:grid-cols-2 md:gap-16 lg:min-h-[calc(90vh-9rem)]">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            Your campus.
            <br />
            Post visible or stay{' '}
            <span className="text-brand">anonymous.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            LinkMyCampus is the campus app university students actually need. Scroll your feed,
            join faculty and hostel groups, watch campus reels, buy and sell on the student
            marketplace, and post anonymously when you want your opinion without your name on it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-cta px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              Join the waitlist
            </Link>
            <Link
              to="/ambassador"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              Become an ambassador
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center overflow-visible md:justify-end">
          <PhoneStack />
        </div>
      </div>
    </section>
  );
}
