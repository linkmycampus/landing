import type { ReactNode } from 'react';

type SectionBadgeProps = {
  children: ReactNode;
  dark?: boolean;
};

export default function SectionBadge({ children, dark = false }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
        dark
          ? 'border-white/20 bg-white/10 text-white/90'
          : 'border-border bg-white text-muted'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-emerald-400' : 'bg-cta'}`} />
      {children}
    </span>
  );
}
