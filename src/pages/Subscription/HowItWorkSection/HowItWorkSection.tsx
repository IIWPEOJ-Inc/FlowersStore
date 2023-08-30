import './HowItWorkSection.scss';
import { RightSideComponent } from './components/RightSideComponent/RightSideComponent';
import React from 'react';

export const HowItWorkSection = () => {
  return (
    <section id="how-it-work-section">
      <div className="left-side">
        <div className="content">
          <h2>How does it work?</h2>
        </div>
      </div>
      <div className="content">
        <div className="right-side">
          <RightSideComponent
            header={'Choose a plan'}
            description={
              'Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.'
            }
          />
          <RightSideComponent
            header={'Frequency and Duration'}
            description={
              'Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.'
            }
          />
          <RightSideComponent
            header={'Pay once'}
            description={
              'After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones'
            }
          />
        </div>
      </div>
    </section>
  );
};
