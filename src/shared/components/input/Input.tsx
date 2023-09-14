import './Input.scss';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ placeholder, ...props }: Props) => {
  return <input className="input" placeholder={placeholder} {...props} />;
};

export default Input;
