import './subscriptionSection.scss';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../../../shared/components/buttons/buttons';
import SubscriptionImage from './assets/subscriptionImage.png';

export const SubscriptionSection = () => {
  return (
    <section id="subscription-section">
      <div className="left-section">
        <img src={SubscriptionImage} alt="img-subscription" className="img-subscription" />
      </div>
      <div className="right-section">
        <div className="content-container">
          <div className="title-container">
            <div className="overline">service</div>
            <h2>Flower Subscriptions</h2>
          </div>
          <p>
            Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
        </div>
        <Link to="/subscription">
          <SecondaryButton buttonType="button">subscribe now</SecondaryButton>
        </Link>
      </div>
    </section>
  );
};
