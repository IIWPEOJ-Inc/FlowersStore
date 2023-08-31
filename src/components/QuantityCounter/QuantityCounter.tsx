import './QuantityCounter.scss';
import Minus from './assets/minus.svg';
import Plus from './assets/plus.svg';
import React, { useState } from 'react';

export const QuantityCounter = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="quantity-counter">
      <button onClick={decrement} className="minus boxes-settings">
        <img src={Minus} alt="Minus" />
      </button>
      <div className="quantity boxes-settings">{count}</div>
      <button onClick={increment} className="plus boxes-settings">
        <img src={Plus} alt="Plus" />
      </button>
    </div>
  );
};
