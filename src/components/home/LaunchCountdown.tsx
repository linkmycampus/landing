import { useEffect, useState } from 'react';

/* Launch moment: 12 November 2026, midnight in Nigeria (WAT, UTC+1). */
const LAUNCH_AT = Date.parse('2026-11-12T00:00:00+01:00');

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return [
    { n: Math.floor(s / 86400), label: 'Days' },
    { n: Math.floor((s % 86400) / 3600), label: 'Hours' },
    { n: Math.floor((s % 3600) / 60), label: 'Mins' },
    { n: s % 60, label: 'Secs' },
  ];
}

/** Countdown to launch day, for the purple hero. Turns into a "live now" note once launched. */
export default function LaunchCountdown({
  className = '',
  style,
  big = false,
  showLabel = true,
}: {
  className?: string;
  style?: React.CSSProperties;
  /** Larger boxes, for the launch banner. */
  big?: boolean;
  showLabel?: boolean;
}) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const left = LAUNCH_AT - now;

  if (left <= 0) {
    return (
      <p className={`inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-[14px] font-medium text-white ${className}`} style={style}>
        <span className="h-2 w-2 rounded-full bg-[#34c759]" aria-hidden />
        LinkMyCampus is live at Obafemi Awolowo University (OAU). Download the app.
      </p>
    );
  }

  return (
    <div className={className} style={style}>
      {showLabel && <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">Launching at Obafemi Awolowo University (OAU) · 12 November</p>}
      <div
        className={`flex ${big ? 'gap-[clamp(4px,1.2vw,12px)]' : 'gap-2'} ${showLabel ? 'mt-2.5' : ''}`}
        role="timer"
        aria-label={`Launching in ${parts(left)
          .map((p) => `${p.n} ${p.label.toLowerCase()}`)
          .join(', ')}`}
      >
        {parts(left).map((p, i) => (
          <div key={p.label} className={`flex items-center ${big ? 'gap-[clamp(4px,1.2vw,12px)]' : 'gap-2'}`}>
            {/* Big boxes scale with the screen width, so all four always fit on one centred row. */}
            <div
              className={`bg-white/10 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur-sm ${
                big
                  ? 'w-[clamp(54px,15vw,100px)] rounded-[clamp(12px,1.6vw,18px)] pb-[clamp(7px,1.2vw,14px)] pt-[clamp(9px,1.6vw,18px)]'
                  : 'min-w-[60px] rounded-[14px] px-2.5 pb-2 pt-2.5 sm:min-w-[68px]'
              }`}
            >
              <span
                className={`block font-display font-semibold leading-none tabular-nums text-white ${
                  big ? 'text-[clamp(22px,6.4vw,50px)]' : 'text-[26px] sm:text-[30px]'
                }`}
                aria-hidden
              >
                {String(p.n).padStart(2, '0')}
              </span>
              <span
                className={`block font-medium uppercase tracking-[0.1em] text-white/65 ${
                  big ? 'mt-[clamp(4px,0.8vw,8px)] text-[clamp(8.5px,2.2vw,11.5px)]' : 'mt-1.5 text-[10.5px]'
                }`}
                aria-hidden
              >
                {p.label}
              </span>
            </div>
            {i < 3 && (
              <span className={`font-semibold text-white/40 ${big ? 'text-[clamp(14px,3vw,24px)]' : 'text-[20px]'}`} aria-hidden>
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
