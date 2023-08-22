import './ReactSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { ReactNode } from 'react';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

interface ReactSwiperProps {
  children: ReactNode | ReactNode[];
}

export const ReactSwiper = (props: ReactSwiperProps) => {
  return (
    <Swiper
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
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      <div className="swiper-button image-swiper-button-next">
        <img src={rightArrow} alt="rightArrow" />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <img src={leftArrow} alt="leftArrow" />
      </div>
    </Swiper>
  );
};
