import {
  Award,
  BarChart3,
  Share2,
  Headphones,
  Users,
  Sparkles,
} from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Official recognition',
    body: 'Get verified status and campus credentials that signal you are part of the network.',
  },
  {
    icon: BarChart3,
    title: 'Shared market index',
    body: 'Track reach, engagement, and campus performance with shared network insights.',
  },
  {
    icon: Share2,
    title: 'Network distribution',
    body: 'Your content and campaigns travel across campuses, creators, and media partners.',
  },
  {
    icon: Headphones,
    title: 'Personalized support',
    body: 'Work with a dedicated team that helps you launch, grow, and stay consistent.',
  },
  {
    icon: Users,
    title: 'Networking',
    body: 'Meet ambassadors, creators, and editors building culture across universities.',
  },
  {
    icon: Sparkles,
    title: 'Early access',
    body: 'Be first to try new campus tools, creator drops, and partner opportunities.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="marketing-container">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-brand">Benefits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Discover what you get.
          </h2>
          <p className="mt-4 text-base text-muted">
            Every path unlocks recognition, reach, and support designed for campus voices.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(17,16,24,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Icon size={20} strokeWidth={2.25} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
