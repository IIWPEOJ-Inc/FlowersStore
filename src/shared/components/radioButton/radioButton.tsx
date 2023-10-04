import './radioButton.scss';
import { InputHTMLAttributes, ReactNode } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode | ReactNode[];
}

export const RadioButton = ({ children, ...props }: RadioButtonProps) => {
  return (
    <label className="radio-button-label">
      <input className="radio-button" type="radio" {...props} />
      {children}
    </label>
  );
};
