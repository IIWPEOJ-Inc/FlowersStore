import React from 'react';
import { PrimaryButton } from '../../../components/PrimaryButton/PrimaryButton';
import view from '../../../shared/assets/Products/leftColum.svg'; 
import Description from '../Description/Description';

interface GuickOrderProps{
    id : number;
}

const GuickOrder = () => {
  return (
    <section id="GuickOrder-section">
        <img src={view} alt="Product" />
        <div className='right-side'>
        <Description
          Name="Rosy Delight"
          Price={100}
          Text="Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
        ></Description>
          <PrimaryButton text ="ADD TO BASKET" status = "pressed"></PrimaryButton>
        </div>
    </section>
  );
};

export default GuickOrder;
