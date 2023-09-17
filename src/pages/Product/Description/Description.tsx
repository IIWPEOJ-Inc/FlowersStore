import React from 'react';
import { Combination } from '../Combination/Combination';

interface DescriptionProps{
    Name: string;
    Price: number;
    Text: string;
}

const Description = (props: DescriptionProps) => {
  return (
    <section id="Description-section">
        <h2>Fresh Flowers / Rosy Delight</h2>
        <div className='Content'>
            <h1>{props.Name} - ${props.Price}</h1>
            <p>{props.Text}</p>
        </div>
        <Combination></Combination>

    </section>
  );
};

export default Description;
