import './DescriptionBlock.scss';
import React from 'react';
import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

export enum Direction {
  Left,
  Right,
}

interface DescriptionBlockProps {
  direction: Direction;
  description: string;
}

export const DescriptionBlock = (props: DescriptionBlockProps) => {
  let bottomLabel = null;

  if (props.direction === Direction.Left) {
    bottomLabel = (
      <div className="bottom-label">
        <img src={leftArrow} alt="leftArrow" />
        <span>Shop now</span>
      </div>
    );
  } else {
    bottomLabel = (
      <div className="bottom-label">
        <span>Shop now</span>
        <img src={rightArrow} alt="rightArrow" />
      </div>
    );
  }
  return (
    <div className="description-block">
      <span>{props.description}</span>
      {bottomLabel}
    </div>
  );
};
