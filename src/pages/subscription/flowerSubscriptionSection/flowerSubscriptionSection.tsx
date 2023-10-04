import './flowerSubscriptionSection.scss';
import { SecondaryButton } from '../../../shared/components/buttons/buttons';
import LeftImage from './assets/leftImage.png';

export const FlowerSubscriptionSection = () => {
  return (
    <section id="flower-subscription-section">
      <div className="left-section">
        <img src={LeftImage} alt="LeftImage" loading="lazy" />
      </div>
      <div className="right-section">
        <div className="content">
          <h2>Flower Subscription</h2>
          <h6>For Yourself</h6>
          <ul className="subscription-list">
            <li className="option-description">
              The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without
              lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!
            </li>
          </ul>
          <h6>As a Gift</h6>
          <ul className="subscription-list">
            <li className="option-description">
              Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the
              frequency and duration of your choosing.
            </li>
          </ul>
          <h6>For Business</h6>
          <ul className="subscription-list">
            <li className="option-description">
              Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will
              improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.
            </li>
          </ul>
          <a href="/subscription#build-subscription-section">
            <SecondaryButton buttonType={'button'}>Explore Plans</SecondaryButton>
          </a>
        </div>
      </div>
    </section>
  );
};
