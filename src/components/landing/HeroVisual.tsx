const roles = [
  { title: 'Campus Ambassador', subtitle: 'Lead your campus community', tone: 'bg-white' },
  { title: 'OG Creator', subtitle: 'Grow your campus audience', tone: 'bg-white/95' },
  { title: 'Media Partner', subtitle: 'Publish across the network', tone: 'bg-white/90' },
];

function StudentPortrait({
  className,
  accent,
  side,
}: {
  className?: string;
  accent: string;
  side: 'left' | 'right';
}) {
  return (
    <div
      className={`absolute bottom-0 overflow-hidden rounded-[1.75rem] ${className}`}
      style={{ width: '38%', aspectRatio: '3 / 4' }}
    >
      <div className={`absolute inset-0 ${accent}`} />
      <svg viewBox="0 0 200 260" className="relative h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`skin-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2c9a0" />
            <stop offset="100%" stopColor="#d9a574" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="248" rx="78" ry="28" fill="rgba(0,0,0,0.12)" />
        <path
          d={side === 'left' ? 'M40 260 L40 150 Q40 95 100 90 Q160 95 160 150 L160 260 Z' : 'M45 260 L45 145 Q45 90 100 85 Q155 90 155 145 L155 260 Z'}
          fill={side === 'left' ? '#1e1b4b' : '#312e81'}
        />
        <circle cx="100" cy="88" r="42" fill={`url(#skin-${side})`} />
        <path
          d="M58 78 Q100 28 142 78 Q142 48 100 42 Q58 48 58 78 Z"
          fill="#1c1917"
        />
        <circle cx="86" cy="90" r="4" fill="#1c1917" />
        <circle cx="114" cy="90" r="4" fill="#1c1917" />
        <path d="M90 108 Q100 116 110 108" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
        {side === 'right' && (
          <rect x="70" y="118" width="60" height="10" rx="5" fill="#f59e0b" opacity="0.85" />
        )}
      </svg>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="animate-float relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[2rem] bg-brand shadow-[0_30px_80px_rgba(124,58,237,0.35)] md:rounded-[2.5rem]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.15), transparent 45%)',
        }}
        aria-hidden
      />

      <StudentPortrait
        side="left"
        accent="bg-gradient-to-t from-indigo-950/40 to-transparent"
        className="left-[4%] z-10"
      />
      <StudentPortrait
        side="right"
        accent="bg-gradient-to-t from-violet-950/30 to-transparent"
        className="right-[4%] z-10"
      />

      <div className="absolute left-1/2 top-[18%] z-20 flex w-[52%] -translate-x-1/2 flex-col gap-3">
        {roles.map((role, i) => (
          <div
            key={role.title}
            className={`${role.tone} rounded-2xl px-4 py-3 shadow-lg shadow-black/10`}
            style={{
              transform: `translateX(${(i - 1) * 6}px) rotate(${(i - 1) * 1.5}deg)`,
              animation: `rise-in 0.7s ease-out ${0.15 * i}s both`,
            }}
          >
            <p className="text-sm font-bold text-ink">{role.title}</p>
            <p className="mt-0.5 text-xs text-muted">{role.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
