import { Link } from 'react-router-dom';
import LaunchCountdown from './LaunchCountdown';
import { Reveal } from './primitives';

/* Launch banner before "Our story": a big countdown to launch day at OAU.
   Everything is centred, and text and boxes shrink smoothly on smaller screens. */
export default function LaunchSection() {
  return (
    <section id="launch" aria-labelledby="launch-title" className="pb-[clamp(56px,8vw,112px)]">
      <div className="wrap">
        <Reveal>
          <div
            className="relative isolate overflow-hidden rounded-[clamp(20px,3vw,28px)] px-[clamp(16px,5vw,56px)] py-[clamp(32px,6vw,64px)] text-center text-white"
            style={{
              background:
                'radial-gradient(60% 120% at 90% 0%, #6a45d6 0%, rgba(106,69,214,0) 60%), linear-gradient(175deg, #35167f 0%, #24105e 55%, #120a2c 100%)',
            }}
          >
            <p className="text-[clamp(10.5px,0.6rem+0.4vw,12.5px)] font-semibold uppercase tracking-[0.16em] text-white/70">
              Launch day · 12 November
            </p>
            <h2
              id="launch-title"
              className="mx-auto mt-[clamp(8px,1.2vw,14px)] max-w-[18em] text-[clamp(1.45rem,0.9rem+2.8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.015em]"
            >
              LinkMyCampus goes live <span className="text-white/60">at Obafemi Awolowo University (OAU).</span>
            </h2>
            <p className="mx-auto mt-[clamp(10px,1.4vw,16px)] max-w-[34em] text-[clamp(13px,0.72rem+0.35vw,15.5px)] leading-relaxed text-white/75">
              Join the waitlist now and be one of the first students on the app when the countdown hits zero.
            </p>

            <LaunchCountdown big showLabel={false} className="mt-[clamp(22px,3.4vw,40px)] flex justify-center" />

            <Link to="/waitlist" className="btn btn-light btn-lg ring-glow mt-[clamp(22px,3vw,36px)]">
              Join the waitlist
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
