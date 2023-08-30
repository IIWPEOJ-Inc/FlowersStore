﻿import './WhyChooseUsSection.scss';
import { RightSideComponent } from './components/RightSideComponent/RightSideComponent';
import React from 'react';

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us-section">
      <div className="left-side">
        <div className="content">
          <h2>Why choose us ?</h2>
        </div>
      </div>
      <div className="content">
        <div className="right-side">
          <RightSideComponent
            header={'Stylish bouquets by florists'}
            description={
              'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.'
            }
          />
          <RightSideComponent
            header={'On-time delivery'}
            description={
              'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.'
            }
          />
          <RightSideComponent
            header={'Safe payment'}
            description={
              'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.'
            }
          />
          <RightSideComponent
            header={'Subscription by your needs'}
            description={
              "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."
            }
          />
        </div>
      </div>
    </section>
  );
};
