import './description.scss';
import { ReactSwiper } from '../../../shared/components/swiper/swiper';
import { SwiperPerView } from '../../../shared/components/swiper/swiperPerView';
import { SwiperProductContent } from './components/swiperProductContent';
import { useMediaQuery } from 'react-responsive';
import RadioButton from '../../../shared/components/buttons/radioButton';
import React, { useState } from 'react';
import comb1 from '../assets/comb1.svg';
import comb2 from '../assets/comb2.svg';
import comb3 from '../assets/comb3.svg';
import comb4 from '../assets/comb4.svg';
import comb5 from '../assets/comb5.svg';
import { QuantityCounter } from '../../../shared/components/quantityCounter/quantityCounter';

interface DescriptionProps {
  Name: string;
  Price: number;
  Text: string;
}

const Description = (props: DescriptionProps) => {
  const [checked, setChecked] = useState({ totalPrice: true, salePrice: false });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const changeCheckbox = (e: any) => {
    const { name } = e.target;
    if (name === 'totalPrice') {
      setChecked({ totalPrice: true, salePrice: false });
    }
    if (name === 'salePrice') {
      setChecked({ totalPrice: false, salePrice: true });
    }
  };

  return (
    <section id="description-section">
      <div className="path-to-product">
        <div className="overline">Fresh Flowers </div>
        <div className="overline overline-gray">/ {props.Name}</div>
      </div>
      <div className="content">
        <h3>
          {props.Name} - ${props.Price}
        </h3>
        <p>{props.Text}</p>
      </div>
      <div className="quantity-content">
        <div className="subtitle-description">Quantity</div>
        <QuantityCounter/>
      </div>
      <div className="content">
        {isMobile ? (
          <div className="combination-title">
            <p className="combination-title-include">Vase Not Included</p>
            <div className="subtitle-description">Excellent Combination with:</div>
          </div>
        ) : (
          <div className="combination-title">
            <div className="subtitle-description">Excellent Combination with:</div>
            <p className="combination-title-right">Vase Not Included</p>
          </div>
        )}
        {/* <div className="swiper-descr">
          <SwiperPerView>
            children=
            {[
              <SwiperProductContent imgProduct={comb2} name="Glass Vase" price="15" />,
              <SwiperProductContent imgProduct={comb2} name="Glass Vase" price="15" />,
              <SwiperProductContent imgProduct={comb2} name="Glass Vase" price="15" />,
              <SwiperProductContent imgProduct={comb2} name="Glass Vase" price="15" />,
              <SwiperProductContent imgProduct={comb2} name="Glass Vase" price="15" />,
            ]}
          </SwiperPerView>
        </div> */}
      </div>
      <div className="content">
        <div className="subtitle-description">Price options</div>
        <RadioButton
          name="totalPrice"
          id="totalPrice"
          value="TotalPrice"
          text="One time purchase. Price $100"
          onChange={changeCheckbox}
          checked={checked.totalPrice}
        />
        <RadioButton
          name="salePrice"
          id="salePrice"
          value="SalePrice"
          text="Subscribe now, and save 25% on this order"
          onChange={changeCheckbox}
          checked={checked.salePrice}
        />
      </div>
    </section>
  );
};

export default Description;
