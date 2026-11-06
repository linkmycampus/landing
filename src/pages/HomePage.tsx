import HomeHero from '../components/home/HomeHero';
import Intro from '../components/home/Intro';
import Showcase from '../components/home/Showcase';
import FeatureCards from '../components/home/FeatureCards';
import Gallery from '../components/home/Gallery';
import CreatorsSection from '../components/home/CreatorsSection';
import HomeFAQ from '../components/home/HomeFAQ';
import ClosingCTA from '../components/home/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Intro />
      <Showcase />
      <FeatureCards />
      <Gallery />
      <CreatorsSection />
      <HomeFAQ />
      <ClosingCTA />
    </>
  );
}
