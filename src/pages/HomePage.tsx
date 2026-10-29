import HeroSection from '../components/landing/HeroSection';
import NetworkMarquee from '../components/landing/NetworkMarquee';
import PathsSection from '../components/landing/PathsSection';
import StatsSection from '../components/landing/StatsSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import ProcessSection from '../components/landing/ProcessSection';
import FAQSection from '../components/landing/FAQSection';
import FinalCTASection from '../components/landing/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NetworkMarquee />
      <PathsSection />
      <StatsSection />
      <BenefitsSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
