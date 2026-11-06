import { Link } from 'react-router-dom';
import { CountUp, Reveal } from './primitives';

/* Right under the clouds: a two-tone statement, then the numbers, each sliding in from a side. */
const stats = [
  { n: '328', label: 'Universities' },
  { n: '203', label: 'Polytechnics' },
  { n: '355', label: 'Colleges' },
  { n: '2.5M+', label: 'University students in Nigeria' },
];

export default function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="relative z-[1] pb-[clamp(72px,10vw,144px)]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,6.6fr)_minmax(0,5.4fr)] lg:gap-[clamp(48px,6vw,112px)]">
        <Reveal>
          <h2
            id="intro-title"
            className="max-w-[24em] text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-semibold leading-[1.22] tracking-[-0.02em]"
          >
            Built by students, for campus life. We bring your school online in one place:
            <span className="text-faint">
              {' '}
              the gist, the events, the chats, the Pages and the reels, shared by people you
              actually see on campus.
            </span>
          </h2>
          <Link
            to="/about"
            className="btn-ring mt-9"
          >
            More about us
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-[clamp(20px,3vw,40px)] gap-y-[clamp(28px,3.5vw,44px)]" role="list" aria-label="LinkMyCampus across Nigeria">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110} className={i % 2 === 0 ? 'from-left' : 'from-right'}>
              <div role="listitem" className="border-t-2 border-brand pt-5">
                <p className="font-display text-[clamp(2.5rem,1.8rem+2.6vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-brand tabular-nums">
                  <CountUp value={s.n} />
                </p>
                <p className="mt-3 text-[15px] font-medium leading-5 text-ink">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
