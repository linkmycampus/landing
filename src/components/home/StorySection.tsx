import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import studentsWalking from '../../assets/photos/students-walking.jpg';
import libraryStudy from '../../assets/photos/library-study.jpg';
import campusCheer from '../../assets/photos/campus-cheer.jpg';
import graduationCaps from '../../assets/photos/graduation-caps.jpg';

/*
  "Our story", played like a short film: a campus photo drifts behind the words while the
  brand story plays one line at a time, with a scrubber that shows the chapters.
  Text is from the LMC Brand Story documents (CEO + Growth Marketer).
*/
type Beat = { text: string; big?: boolean };
type Chapter = { title: string; photo: string; beats: Beat[] };

const CHAPTERS: Chapter[] = [
  {
    title: 'Planet Campus',
    photo: studentsWalking,
    beats: [
      { text: 'Every campus is more than a school.' },
      { text: 'It is a world of its own.' },
      { text: 'People, culture, communities, events, businesses and stories.' },
      { text: 'We call it Planet Campus.', big: true },
    ],
  },
  {
    title: 'The problem',
    photo: libraryStudy,
    beats: [
      { text: 'But campus life is scattered.' },
      { text: 'One event is posted on Instagram.' },
      { text: 'An announcement is buried in a WhatsApp group.' },
      { text: 'An opportunity is shared in someone’s DM.' },
      { text: '“Ah, you didn’t know?”', big: true },
    ],
  },
  {
    title: 'Why we exist',
    photo: campusCheer,
    beats: [
      { text: 'You shouldn’t have to know the right people to experience campus.' },
      { text: 'Or be in ten WhatsApp groups to know what’s happening.' },
      { text: 'So we’re building the digital home of Planet Campus.' },
      { text: 'Discover what’s happening. Find events. Meet people. Join communities.' },
    ],
  },
  {
    title: 'Live more',
    photo: graduationCaps,
    beats: [
      { text: 'University isn’t just the classes you attend.' },
      { text: 'It’s the people you meet, and the stories you eventually tell.' },
      { text: 'More experiences. More connections. More memories.' },
      { text: 'Live more. Connect more.', big: true },
    ],
  },
];

const BEATS = CHAPTERS.flatMap((c, ci) => c.beats.map((b) => ({ ...b, chapter: ci })));
const BEAT_MS = 3400;

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export default function StorySection() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const reduce = useRef(prefersReducedMotion());

  // Start playing the first time the section is on screen; pause when it leaves.
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !reduce.current) setPlaying(true);
  }, [inView]);

  useEffect(() => {
    if (!playing || !inView) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % BEATS.length), BEAT_MS);
    return () => window.clearTimeout(t);
  }, [i, playing, inView]);

  const beat = BEATS[i];
  const running = playing && inView;

  return (
    <section ref={ref} id="story" aria-labelledby="story-title" className="pb-[clamp(72px,10vw,144px)]">
      <div className="wrap">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="story-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.015em]">
            Our story
            <span className="block text-faint">Welcome to Planet Campus.</span>
          </h2>
          <Link
            to="/about"
            className="btn-ring w-fit"
          >
            Read the full story
          </Link>
        </div>

        {/* The "video" */}
        <div
          className="relative isolate aspect-[4/5] cursor-pointer overflow-hidden rounded-[22px] bg-navy text-white sm:aspect-[16/10] lg:aspect-[16/8]"
          onClick={() => setPlaying((p) => !p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              setPlaying((p) => !p);
            }
          }}
          aria-label={running ? 'Pause our story' : 'Play our story'}
          aria-pressed={!running}
        >
          {/* Footage: one photo per chapter, slowly drifting */}
          {CHAPTERS.map((c, ci) => (
            <img
              key={c.title}
              src={c.photo}
              alt=""
              aria-hidden
              className={`story-shot absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ${
                ci === beat.chapter ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationPlayState: running ? 'running' : 'paused' }}
              loading="lazy"
            />
          ))}
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(80%_70%_at_50%_50%,rgba(20,10,46,0.55),rgba(20,10,46,0.86))]"
            aria-hidden
          />

          {/* The line being "spoken" */}
          <div className="absolute inset-0 flex items-center justify-center px-[clamp(20px,6vw,120px)] text-center" aria-live="polite">
            <p
              key={i}
              className={`story-line font-display font-semibold tracking-[-0.015em] [text-wrap:balance] ${
                beat.big
                  ? 'text-[clamp(2.25rem,1.4rem+3.4vw,4.75rem)] leading-[1.02]'
                  : 'text-[clamp(1.5rem,1.05rem+1.9vw,3rem)] leading-[1.12]'
              }`}
            >
              {beat.text}
            </p>
          </div>

          {/* Controls + scrubber, like a video player */}
          <div className="absolute inset-x-[clamp(18px,3vw,36px)] bottom-[clamp(16px,3vw,28px)] flex items-center gap-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md" aria-hidden>
              {running ? <Pause size={15} /> : <Play size={15} />}
            </span>
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25" aria-hidden>
              <div
                className="h-full rounded-full bg-white transition-[width] duration-700 ease-linear"
                style={{ width: `${((i + 1) / BEATS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
