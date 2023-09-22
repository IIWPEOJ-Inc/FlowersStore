import React, { ReactNode } from 'react';
import './recommendationContent.scss';

interface RecommendationContentProps {
  product: ReactNode;
  name: string;
  price: string;
}

export const RecommendationContent = ({product, name, price }: RecommendationContentProps) => {
  return (
    <div className="recommendation-content">
      <div className='recommendation-img'>
        {product}
      </div>
      <div className="caption name">{name}</div>
      <div className="caption price">price {price}$</div>
    </div>
  );
};
