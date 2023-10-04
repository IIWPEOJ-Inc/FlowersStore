import './category.scss';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import Link from '../../shared/components/link/link';
import Loader from '../../shared/components/loader/loader';
import React, { useEffect, useState } from 'react';

interface CategoryWithProducts {
  id: string;
  title: string;
  titlePath: string;
  path: string;
  products: Product[];
}

interface Product {
  id: string;
  title: string;
  description: string;
  path: string;
  price: number;
  quantity: number;
}

export const Category = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();
  const [category, setCategory] = useState<CategoryWithProducts>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/categories/${categoryId}/products`);
        const category = (await response.json()) as CategoryWithProducts;
        setCategory(category);
      } catch (ex: any) {
        console.log(ex, 'Aborted');
        return;
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <section id="category-section">
      <div className="left-section">
        <div className="title-container">
          <h1>{category?.title}</h1>
        </div>
        <img src={` ${process.env.REACT_APP_BASE_URL_PROD}${category?.titlePath}`} alt="card-item" loading="lazy" />
      </div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="right-section">
          {category?.products.map((product, index) => {
            const comparable = isMobile ? 1 : 2;
            const isLastRow = category.products.length - index <= comparable;
            return (
              <Link to={`/product/${product.id}`}>
                <div className="card-product border-left">
                  <div className="label">
                    <h6>{product.title}</h6>
                    <div className="caption">{`price ${product?.price}$`}</div>
                  </div>
                  <img
                    src={` ${process.env.REACT_APP_BASE_URL_PROD}${product.path}`}
                    alt="card-item"
                    loading="lazy"
                    className={`img-cart-product ${isLastRow ? '' : 'border-bottom'}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
