import './productOrder.scss';
import { PrimaryButton } from '../../../shared/components/buttons/buttons';
import CategoryImage from '../assets/category.svg';
import Description from '../description/description';

export const ProductOrder = () => {
  return (
    <section id="productOrder-section">
      <div className="left-side">
        <img src={CategoryImage} alt="Product" className="img-product" />
      </div>
      <div className="right-side">
        <Description
          Name="Rosy Delight"
          Price={100}
          Text="Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even"
        ></Description>
        <div className="button-container">
          <PrimaryButton buttonType="button">add to bucket</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
