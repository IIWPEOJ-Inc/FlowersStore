import './description.scss';
import { QuantityCounter } from '../../../shared/components/quantityCounter/quantityCounter';
import { RadioButton } from '../../../shared/components/radioButton/radioButton';
import { ReactSwiper } from '../../../shared/components/swiper/swiper';
import { SwiperProductContent } from './components/swiperProductContent';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import comb1 from '../assets/combinations/cedarLavender.webp';
import comb10 from '../assets/combinations/wildMint.webp';
import comb2 from '../assets/combinations/fountain.webp';
import comb3 from '../assets/combinations/hammershoi.webp';
import comb4 from '../assets/combinations/himalayanSalt.webp';
import comb5 from '../assets/combinations/himalayanSaltCandle.webp';
import comb6 from '../assets/combinations/lyngbyGlass.webp';
import comb7 from '../assets/combinations/rattanGrapefruit.webp';
import comb8 from '../assets/combinations/snakePlant.webp';
import comb9 from '../assets/combinations/versoFloor.png';

interface DescriptionProps {
  Name: string;
  Price: number;
  Text: string;
}

const Description = (props: DescriptionProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio1');
  const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);

  return (
    <section id="description-section">
      <div className="path-to-product">
        <div className="overline">Fresh Flowers </div>
        <div className="overline gray">/ {props.Name}</div>
      </div>
      <div className="content">
        <h3>
          {props.Name} - ${props.Price}
        </h3>
        <p>{props.Text}</p>
      </div>
      <div className="quantity-content">
        <div className="subtitle">Quantity</div>
        <QuantityCounter />
      </div>
      <div className="content">
        <div className="combination-title">
          <div className={`subtitle ${isMobile ? 'order-2' : 'order-1'}`}>Excellent Combination with:</div>
          <p className={`combination-title-right ${isMobile ? 'order-1' : 'order-2'}`}>Vase Not Included</p>
        </div>
        <ReactSwiper slidesPerView={isMobile ? 1 : 5} spaceBetween={10}>
          <SwiperProductContent imgProduct={comb1} name="Cedar & Lavender" price="64"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb2} name="Fountain" price="145"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb3} name="Hammershoi" price="135"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb4} name="Himalayan Salt & Rosewater" price="32"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb5} name="Himalayan Salt & Rosewater" price="76"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb6} name="Lyngby glass" price="80"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb7} name="Rattan Grapefruit" price="48"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb8} name="The Snake Plant" price="137"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb9} name="Verso Floor" price="110"></SwiperProductContent>
          <SwiperProductContent imgProduct={comb10} name="Wild Mint & Eucalyptus" price="58"></SwiperProductContent>
        </ReactSwiper>
      </div>
      <div className="content">
        <div className="subtitle">Price options</div>
        <RadioButton value="radio1" checked={isRadioSelected('radio1')} onChange={handleRadioClick}>
          One time purchase. Price $100
        </RadioButton>
        <RadioButton value="radio2" checked={isRadioSelected('radio2')} onChange={handleRadioClick}>
          Subscribe now, and save 25% on this order
        </RadioButton>
      </div>
    </section>
  );
};

export default Description;
