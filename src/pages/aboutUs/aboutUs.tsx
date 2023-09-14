import './aboutUs.scss';
import { PrimaryButton } from '../../shared/components/buttons/buttons';
import { useMediaQuery } from 'react-responsive';
import Facebook from '../../shared/assets/facebook.svg';
import Image1 from './assets/aboutUsImage1.jpg';
import Image2 from './assets/aboutUsImage2.png';
import Image3 from './assets/aboutUsImage3.jpg';
import Image4 from './assets/aboutUsImage4.jpg';
import Instagram from '../../shared/assets/instagram.svg';
import Link from '../../shared/components/link/link';
import Pinterest from '../../shared/assets/pinterest.svg';
import Telegram from '../../shared/assets/telegram.svg';
import Twitter from '../../shared/assets/twitter.svg';

export const AboutUs = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return (
    <section id="about-us-page">
      <div className="section-container">
        <div className={`content-container centred border-bottom ${isDesktop ? 'border-right' : ''}`}>
          <div className="our-story-container">
            <div className="title-container">
              <h2>Our Story</h2>
              <h4 className="zapfino">About</h4>
              <h2>Montreal LuxeBouquets</h2>
              <p className="text-centred">
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <em>Online Flower Delivery Service</em>
              </p>
            </div>
            <div className="icons-container centred">
              <Link to="/">
                <img src={Instagram} alt="instagram" className="icon" />
              </Link>
              <Link to="/">
                <img src={Pinterest} alt="pinterest" className="icon" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="facebook" className="icon" />
              </Link>
              <Link to="/">
                <img src={Twitter} alt="twitter" className="icon" />
              </Link>
              <Link to="/">
                <img src={Telegram} alt="telegram" className="icon" />
              </Link>
            </div>
          </div>
        </div>
        <img src={Image1} alt="img-about-us-1" className="img-about-us border-bottom" />
      </div>
      <div className="content-container border-bottom">
        <div className="story-container">
          <div className="title-container">
            <div className="overline">Our Story</div>
            <h3>Our Founder's Passion</h3>
          </div>
          <p className={`text-centred ${isDesktop ? 'width-50' : ''}`}>
            LuxeBouquets was founded in 2010 by Natalia Zelinska with the goal of bringing unique and exquisite bouquets to the people of Montreal.
            Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the
            creation and delivery of fresh, beautiful, and distinctive bouquets.
          </p>
        </div>
      </div>
      <div className="section-container">
        <img src={Image2} alt="img-about-us-2" className={`img-about-us border-bottom ${isDesktop ? 'border-right' : ''}`} />
        <div className="content-container border-bottom">
          <div className="description-container">
            <h3>Expertly Crafted Bouquets</h3>
            <p>
              At Montreal LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that
              only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality
              flowers, and our skilled florists expertly craft each bouquet to perfection.
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <img src={Image3} alt="img-about-us-3" className={`img-about-us border-bottom ${isDesktop ? 'order-2' : ''}`} />
        <div className={`content-container border-bottom ${isDesktop ? 'order-1 border-right' : ''}`}>
          <div className="description-container">
            <h3>Bouquets, Gifts & Ambiance</h3>
            <p>
              In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury
              brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why
              we offer same or next-day delivery throughout Montreal.
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <img src={Image4} alt="img-about-us-4" className={`img-about-us border-bottom ${isDesktop ? 'border-right' : ''}`} />
        <div className="content-container border-bottom">
          <div className="description-container">
            <h3>Making Every Day Special</h3>
            <p>
              Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality
              flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your
              purchase.Thank you for choosing Montreal LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful
              bouquets and gifts.
            </p>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="story-container">
          <h2>Discover Our Beautiful Bouquets</h2>
          <div className={`subtitle text-centred ${isDesktop ? 'width-50' : ''}`}>
            Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping
          </div>
          <div className="button-container">
            <Link to="/">
              <PrimaryButton buttonType="button">shop now</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
