import './RightSideComponent.scss';
import React from 'react';

interface RightSideComponentProps {
  header: string;
  description: string;
}

export const RightSideComponent = (props: RightSideComponentProps) => {
  return (
    <div className="right-side-component">
      <h3>{props.header}</h3>
      <div className="description">{props.description}</div>
    </div>
  );
};
