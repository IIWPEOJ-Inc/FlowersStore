import './HeroSection.scss';
import { DescriptionBlock, Direction } from './components/DescriptionBlock/DescriptionBlock';
import { FlowerBlock } from './components/FlowerBlock/FlowerBlock';
import HeroImage from './assets/heroImage.png';
import flower1 from './assets/flower1.jpg';
import flower2 from './assets/flower2.png';
import flower3 from './assets/flower3.png';
import flower4 from './assets/flower4.png';
import flower5 from './assets/flower5.png';

export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="left-section">
        <div className="grid-content">
          <div className="grid-row-container">
            <div className="title-container">
              <div>
                <h1>Montreal</h1>
                <h1>
                  LuxeBouquets
                  <sup className="r-symbol">®</sup>
                </h1>
              </div>
              <p>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <em>Online Flower Delivery Service</em>
              </p>
            </div>
            <div className="grid-column-container">
              <div className="left-container">
                <img src={HeroImage} alt="img-hero" className="img-hero" />
              </div>
              <div className="right-container">
                <p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <DescriptionBlock arrowDirection={Direction.Right}>Fresh Flowers</DescriptionBlock>
        <FlowerBlock arrowDirection={Direction.Right} image={flower1} />
        <FlowerBlock arrowDirection={Direction.Left} image={flower2} />
        <DescriptionBlock arrowDirection={Direction.Left}>Dried Flowers</DescriptionBlock>
        <DescriptionBlock arrowDirection={Direction.Right}>Live Plants</DescriptionBlock>
        <FlowerBlock arrowDirection={Direction.Right} image={flower3} />
        <FlowerBlock arrowDirection={Direction.Left} image={flower4} />
        <DescriptionBlock arrowDirection={Direction.Left}>Aroma Candles</DescriptionBlock>
        <DescriptionBlock arrowDirection={Direction.Right}>Fresheners</DescriptionBlock>
        <FlowerBlock arrowDirection={Direction.Right} image={flower5} />
      </div>
    </section>
  );
};
