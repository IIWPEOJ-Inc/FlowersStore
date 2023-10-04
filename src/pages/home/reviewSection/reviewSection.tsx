import './reviewSection.scss';
import { ReactSwiper } from '../../../shared/components/swiper/swiper';
import { SecondaryButton } from '../../../shared/components/buttons/buttons';
import { SwiperContent } from './components/swiperContent';
import Google from './assets/google.svg';

export const ReviewSection = () => {
  return (
    <section id="review-section">
      <div className="content-container">
        <div className="swiper-headings-container">
          <div className="headings-container">
            <div className="google-title-container">
              <img src={Google} alt="img-google" className="img-google" loading="lazy" />
              <div className="overline">Reviews</div>
            </div>
            <h2>Our Clients say</h2>
          </div>
          <ReactSwiper isPaginationRequired={true} contentCentred={true} desktopNavigationOnly={true}>
            <SwiperContent
              review={'“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”'}
              author={'– Ronald Richards'}
            />
            <SwiperContent
              review={
                "“Usually I don't give it five stars, but I recommend this subscription, no florist on the internet surpasses the look and quality of these flowers. I would recommend to the store that it is possible for us to be able to choose the days, this gift is sent, in special events, a calendar not exactly every 30 days”"
              }
              author={'– J.Roggiero "Gino"'}
            />
            <SwiperContent
              review={
                '“I bought a 3-month subscription for my mom for her birthday. It gave her some beautiful flowers to enjoy through the gloomy, cold, winter months. She loved them! She said they held up well - most for about 2 weeks. She enjoys cutting and arranging them and they came with flower food (she used her own vase). I will attach the pictures she sent - since I did not see them in person. I plan on doing this again for her every winter.”'
              }
              author={'– Carolyn Marchetti'}
            />
          </ReactSwiper>
        </div>
        <SecondaryButton buttonType="submit">READ REVIEWS</SecondaryButton>
      </div>
    </section>
  );
};
