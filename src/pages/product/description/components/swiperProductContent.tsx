import './swiperProductContent.scss';
import React from 'react';

interface SwiperProductContentProps {
  imgProduct: any;
  name: string;
  price: string;
}

export const SwiperProductContent = ({ imgProduct, name, price }: SwiperProductContentProps) => {
  return (
    <div className="swiper-product-content">
      <img src={imgProduct} alt="Product" className="img-product" loading="lazy" />
      <div className="caption name">{name}</div>
      <div className="caption price">${price}</div>
    </div>
  );
};
