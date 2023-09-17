import { AboutUsSection } from './aboutUsSection/aboutUsSection';
import { HeroSection } from './heroSection/heroSection';
import { OurServiceSection } from './ourServiceSection/ourServiceSection';
import { ReviewSection } from './reviewSection/reviewSection';
import { SubscriptionSection } from './subscriptionSection/subscriptionSection';
import { ToContactUsSection } from './toContactUsSection/toContactUsSection';
import { WeddingSection } from './weddingSection/weddingSection';
import { WhyChooseUsSection } from './whyChooseUsSection/whyChooseUsSection';

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
      <ReviewSection />
    </>
  );
};
