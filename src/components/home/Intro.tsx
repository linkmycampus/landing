import { Link } from 'react-router-dom';
import { CountUp, Reveal } from './primitives';

/* Right under the clouds: a two-tone statement on the left, the numbers on the right. */
const stats = [
  { n: '35', label: 'Universities and colleges' },
  { n: '1.4k+', label: 'Students created content last month' },
  { n: '6', label: 'Campus media magazines' },
];

export default function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="relative z-[1] pb-[clamp(72px,10vw,144px)] pt-[clamp(16px,3vw,40px)]">
      <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,7.4fr)_minmax(0,4.6fr)] lg:gap-[clamp(48px,7vw,128px)]">
        <Reveal>
          <span className="text-[20px] leading-none text-ink" aria-hidden>
            ✦
          </span>
          <h2
            id="intro-title"
            className="mt-6 max-w-[24em] text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-semibold leading-[1.22] tracking-[-0.02em]"
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
            className="mt-9 inline-flex h-11 items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white transition-colors hover:bg-brand"
          >
            More about us
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <dl>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between gap-6 py-6 ${i > 0 ? 'border-t border-border' : ''}`}
              >
                <dt className="font-display text-[clamp(2.75rem,2rem+2.4vw,4rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                  <CountUp value={s.n} />
                </dt>
                <dd className="max-w-[12em] text-right text-[13px] leading-5 text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
