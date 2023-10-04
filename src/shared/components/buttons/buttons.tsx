import './buttons.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTypes {
  PrimaryButton = 'primary-button',
  SecondaryButton = 'secondary-button',
  TertiaryButton = 'tertiary-button',
  HeaderButton = 'header-button',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonTypes;
}

export const Button = ({ buttonType, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={buttonType}>
      {rest.children}
    </button>
  );
};
