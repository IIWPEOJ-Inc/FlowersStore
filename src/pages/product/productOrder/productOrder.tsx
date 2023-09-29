import './productOrder.scss';
import { Button, ButtonTypes } from '../../../shared/components/buttons/buttons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Description from '../description/description';
import Loader from '../../../shared/components/loader/loader';

interface Product {
  id: string;
  title: string;
  description: string;
  path: string;
  price: number;
  quantity: number;
}

export const ProductOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/products/${productId}`);
        const product = (await response.json()) as Product;
        setProduct(product);
      } catch (ex: any) {
        console.log(ex, 'Aborted');
        return;
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  return (
    <section id="productOrder-section">
      <div className="left-side">
        <img src={` ${process.env.REACT_APP_BASE_URL_PROD}${product?.path}`} alt="Product" className="img-product" loading="lazy" />
      </div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="right-side">
          <Description Name={product?.title} Price={product?.price} Text={product?.description}></Description>
          <div className="button-container">
            <Button buttonType={ButtonTypes.PrimaryButton}>add to bucket</Button>
          </div>
        </div>
      )}
    </section>
  );
};
