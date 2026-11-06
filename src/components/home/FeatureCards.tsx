import { useState } from 'react';
import studentsTree from '../../assets/photos/students-tree.jpg';
import studentsBench from '../../assets/photos/students-bench.jpg';
import friendsHijab from '../../assets/photos/friends-hijab.jpg';
import auditorium from '../../assets/photos/auditorium.jpg';
import groupSelfie from '../../assets/photos/group-selfie.jpg';
import { Reveal } from './primitives';

/* After the reference's "Private events for unique experience": a row of photo cards,
   the one you point at opens up. */
const cards = [
  { title: 'Feed', sub: 'Trending reels, gist and posts from people at your school.', src: studentsTree },
  { title: 'Chat', sub: 'Message coursemates and friends, with delivered and seen receipts.', src: studentsBench },
  { title: 'Pages', sub: 'Join communities like OAU Confessions, or Pages for your department, hostel or club.', src: friendsHijab },
  { title: 'Events', sub: 'Parties, conferences and quizzes. See who’s going and register in a tap.', src: auditorium },
  { title: 'Reels', sub: 'Short videos made on campus. See what your school is laughing at.', src: groupSelfie },
];

export default function FeatureCards() {
  const [open, setOpen] = useState(0);

  return (
    <section id="features" aria-labelledby="features-title" className="py-[clamp(72px,10vw,144px)]">
      <div className="wrap">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 id="features-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              Made for every
              <span className="block text-faint">corner of campus.</span>
            </h2>
          </div>
          <p className="t-body max-w-[26em] text-[16px] lg:text-right">
            Everything that happens at your school, from freshers’ week to final exams.
          </p>
        </Reveal>

        <Reveal delay={100} className="expand-row mt-[clamp(40px,5vw,64px)] h-auto md:h-[520px]">
          {cards.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setOpen(i)}
              aria-expanded={open === i}
              className={`expand-card group text-left ${open === i ? 'is-open' : ''}`}
            >
              <img src={c.src} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />
              <span className="absolute inset-x-5 bottom-5 text-white">
                <span className="block font-display text-[22px] font-semibold tracking-[-0.02em]">{c.title}</span>
                <span className="expand-body mt-1.5 block max-w-[24em] text-[14px] leading-relaxed text-white/80">{c.sub}</span>
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
