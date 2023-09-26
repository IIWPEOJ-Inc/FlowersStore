import './aboutUsSection.scss';
import { Button, ButtonTypes } from '../../../shared/components/buttons/buttons';
import Link from '../../../shared/components/link/link';

export const AboutUsSection = () => {
  return (
    <section id="about-us-section">
      <div className="left-section">
        <div className="content">
          <h2>About us</h2>
        </div>
      </div>
      <div className="right-section">
        <div className="content-container">
          <div className="title-container ">
            <span>OUR STORY</span>
            <h3>Montreal LuxeBouquets</h3>
          </div>
          <p>
            We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers,
            which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house
            plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers,
            plants and gifts the same or next day. Ordering flowers online has never been easier.
          </p>
        </div>
        <Link to="/about-us">
          <Button buttonType={ButtonTypes.SecondaryButton}>LEARN MORE</Button>
        </Link>
      </div>
    </section>
  );
};
