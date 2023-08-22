import './FlowerBlock.scss';
import React from 'react';

interface FlowerBlockProps {
  image: string;
}

export const FlowerBlock = (props: FlowerBlockProps) => {
  return (
    <div className="flower-block">
      <img src={props.image} alt="{props.image}" />
    </div>
  );
};
