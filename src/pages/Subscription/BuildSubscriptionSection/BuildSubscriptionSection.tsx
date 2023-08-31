import './BuildSubscriptionSection.scss';
import { PrimaryButton } from '../../../components/PrimaryButton/PrimaryButton';
import { QuantityCounter } from '../../../components/QuantityCounter/QuantityCounter';
import { SecondaryButton } from '../../../components/SecondaryButton/SecondaryButton';
import { SubscriptionPlan } from './components/SubscriptionPlan/SubscriptionPlan';
import ClassicFlowers from './assets/classicFlowers.png';
import LuxeFlowers from './assets/luxeFlowers.png';
import React from 'react';
import RightImage from './assets/rightImage.png';
import SeasonalFlowers from './assets/seasonalFlowers.png';

export const BuildSubscriptionSection = () => {
  return (
    <section id="build-subscription-section">
      <div className="left-side">
        <div className="content">
          <span>Build Your Subscription</span>
          <h3>Selecting a Plan</h3>
          <div className="selection-description">
            Enjoy free shipping on every order and save up to 30%.
            <br />
            Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription,
            simply log in to your account dashboard. You're in complete control of your flower delivery experience.
          </div>
          <SubscriptionPlan
            image={ClassicFlowers}
            planName={'Seasonal'}
            options={['Price $65', 'Free Delivery', 'Best for a budget', 'Glass vase with first delivery', 'Save up to 25%']}
          />
          <SubscriptionPlan
            image={SeasonalFlowers}
            planName={'Classic'}
            options={[
              'Price $45',
              'Free Delivery',
              'Best for a budget',
              'Glass vase with first delivery',
              'Luxury candle with your first delivery',
              'Save up to 28%',
            ]}
          />
          <SubscriptionPlan
            image={LuxeFlowers}
            planName={'Luxe'}
            options={[
              'Price $95',
              'Free Delivery',
              'Premium arrangement',
              'Premium vase with first delivery',
              'Luxury candle with your first delivery',
              'Save up to 30%',
            ]}
          />
          <div className="grey-line"></div>
          <h4>How often do you want flowers delivered ?</h4>
          <div className="under-h4-div">Select the delivery frequency</div>
          <div className="frequency-buttons">
            <SecondaryButton text={'Monthly'} status={''} />
            <SecondaryButton text={'Bi-Weekly'} status={''} />
            <SecondaryButton text={'Weekly'} status={''} />
          </div>
          <div className="grey-line"></div>
          <h4>How many deliveries would you like ?</h4>
          <div className="under-h4-div">
            Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need{' '}
          </div>
          <QuantityCounter />
          <div className="grey-line"></div>
          <PrimaryButton text={'Checkout'} status={''} />
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <img src={RightImage} alt="RightImage" />
        </div>
      </div>
    </section>
  );
};
