const stats = [
  { value: '35', label: 'Universities and colleges' },
  { value: '1.4k+', label: 'Students created content last month' },
  { value: '6', label: 'Campus media magazines' },
];

export default function StatsSection() {
  return (
    <section className="pb-6 md:pb-10">
      <div className="marketing-container">
        <div className="overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-white md:rounded-[2.5rem] md:px-14 md:py-16">
          <h2 className="max-w-md text-3xl font-extrabold tracking-tight md:text-4xl">
            Two creator paths,{' '}
            <span className="text-violet-300">one network.</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold tracking-tight md:text-5xl">{stat.value}</p>
                <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
