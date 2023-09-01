import './SubscriptionSection.scss';
import { SecondaryButton } from '../../../shared/components/buttons/Buttons';
import Image from './assets/image.png';

export const SubscriptionSection = () => {
  return (
    <section id="subscription-section">
      <div className="left-side">
        <img src={Image} alt="left-phot" />
      </div>
      <div className="right-side">
        <div className="content">
          <span>SERVICE</span>
          <h2>Flower Subcriptions</h2>
          <div className="description">
            Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </div>
          <SecondaryButton buttonType="button">SUBSCRIBE NOW</SecondaryButton>
        </div>
      </div>
    </section>
  );
};
