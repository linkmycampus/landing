import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  AmbassadorIllustration,
  CreatorIllustration,
  MediaIllustration,
} from './PathIllustrations';

const paths = [
  {
    title: 'Campus Ambassador',
    body: 'Represent LinkMyCampus on your campus, host activations, and grow a verified student community.',
    cta: 'Become a Campus Ambassador',
    to: '/ambassador',
    Illustration: AmbassadorIllustration,
  },
  {
    title: 'Campus Creator',
    body: 'Share campus stories, build your audience, and get featured across the creator network.',
    cta: 'See all Creator Programs',
    to: '/waitlist',
    Illustration: CreatorIllustration,
  },
  {
    title: 'Campus Media & Blogging Partners',
    body: 'Partner as a campus magazine, blog, or media house and distribute through our network.',
    cta: 'Become a Media partner',
    to: '/waitlist',
    Illustration: MediaIllustration,
  },
];

export default function PathsSection() {
  return (
    <section id="paths" className="py-20 md:py-28">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand">Paths</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            There is a path for every campus voice.
          </h2>
          <p className="mt-4 text-base text-muted">
            Choose how you want to show up — lead, create, or publish — and join a network built for campus culture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map(({ title, body, cta, to, Illustration }) => (
            <article
              key={title}
              className="flex flex-col rounded-[1.75rem] bg-white p-6 shadow-[0_12px_40px_rgba(17,16,24,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Illustration />
              <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{body}</p>
              <Link
                to={to}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-cta-hover"
              >
                {cta}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
