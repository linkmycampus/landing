const steps = [
  {
    num: '01',
    title: 'Pick your path',
    body: 'Choose ambassador, creator, or media partner based on how you want to contribute.',
  },
  {
    num: '02',
    title: 'Review the details',
    body: 'See program expectations, perks, and timelines so you know exactly what you are joining.',
  },
  {
    num: '03',
    title: 'Sign digitally',
    body: 'Complete a short application and connect the profiles you already use on campus.',
  },
  {
    num: '04',
    title: 'Join the community',
    body: 'Get onboarded into the network and start collaborating with campus voices.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="pb-20 md:pb-28">
      <div className="marketing-container">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-brand">Our process</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            From sign-up to community in minutes.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.num}
              className="rounded-[1.5rem] bg-brand-light/70 p-6 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <p className="text-3xl font-extrabold text-brand">{step.num}</p>
              <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
