import './DescriptionBlock.scss';
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
    img: <img src={leftArrow} alt="leftArrow" />,
  },
  [Direction.Right]: {
    img: <img src={rightArrow} alt="rightArrow" />,
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
      <div className="block-title">{children}</div>
      <div className="bottom-label">
        {arrowImage}
        <span>Shop now</span>
      </div>
    </div>
  );
};
