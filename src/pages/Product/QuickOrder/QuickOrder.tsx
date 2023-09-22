import { PrimaryButton } from '../../../shared/components/buttons/buttons';
import React from 'react';
import View from '../assets/imgDesc.svg';
import Description from '../description/description';
import './quickOrder.scss';

interface QuickOrderProps {
  id: number;
}

const QuickOrder = () => {
  return (
    <section id="quickOrder-section">
      <div className="left-side">
        <img src={View} alt="Product" className='img-product'/>
      </div>
      <div className="right-side">
        <Description
          Name="Rosy Delight"
          Price={100}
          Text="Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
        ></Description>
        <div className="button-order">
          <PrimaryButton buttonType="button">ADD TO BASKET</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;
