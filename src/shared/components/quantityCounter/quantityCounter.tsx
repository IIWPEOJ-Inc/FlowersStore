import './quantityCounter.scss';
import { useState } from 'react';
import Minus from './assets/minus.svg';
import Plus from './assets/plus.svg';

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
        <img className="icon" src={Minus} alt="minus" loading="lazy" />
      </button>
      <div className="quantity boxes-settings">{count}</div>
      <button onClick={increment} className="plus boxes-settings">
        <img className="icon" src={Plus} alt="plus" loading="lazy" />
      </button>
    </div>
  );
};
