import './FAQSection.scss';
import { ReactAccordion } from '../../../components/Accordion/ReactAccordion';
import React from 'react';

const items = [
  {
    header: 'How often will I get a new bouquet?',
    content:
      'Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!',
  },
  {
    header: 'Can i send subscription like as a gift ?',
    content:
      'Depending on the day you first choose for your flower delivery, we will deliver on that day for all future deliveries. So if you get your flowers on Thursday every other week, you will get another flower delivery two weeks later on Thursday.',
  },
  {
    header: 'Can I choose which bouquet I get ?',
    content:
      'Each subscription option is carefully selected by our specialists. Our florists select the best and freshest varieties for delivery that surprise and delight every time; thus, the current subscription offer does not allow you to choose a different bouquet for each delivery or to receive the entire subscription with one particular bouquet. Each bouquet will be individual and made according to your chosen plan - classic, seasonal or luxury bouquets',
  },
  {
    header: 'Can I change the shipping address ?',
    content:
      'Yes, you can! After you create an account, you can log in and adjust your settings to pause the next delivery and let us know the next best delivery date.',
  },
  {
    header: 'What day will the subscription bouquet come?',
    content:
      'Depending on the day you first choose for your flower delivery, we will deliver on that day for all future deliveries. So if you get your flowers on Thursday every other week, you will get another flower delivery two weeks later on Thursday.',
  },
  {
    header: 'Can I suspend my subscription to flowers ?',
    content:
      'Yes, you can! After you create an account, you can log in and adjust your settings to pause the next delivery and let us know the next best delivery date.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq-section">
      <div className="content">
        <h2>Subscription FAQ</h2>
        <ReactAccordion items={items} />
      </div>
    </section>
  );
};
