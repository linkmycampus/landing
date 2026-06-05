import HeroSection from '../components/landing/HeroSection';
import NigeriaSchoolMarquee from '../components/landing/NigeriaSchoolMarquee';
import ProductShowcase from '../components/landing/ProductShowcase';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import ReviewsSection from '../components/landing/ReviewsSection';
import DarkCTASection from '../components/landing/DarkCTASection';
import FAQSection from '../components/landing/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NigeriaSchoolMarquee />
      <ProductShowcase />
      <HowItWorksSection />
      <FeaturesSection />
      <ReviewsSection />
      <DarkCTASection />
      <FAQSection />
    </>
  );
}
