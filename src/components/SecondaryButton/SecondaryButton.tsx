import './SecondaryButton.scss';
import React from 'react';

interface SecondaryButtonProps {
  text: string;
  status: string;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const combinedClassName = `secondary-button ${props.status}`;
  return <div className={combinedClassName}>{props.text}</div>;
};
