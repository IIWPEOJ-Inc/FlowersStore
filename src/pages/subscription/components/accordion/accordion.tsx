import './accordion.scss';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import ArrowDown from './assets/arrowDown.svg';
import ArrowUp from './assets/arrowUp.svg';

interface AccordionProps {
  items: { header: string; content: string }[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="item" key={index + 1}>
          <button className="title" onClick={() => toggle(index)}>
            {isDesktop ? <h4>{item.header}</h4> : isMobile ? <h6>{item.header}</h6> : <h5>{item.header}</h5>}
            <img src={selected === index ? ArrowUp : ArrowDown} alt="arrow" loading="lazy" />
          </button>
          <div className={selected === index ? 'item-content show' : 'item-content'}>{item.content}</div>
        </div>
      ))}
    </div>
  );
};
