import './SwiperContent.scss';

interface SwiperContentProps {
  review: string;
  author: string;
}

export const SwiperContent = ({ review, author }: SwiperContentProps) => {
  return (
    <div className="swiper-content">
      <h4>
        <em>{review}</em>
      </h4>
      <h6>{author}</h6>
    </div>
  );
};
