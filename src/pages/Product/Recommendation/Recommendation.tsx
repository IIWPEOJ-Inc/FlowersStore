import './recommendation.scss';
import { RecommendationContent } from './components/recommendationContent';
import Link from '../../../shared/components/link/link';
import React from 'react';
import rec1 from '../assets/rec1.png';
import rec2 from '../assets/rec2.png';
import rec3 from '../assets/rec3.png';
import rec4 from '../assets/rec4.png';

export const Recommendation = () => {
  return (
    <section id="recommendation">
      <div className="also-like">
        <h3>You may also like…</h3>
      </div>
      <div className="grid-container">
        <div className="grid-content-1">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec1} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-content-2">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec2} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-content-3">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec3} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-content-4">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec4} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
      </div>
    </section>
  );
};
