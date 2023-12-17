import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation
    >
      <SwiperSlide>
        <img
          src="https://placekitten.com/1200/800"
          alt="Slide 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placekitten.com/1200/801"
          alt="Slide 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placekitten.com/1200/802"
          alt="Slide 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
