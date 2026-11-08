import { Link } from 'react-router-dom';
import LaunchCountdown from './LaunchCountdown';
import { Reveal } from './primitives';

/* Launch banner before "Our story": a big countdown to launch day at OAU. */
export default function LaunchSection() {
  return (
    <section id="launch" aria-labelledby="launch-title" className="pb-[clamp(56px,8vw,112px)]">
      <div className="wrap">
        <Reveal>
          <div
            className="relative isolate overflow-hidden rounded-[28px] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14"
            style={{
              background:
                'radial-gradient(60% 120% at 90% 0%, #6a45d6 0%, rgba(106,69,214,0) 60%), linear-gradient(175deg, #35167f 0%, #24105e 55%, #120a2c 100%)',
            }}
          >
            <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
              <div className="text-center lg:text-left">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">Launch day · 12 November</p>
                <h2
                  id="launch-title"
                  className="mt-3 text-[clamp(2rem,1.4rem+2.2vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.015em]"
                >
                  LinkMyCampus goes live
                  <span className="block text-white/60">at Obafemi Awolowo University (OAU).</span>
                </h2>
                <p className="mx-auto mt-4 max-w-[30em] text-[15px] leading-relaxed text-white/75 lg:mx-0">
                  Join the waitlist now and be one of the first students on the app when the countdown hits zero.
                </p>
                <Link to="/waitlist" className="btn btn-light btn-lg ring-glow mt-7 hidden lg:inline-flex">
                  Join the waitlist
                </Link>
              </div>
              <LaunchCountdown big showLabel={false} className="flex justify-center lg:justify-end" />
              {/* On phones the button sits under the countdown. */}
              <div className="-mt-2 text-center lg:hidden">
                <Link to="/waitlist" className="btn btn-light btn-lg ring-glow">
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
