import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import lecture from '../../assets/photos/lecture.jpg';
import libraryHeart from '../../assets/photos/library-heart.jpg';
import studentsBench from '../../assets/photos/students-bench.jpg';
import { Reveal, SecHead } from './primitives';

const paths = [
  {
    title: 'Campus Ambassador',
    body: 'Represent LinkMyCampus at your school, host activations and grow a verified student community.',
    cta: 'Apply',
    to: '/ambassador',
    src: lecture,
  },
  {
    title: 'Campus Creator',
    body: 'Share campus stories and reels, build your audience and get featured across the network.',
    cta: 'Join as a creator',
    to: '/waitlist',
    src: libraryHeart,
  },
  {
    title: 'Media & Blog Partner',
    body: 'Campus magazines, blogs and media houses: distribute your stories through the network.',
    cta: 'Partner with us',
    to: '/waitlist',
    src: studentsBench,
  },
];

const perks = ['Official recognition', 'Network distribution', 'Early access', 'Dedicated support'];

export default function CreatorsSection() {
  return (
    <section id="creators" aria-labelledby="creators-title" className="sec">
      <div className="wrap">
        <SecHead id="creators-title" title="Got a voice on campus?" subtitle="Make it louder.">
          LinkMyCampus works with ambassadors, creators and campus media to shape what students
          see. Pick a path and grow with the network.
        </SecHead>

        <Reveal className="grid gap-4 md:grid-cols-3">
          {paths.map(({ title, body, cta, to, src }) => (
            <Link
              key={title}
              to={to}
              className="tile group flex flex-col overflow-hidden p-2 transition-[transform,box-shadow] duration-[260ms] ease-[var(--ease)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <span className="block overflow-hidden rounded-[20px]">
                <img
                  src={src}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </span>
              <span className="flex flex-1 flex-col px-4 pb-4 pt-5">
                <h3 className="t-title">{title}</h3>
                <p className="t-body mt-2 flex-1">{body}</p>
                <span className="mt-8 inline-flex items-center gap-1 text-[15px] font-medium text-brand">
                  {cta}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </span>
            </Link>
          ))}
        </Reveal>

        <Reveal className="mt-12 border-t border-border pt-10">
          <p className="t-title">Every path includes</p>
          <ul className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <li key={p} className="text-[15px] leading-6 text-muted">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
