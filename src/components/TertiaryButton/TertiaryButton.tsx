import './TertiaryButton.scss';
import React from 'react';

interface TertiaryButtonProps {
  text: string;
  status: string;
}

export const TertiaryButton = (props: TertiaryButtonProps) => {
  const combinedClassName = `tertiary-button ${props.status}`;
  return <div className={combinedClassName}>{props.text}</div>;
};
