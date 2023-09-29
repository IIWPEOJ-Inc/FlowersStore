import React from 'react';
import './swiperProductContent.scss';

interface SwiperProductContentProps {
  imgProduct: any;
  name: string;
  price: string;
}

export const SwiperProductContent = ({ imgProduct, name, price }: SwiperProductContentProps) => {
  return (
    <div className="swiper-product-content">
      <img src={imgProduct} alt="Product" className="img-product" />
      <div className="caption name">{name}</div>
      <div className="caption price">${price}</div>
    </div>
  );
};
