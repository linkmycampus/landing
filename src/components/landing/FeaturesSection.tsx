import { Plus } from 'lucide-react';
import { feedFlowSteps } from './CampusFeedFlow';
import SectionHeader from './SectionHeader';

const [heroFeature, ...gridFeatures] = feedFlowSteps;

const earlyAccessAvatars = ['AO', 'TM', 'KO'];

function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="flex -space-x-2.5">
      {initials.map((initial, i) => (
        <span
          key={i}
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand text-[11px] font-bold text-white"
        >
          {initial}
        </span>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="border-t border-border bg-white py-20 md:py-28">
      <div className="marketing-container">
        <SectionHeader
          animate
          title="One app for campus life"
          body="LinkMyCampus brings together the social, shopping, and community tools university students use every day. Catch up on your campus feed, jump into faculty and hostel groups, watch reels from classmates, list or find deals on the student marketplace, and post anonymously when you have something to say without putting your name on it. Built for verified students, designed for how campus life actually works."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-[1.75rem] bg-surface shadow-md ring-1 ring-border">
            <div className="aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
              <img
                src={heroFeature.image}
                alt={heroFeature.alt}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-ink md:text-[1.75rem]">
                {heroFeature.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {heroFeature.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <AvatarStack initials={earlyAccessAvatars} />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cta text-white">
                <Plus size={18} strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Join early access</p>
                <p className="text-xs text-muted">Feed, marketplace, groups, and reels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {gridFeatures.map(({ label, description, image, alt }) => (
            <article key={label} className="group flex flex-col">
              <div className="overflow-hidden rounded-[1.75rem] bg-surface shadow-md ring-1 ring-border transition-shadow duration-300 group-hover:shadow-xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
