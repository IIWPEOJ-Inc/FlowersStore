import './radioButton.scss';
import React, { useState } from 'react';

interface RadioButtonProps {
  name: string;
  id: string;
  value: string;
  text: string;
  onChange: any;
  checked: boolean;
}

const RadioButton = ({ name, id, value, text, onChange, checked }: RadioButtonProps) => {
  return (
    <label className="radio-label">
      <input className="radio-input" type="radio" name={name} id= {id} value={value} onChange={onChange} checked={checked} />
      <span className="custom-radio" />
      <p>{text}</p>
    </label>
  );
};

export default RadioButton;
