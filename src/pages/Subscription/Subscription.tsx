import './Subscription.scss';
import { BuildSubscriptionSection } from './BuildSubscriptionSection/BuildSubscriptionSection';
import { FAQSection } from './FAQSection/FAQSection';
import { FlowerSubscriptionSection } from './FlowerSubscriptionSection/FlowerSubscriptionSection';
import { HowItWorkSection } from './HowItWorkSection/HowItWorkSection';

export const Subscription = () => {
  return (
    <>
      <FlowerSubscriptionSection />
      <HowItWorkSection />
      <BuildSubscriptionSection />
      <FAQSection />
    </>
  );
};
