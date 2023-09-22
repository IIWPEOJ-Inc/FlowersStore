import './swiperPerView.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import React, { ReactNode } from 'react';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

interface SwiperPerViewProps {
  children: ReactNode | ReactNode[];
}
export const SwiperPerView = (props: SwiperPerViewProps) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div className="swiper-container">
      <div className="nav-content-conteiner">
        {isDesktop && (
          <div className="image-swiper-button-prev">
            <img src={leftArrow} alt="leftArrow" className="img-arrow" />
          </div>
        )}
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Navigation, Mousewheel, Keyboard]}
          loop={true}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
          }}
          mousewheel={true}
          keyboard={true}
        >
          {React.Children.map(props.children, (child, index) => (
            <SwiperSlide key={index} style={{ width: '200px' }}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
        {isDesktop && (
          <div className="image-swiper-button-next">
            <img src={rightArrow} alt="rightArrow" className="img-arrow" />
          </div>
        )}
      </div>
    </div>
  );
};
