﻿import './descriptionBlock.scss';
import React from 'react';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

export enum Direction {
  Left,
  Right,
}

interface DescriptionBlockProps {
  arrowDirection: Direction;
  children: React.ReactNode;
}

const arrowImages = {
  [Direction.Left]: {
    img: <img src={leftArrow} alt="arrow-left" className="icon arrow" />,
  },
  [Direction.Right]: {
    img: <img src={rightArrow} alt="arrow-right" className="icon arrow" />,
  },
};

const borderStyles = {
  [Direction.Left]: {
    borderStyle: 'border-left',
  },
  [Direction.Right]: {
    borderStyle: '',
  },
};

export const DescriptionBlock = ({ arrowDirection, children }: DescriptionBlockProps) => {
  const { img: arrowImage } = arrowImages[arrowDirection];
  const { borderStyle: border } = borderStyles[arrowDirection];
  return (
    <div className={`description-block ${border}`}>
      <h3>{children}</h3>
      <div className="bottom-label">
        {arrowImage}
        <span>Shop now</span>
      </div>
    </div>
  );
};
