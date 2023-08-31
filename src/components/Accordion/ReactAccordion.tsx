import './ReactAccordion.scss';
// import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import ArrowDown from './assets/arrowDown.svg';
import ArrowUp from './assets/arrowUp.svg';
import React, { useState } from 'react';

interface ReactAccordionProps {
  items: { header: string; content: string }[];
}

export const ReactAccordion = ({ items }: ReactAccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <button className="title" onClick={() => toggle(index)}>
            <h4>{item.header}</h4>
            <img src={selected === index ? ArrowUp : ArrowDown} alt="arrow" />
          </button>
          <div className={selected === index ? 'item-content show' : 'item-content'}>{item.content}</div>
        </div>
      ))}
    </>
  );
};
