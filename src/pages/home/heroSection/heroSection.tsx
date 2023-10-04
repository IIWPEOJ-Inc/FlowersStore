import './heroSection.scss';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroImage from './assets/heroImage.png';
import Link from '../../../shared/components/link/link';
import Loader from '../../../shared/components/loader/loader';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

interface Category {
  id: string;
  title: string;
  path: string;
}

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const isDesktop = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
        const categories = (await response.json()) as Category[];
        setCategories(categories);
      } catch (ex: any) {
        console.log(ex, 'Aborted');
        return;
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section id="hero-section">
      <div className="left-section">
        <div className="grid-content">
          <div className="grid-row-container">
            <div className="title-container">
              <div>
                <h1>Montreal</h1>
                <h1>
                  LuxeBouquets
                  <sup className="r-symbol">®</sup>
                </h1>
              </div>
              <p>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <em>Online Flower Delivery Service</em>
              </p>
            </div>
            <div className="grid-column-container">
              <div className="left-container">
                <img src={HeroImage} alt="img-hero" className="img-hero" loading="lazy" />
              </div>
              <div className="right-container">
                <p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="right-section">
          {categories.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <div className="category-container">
                <div
                  className={`category-title-item ${
                    isEven ? (isDesktop ? 'order-1' : 'border-right order-1') : isDesktop ? 'border-left order-2' : 'order-2'
                  }`}
                >
                  <h3>{category.title}</h3>
                  <div className="link-items">
                    <span className={isEven ? 'order-2' : 'order-1'}>
                      {isEven ? (
                        <img src={rightArrow} alt="arrow-right" className="icon arrow" />
                      ) : (
                        <img src={leftArrow} alt="arrow-left" className="icon arrow" />
                      )}
                    </span>
                    <span className={isEven ? 'order-1' : 'order-2'}>
                      <Link to={`/category/${category.id}`}>Shop now</Link>
                    </span>
                  </div>
                </div>
                <div
                  className={`border-bottom ${
                    isEven ? (isDesktop ? 'border-left order-2' : 'order-2') : isDesktop ? 'order-1' : 'border-right order-1'
                  }`}
                >
                  <Link to={`/category/${category.id}`}>
                    <img src={` ${process.env.REACT_APP_BASE_URL_PROD}${category.path}`} alt="card-item" loading="lazy" className="img-card-item " />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
