import './buildSubscriptionSection.scss';
import { PrimaryButton, SecondaryButton } from '../../../shared/components/buttons/buttons';
import { QuantityCounter } from '../../../shared/components/quantityCounter/quantityCounter';
import { SubscriptionPlan } from './components/subscriptionPlan/subscriptionPlan';
import ClassicFlowers from './assets/classicFlowers.png';
import LuxeFlowers from './assets/luxeFlowers.jpeg';
import RightImage from './assets/rightImage.png';
import SeasonalFlowers from './assets/seasonalFlowers.jpeg';

export const BuildSubscriptionSection = () => {
  return (
    <section id="build-subscription-section">
      <div className="left-content">
        <div className="content">
          <span className="overline">Build Your Subscription</span>
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
            <SecondaryButton buttonType={'button'}>Monthly</SecondaryButton>
            <SecondaryButton buttonType={'button'}>Bi-Weekly</SecondaryButton>
            <SecondaryButton buttonType={'button'}>Weekly</SecondaryButton>
          </div>
          <div className="gray-line"></div>
          <h4>How many deliveries would you like ?</h4>
          <div className="under-h4-div">
            Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need{' '}
          </div>
          <QuantityCounter />
          <div className="gray-line"></div>
          <PrimaryButton buttonType={'button'}>Checkout</PrimaryButton>
        </div>
      </div>
      <div className="right-content">
        <div className="content">
          <img src={RightImage} alt="RightImage" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
