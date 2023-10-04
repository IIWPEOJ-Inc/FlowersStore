import './input.scss';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(({ ...props }, ref) => {
  return <input className="input" {...props} ref={ref} />;
});

export default Input;
