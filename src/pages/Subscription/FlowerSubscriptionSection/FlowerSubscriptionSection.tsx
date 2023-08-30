import './FlowerSubscriptionSection.scss';
import { SecondaryButton } from '../../../components/SecondaryButton/SecondaryButton';
import LeftImage from './assets/leftImage.png';
import React from 'react';

export const FlowerSubscriptionSection = () => {
  return (
    <section id="flower-subscription-section">
      <div className="left-side">
        <img src={LeftImage} alt="LeftImage" />
      </div>
      <div className="right-side">
        <div className="content">
          <h2>Flower Subscription</h2>
          <div className="subscription-plan">
            <h6>For Yourself</h6>
            <div className="plan-description">
              The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without
              lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!
            </div>
            <div className="dot">.</div>
          </div>
          <div className="subscription-plan">
            <h6>As a Gift</h6>
            <div className="plan-description">
              Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the
              frequency and duration of your choosing.
            </div>
            <div className="dot">.</div>
          </div>
          <div className="subscription-plan">
            <h6>For Business</h6>
            <div className="plan-description">
              Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will
              improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.
            </div>
            <div className="dot">.</div>
          </div>
          <SecondaryButton text={'Explore Plans'} status={''} />
        </div>
      </div>
    </section>
  );
};
