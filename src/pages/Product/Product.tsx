import './Product.scss';
import React from 'react';
import cedarLavander from './assets/recommendations/cedar-lavander.svg';
import combination1 from './assets/combinations/combination0.svg';
import combination2 from './assets/combinations/combination1.svg';
import combination3 from './assets/combinations/combination2.svg';
import combination4 from './assets/combinations/combination3.svg';
import combination5 from './assets/combinations/combination4.svg';
import flowers from './assets/flowers.svg';
import limeMatcha from './assets/recommendations/lime-matcha.svg';
import oceanMist from './assets/recommendations/ocean-mist.svg';
import rattanGrapefruit from './assets/recommendations/rattan-grapefruit.svg';
import steelVase from './assets/combinations/steel-vase.svg';

const combinations: Combination[] = [
  {
    id: 1,
    name: 'Glass Vase',
    price: '$15',
    icon: combination1,
  },
  {
    id: 2,
    name: 'Hammershoi',
    price: '$45',
    icon: combination2,
  },
  {
    id: 3,
    name: 'Ceramic Vase',
    price: '$35',
    icon: combination3,
  },
  {
    id: 4,
    name: 'Steel vase',
    price: '$25',
    icon: combination4,
  },
  {
    id: 5,
    name: 'Bamboo',
    price: '$15',
    icon: combination5,
  },
];

interface Combination {
  id: number;
  name: string;
  price: string;
  icon: string;
}

export const Product = () => {
  return (
    <section id="Product" className="product">
      <img src={flowers} className="main-image" alt="flowers" />
      <div className="main-info">
        <div className="details">
          <h3>Bouquets Fresh Flowers / Quick Order</h3>
          <div className="description">
            <h1>Rosy Delight - $100</h1>
            <p>
              Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is
              accompanied by seasonal foliage which will enhance these sublime flowers even
            </p>
          </div>
          <div className="quantity">
            <h2>Quantity</h2>
            <button
              className="carousel-btn"
              // onclick="doLeftSlide()"
            >
              {'<'}
            </button>
            <button
              className="carousel-btn"
              // onclick="doRightSlide()"
            >
              {'>'}
            </button>
          </div>
          <div className="combination">
            <div className="combinations-title">
              <h2>Excellent Combination with:</h2>
              <p>Vase Not Included</p>
            </div>
            {/* <div className="combinations-grid">
            {combinations.map((item) => (
              <CategoryCard key={`category-${item.id}`} background={item.background} icon={item.icon} name={item.name} />
            ))}
          </div> */}
          </div>
          <div>
            <h2>Price options</h2>
            <div>
              <input
                type="radio"
                name="price"
                value="0"
                id="full-price"
                className="radio-btn"
                // onChange={}
              />
              <label htmlFor="full-price">One time purchase. Price $100</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                value="1"
                id="sale-price"
                className="radio-btn"
                // onChange={}
              />
              <label htmlFor="sale-price">Subscribe now, and save 25% on this order.</label>
            </div>
          </div>
        </div>
        <button
          className="add-btn"
          // onclick="doRightSlide()"
        >
          {'ADD TO BASKET'}
        </button>
      </div>
    </section>
  );
};
