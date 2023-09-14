import './subscription.scss';
import { BuildSubscriptionSection } from './buildSubscriptionSection/buildSubscriptionSection';
import { FAQSection } from './faqSection/faqSection';
import { FlowerSubscriptionSection } from './flowerSubscriptionSection/flowerSubscriptionSection';
import { HowItWorkSection } from './howItWorkSection/howItWorkSection';

export const Subscription = () => {
  return (
    <div id="subscription">
      <FlowerSubscriptionSection />
      <HowItWorkSection />
      <BuildSubscriptionSection />
      <FAQSection />
    </div>
  );
};
