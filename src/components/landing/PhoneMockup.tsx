import { images } from '../../assets/images';

type PhoneMockupProps = {
  src?: string;
  alt?: string;
  className?: string;
  variant?: 'default' | 'glass';
};

export default function PhoneMockup({
  src = images.appFeed,
  alt = 'LinkMyCampus campus feed',
  className = '',
  variant = 'glass',
}: PhoneMockupProps) {
  const frameClass =
    variant === 'glass'
      ? 'rounded-[2.75rem] border border-border/25 bg-transparent p-1 shadow-lg shadow-cta/5'
      : 'rounded-[2.75rem] border-[10px] border-ink bg-ink p-2 shadow-2xl shadow-cta/20';

  const screenClass =
    variant === 'glass'
      ? 'overflow-hidden rounded-[2.35rem] bg-white shadow-md'
      : 'overflow-hidden rounded-[2rem] bg-white';

  return (
    <div className={`relative mx-auto w-full max-w-[280px] md:max-w-[300px] ${className}`}>
      <div className={frameClass}>
        <div className={screenClass}>
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            className="block h-auto w-full"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
