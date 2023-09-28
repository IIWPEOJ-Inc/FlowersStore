import { ProductOrder } from './productOrder/productOrder';
import { Recommendations } from './recommendation/recommendations';

export const Product = () => {
  return (
    <section id="product-section">
      <ProductOrder />
      <Recommendations />
    </section>
  );
};
