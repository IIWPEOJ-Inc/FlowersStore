import './PrimaryButton.scss';
import React from 'react';

interface PrimaryButtonProps {
  text: string;
  status: string;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const combinedClassName = `primary-button ${props.status}`;
  return <div className={combinedClassName}>{props.text}</div>;
};
