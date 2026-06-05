import type { ReactNode } from 'react';

type SectionHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  body?: ReactNode;
  animate?: boolean;
  variant?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  body,
  animate = false,
  variant = 'light',
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isDark = variant === 'dark';
  const isLeft = align === 'left';

  return (
    <div
      className={`section-header w-full max-w-5xl ${isLeft ? 'text-left' : 'mx-auto text-center'} ${className}`}
    >
      <h2
        className={`section-heading-title ${animate ? 'section-title-animate' : ''} ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`section-heading-subtitle ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      ) : null}
      {body ? (
        <p
          className={`section-heading-body ${isLeft ? 'section-heading-body-left' : ''} ${
            animate ? 'section-subtitle-animate' : ''
          } ${isDark ? 'text-white/60' : 'text-muted'}`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
