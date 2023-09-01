import './Swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide as ReactSlide, Swiper as ReactSwiper } from 'swiper/react';
import React, { ReactNode } from 'react';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

interface SwiperProps {
  children: ReactNode | ReactNode[];
}

export const Swiper = (props: SwiperProps) => {
  return (
    <ReactSwiper
      cssMode={true}
      loop={true}
      navigation={{
        nextEl: '.image-swiper-button-next',
        prevEl: '.image-swiper-button-prev',
      }}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {React.Children.map(props.children, (child, index) => (
        <ReactSlide key={index}>{child}</ReactSlide>
      ))}
      <div className="swiper-button image-swiper-button-next">
        <img src={rightArrow} alt="rightArrow" />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <img src={leftArrow} alt="leftArrow" />
      </div>
    </ReactSwiper>
  );
};
