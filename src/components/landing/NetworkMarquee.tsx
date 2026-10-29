const items = [
  'CREATORS',
  'MEDIA PARTNERS',
  'CAMPUS CULTURE',
  'AMBASSADORS',
  'CREATORS',
  'MEDIA PARTNERS',
  'CAMPUS CULTURE',
  'AMBASSADORS',
];

export default function NetworkMarquee() {
  const track = [...items, ...items];

  return (
    <section
      className="overflow-hidden bg-navy py-3.5 text-white"
      aria-label="Network partners and roles"
    >
      <div className="network-marquee-track">
        <div className="flex shrink-0 items-center gap-6 px-3">
          {track.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-6">
              <span className="whitespace-nowrap text-sm font-semibold tracking-[0.18em]">
                {item}
              </span>
              <span className="text-white/50" aria-hidden>
                +
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
