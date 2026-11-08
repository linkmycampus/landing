import { Link } from 'react-router-dom';
import oauGate from '../../assets/photos/oau-gate.jpg';
import oauMonument from '../../assets/photos/oau-monument.jpg';
import friendsAmphitheatre from '../../assets/photos/friends-amphitheatre.jpg';
import concertCrowd from '../../assets/photos/concert-crowd.jpg';
import { CountUp, Reveal } from './primitives';

/* Option 4 — photo cards: each number in white over a softly darkened campus photo. */
const stats = [
  { n: '328', label: 'Universities', src: oauGate },
  { n: '203', label: 'Polytechnics', src: oauMonument },
  { n: '355', label: 'Colleges', src: friendsAmphitheatre },
  { n: '2.5M+', label: 'Students in Nigeria', src: concertCrowd },
];

export default function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="relative z-[1] -mt-1 bg-white pt-1 pb-[clamp(72px,10vw,144px)]">
      <div className="wrap">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2
            id="intro-title"
            className="max-w-[26em] text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-semibold leading-[1.22] tracking-[-0.02em]"
          >
            Built by students, for campus life. We bring your school online in one place:
            <span className="text-faint">
              {' '}
              the gist, the events, the chats, the Pages and the reels, shared by people you
              actually see on campus.
            </span>
          </h2>
          <Link to="/about" className="btn-ring w-fit shrink-0">
            More about us
          </Link>
        </Reveal>

        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className={i % 2 === 0 ? 'from-left' : 'from-right'}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[20px] text-white">
                <img
                  src={s.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#170b3d]/90 via-[#170b3d]/35 to-transparent" aria-hidden />
                <figcaption className="absolute inset-x-5 bottom-5">
                  <span className="block font-display text-[clamp(2.25rem,1.6rem+2.2vw,3.5rem)] font-semibold leading-none tracking-[-0.015em] tabular-nums">
                    <CountUp value={s.n} />
                  </span>
                  <span className="mt-2 block text-[14px] font-medium text-white/80">{s.label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
