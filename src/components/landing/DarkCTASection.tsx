import { Link } from 'react-router-dom';
import CampusPostVisual from './CampusPostVisual';
import SectionHeader from './SectionHeader';

const glassBtn =
  'inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white/15 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:w-auto';

export default function DarkCTASection() {
  return (
    <section className="relative overflow-hidden bg-cta py-20 md:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(52,19,130,0.35) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="marketing-container relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="text-left">
          <SectionHeader
            variant="dark"
            align="left"
            title="Your campus app is almost here"
            body="Join the waitlist for LinkMyCampus. Campus feed, student groups, reels, marketplace, and anonymous posting, all built for verified university students."
          />

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link to="/waitlist" className={glassBtn}>
              Join the waitlist
            </Link>
          </div>
        </div>

        <div className="-mt-6 flex justify-center md:-mt-10 md:justify-end">
          <CampusPostVisual />
        </div>
      </div>
    </section>
  );
}
