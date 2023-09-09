import { AboutUsSection } from './AboutUsSection/AboutUsSection';
import { HeroSection } from './HeroSection/HeroSection';
import { OurServiceSection } from './OurServiceSection/OurServiceSection';
import { ReviewSection } from './ReviewSection/ReviewSection';
import { SubscriptionSection } from './SubscriptionSection/SubscriptionSection';
import { ToContactUsSection } from './ToContactUsSection/ToContactUsSection';
import { WeddingSection } from './WeddingSection/WeddingSection';
import { WhyChooseUsSection } from './WhyChooseUsSection/WhyChooseUsSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <ToContactUsSection />
      <OurServiceSection />
      <SubscriptionSection />
      <WeddingSection />
      {/*       
      <ReviewSection />*/}
    </>
  );
};
