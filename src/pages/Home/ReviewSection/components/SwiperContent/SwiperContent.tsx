import './SwiperContent.scss';
import React from 'react';

interface SwiperContentProps {
  review: string;
  author: string;
}

export const SwiperContent = ({ review, author }: SwiperContentProps) => {
  return (
    <>
      <div className="review">{review}</div>
      <div className="author">{author}</div>
    </>
  );
};
