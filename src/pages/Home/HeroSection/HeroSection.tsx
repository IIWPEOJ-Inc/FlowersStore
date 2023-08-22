import './HeroSection.scss';
import { DescriptionBlock, Direction } from './components/DescriptionBlock/DescriptionBlock';
import { FlowerBlock } from './components/FlowerBlock/FlowerBlock';
import React from 'react';
import flower1 from './assets/flower1.svg';
import flower2 from './assets/flower2.png';
import flower3 from './assets/flower3.png';
import flower4 from './assets/flower4.png';
import flower5 from './assets/flower5.png';
import leftSideImage from './assets/leftSideImage.png';

export const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="left-side">
        <div className="content">
          <div className="upper-items">
            <h1>
              Montreal
              <br />
              LuxeBouquets
              <div className="r-item">®</div>
            </h1>
            <div>
              <span>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:</span>
              <span>
                Spread Joy with <span className="italic"> Our Online Flower Delivery Service</span>
              </span>
            </div>
          </div>
          <div className="bottom-items">
            <img src={leftSideImage} alt="leftSideImage" />
            <span>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <DescriptionBlock direction={Direction.Right} description={'Fresh Flowers'} />
        <FlowerBlock image={flower1} />
        <FlowerBlock image={flower2} />
        <DescriptionBlock direction={Direction.Left} description={'Fresh Flowers'} />
        <DescriptionBlock direction={Direction.Right} description={'Fresh Flowers'} />
        <FlowerBlock image={flower3} />
        <FlowerBlock image={flower4} />
        <DescriptionBlock direction={Direction.Left} description={'Fresh Flowers'} />
        <DescriptionBlock direction={Direction.Right} description={'Fresh Flowers'} />
        <FlowerBlock image={flower5} />
      </div>
    </section>
  );
};
