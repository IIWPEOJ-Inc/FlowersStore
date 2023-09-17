import './flowerBlock.scss';
import { Direction } from '../descriptionBlock/descriptionBlock';

interface FlowerBlockProps {
  arrowDirection: Direction;
  image: string;
}

const borderStyles = {
  [Direction.Left]: {
    borderStyle: '',
  },
  [Direction.Right]: {
    borderStyle: 'border-left',
  },
};

export const FlowerBlock = ({ arrowDirection, image }: FlowerBlockProps) => {
  const { borderStyle: border } = borderStyles[arrowDirection];
  return (
    <div className={`flower-block border-bottom ${border}`}>
      <img src={image} alt="card-item" className="img-card-item" />
    </div>
  );
};
