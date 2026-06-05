import { images } from '../../assets/images';
import PhoneMockup from './PhoneMockup';

type ScreenKey = 'feed' | 'reels' | 'marketplace' | 'onboarding';

const screens: Record<ScreenKey, { src: string; alt: string }> = {
  feed: { src: images.appFeed, alt: 'LinkMyCampus campus feed' },
  reels: { src: images.appReels, alt: 'LinkMyCampus reels' },
  marketplace: { src: images.appMarketplace, alt: 'LinkMyCampus marketplace' },
  onboarding: { src: images.appOnboarding, alt: 'LinkMyCampus onboarding' },
};

const stackOrder: Record<ScreenKey, [ScreenKey, ScreenKey, ScreenKey]> = {
  feed: ['reels', 'feed', 'marketplace'],
  reels: ['feed', 'reels', 'marketplace'],
  marketplace: ['reels', 'marketplace', 'feed'],
  onboarding: ['feed', 'onboarding', 'reels'],
};

type PhoneStackProps = {
  featured?: ScreenKey;
  className?: string;
};

export default function PhoneStack({ featured = 'feed', className = '' }: PhoneStackProps) {
  const [leftKey, centerKey, rightKey] = stackOrder[featured];

  const items = [
    { ...screens[leftKey], position: 'left-[6%] top-[10%] z-10 -rotate-6 scale-[0.88]' },
    { ...screens[centerKey], position: 'left-1/2 top-0 z-20 -translate-x-1/2 scale-100' },
    { ...screens[rightKey], position: 'right-[6%] top-[10%] z-10 rotate-6 scale-[0.88]' },
  ];

  return (
    <div
      className={`relative mx-auto h-[380px] w-full max-w-[340px] md:h-[420px] md:max-w-[380px] ${className}`}
    >
      {items.map((screen) => (
        <div
          key={screen.alt}
          className={`absolute w-[48%] max-w-[170px] md:max-w-[185px] ${screen.position}`}
        >
          <PhoneMockup src={screen.src} alt={screen.alt} className="max-w-none" />
        </div>
      ))}
    </div>
  );
}
