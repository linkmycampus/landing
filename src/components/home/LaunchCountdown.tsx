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
        className={`flex gap-2 ${showLabel ? 'mt-2.5' : ''} ${big ? 'sm:gap-3' : ''}`}
        role="timer"
        aria-label={`Launching in ${parts(left)
          .map((p) => `${p.n} ${p.label.toLowerCase()}`)
          .join(', ')}`}
      >
        {parts(left).map((p, i) => (
          <div key={p.label} className="flex items-center gap-2">
            <div
              className={`rounded-[14px] bg-white/10 px-2.5 pb-2 pt-2.5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur-sm ${
                big ? 'min-w-[64px] sm:min-w-[92px] sm:rounded-[18px] sm:pb-3 sm:pt-4' : 'min-w-[60px] sm:min-w-[68px]'
              }`}
            >
              <span
                className={`block font-display font-semibold leading-none tabular-nums text-white ${big ? 'text-[30px] sm:text-[46px]' : 'text-[26px] sm:text-[30px]'}`}
                aria-hidden
              >
                {String(p.n).padStart(2, '0')}
              </span>
              <span className="mt-1.5 block text-[10.5px] font-medium uppercase tracking-[0.1em] text-white/65" aria-hidden>
                {p.label}
              </span>
            </div>
            {i < 3 && (
              <span className="text-[20px] font-semibold text-white/40" aria-hidden>
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
