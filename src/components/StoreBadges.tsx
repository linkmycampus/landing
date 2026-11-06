import { Link } from 'react-router-dom';

import { STORE_LINKS } from '../config/storeLinks';

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path fill="#00D7FE" d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1L13.5 12v-.2L3.7 1.7z" />
      <path fill="#FFCE00" d="M16.8 15.3 13.5 12v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2z" />
      <path fill="#FF3A44" d="M16.9 15.2 13.5 11.9 3.6 21.8c.4.4 1 .4 1.7.1l11.6-6.7" />
      <path fill="#00F076" d="M16.9 8.6 5.3 2C4.6 1.6 4 1.7 3.6 2.1l9.9 9.8z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
      <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" />
    </svg>
  );
}

function Badge({
  href,
  icon,
  top,
  bottom,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  top: string;
  bottom: string;
  label: string;
}) {
  const cls =
    'inline-flex h-12 items-center gap-2.5 rounded-full bg-black pl-4 pr-5 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#111]';
  const inner = (
    <>
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-[0.02em] text-white/80">{top}</span>
        <span className="mt-0.5 font-display text-[16px] font-semibold tracking-[-0.01em]">{bottom}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={label}>
        {inner}
      </a>
    );
  }
  return (
    <Link to="/waitlist" className={cls} aria-label={`${label} (coming soon, join the waitlist)`}>
      {inner}
    </Link>
  );
}

/** "Get it on Google Play" and "Download on the App Store" badges. */
export default function StoreBadges({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} style={style}>
      <Badge
        href={STORE_LINKS.googlePlay}
        icon={<GooglePlayIcon />}
        top="GET IT ON"
        bottom="Google Play"
        label="Get LinkMyCampus on Google Play"
      />
      <Badge
        href={STORE_LINKS.appStore}
        icon={<AppleIcon />}
        top="Download on the"
        bottom="App Store"
        label="Download LinkMyCampus on the App Store"
      />
    </div>
  );
}
