import './swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import React, { ReactNode } from 'react';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

interface ReactSwiperProps {
  slidesPerView?: number | undefined;
  spaceBetween?: string | number | undefined;
  isPaginationRequired?: boolean;
  contentCentred?: boolean;
  desktopNavigationOnly?: boolean;
  children: ReactNode | ReactNode[];
}
export const ReactSwiper = ({
  slidesPerView = undefined,
  spaceBetween = undefined,
  isPaginationRequired = false,
  contentCentred = false,
  desktopNavigationOnly = false,
  children,
}: ReactSwiperProps) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const showNavigation = isDesktop ? isDesktop : !desktopNavigationOnly;
  return (
    <div className="swiper-container">
      <div className="nav-content-conteiner">
        {showNavigation && (
          <div className="image-swiper-button-prev">
            <img src={leftArrow} alt="leftArrow" className="img-arrow" />
          </div>
        )}
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          loop={true}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          mousewheel={true}
          keyboard={true}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide className={contentCentred ? 'centred' : ''} key={index}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
        {showNavigation && (
          <div className="image-swiper-button-next">
            <img src={rightArrow} alt="rightArrow" className="img-arrow" />
          </div>
        )}
      </div>
      <>{isPaginationRequired ? <div className="swiper-pagination"></div> : ''}</>
    </div>
  );
};
