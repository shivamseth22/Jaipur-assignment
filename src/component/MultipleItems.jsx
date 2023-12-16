import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const MultipleItems = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="flex">
          <SwiperSlide>
            <div>
              <img
                src="https://media.istockphoto.com/id/1184388294/photo/business-women-working.jpg?s=2048x2048&w=is&k=20&c=JsC0A1-x-U0FjVPp7dC2M7FjZPSqCAqIhu6hDyziBcU="
                alt="no"
                className="w-[400px]"
              />
            </div>
            <p className="flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              temporibus sit atque reiciendis id quo dignissimos error odio
              repellendus, reprehenderit similique incidunt perferendis illo
              sapiente enim saepe nesciunt alias earum. Adipisci soluta maiores
              voluptatem ullam similique accusantium sed. Neque, laboriosam?
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://media.istockphoto.com/id/1184388294/photo/business-women-working.jpg?s=2048x2048&w=is&k=20&c=JsC0A1-x-U0FjVPp7dC2M7FjZPSqCAqIhu6hDyziBcU=" className="w-[400px]"
                alt="no"
              />
              <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              temporibus sit atque reiciendis id quo dignissimos error odio
              repellendus, reprehenderit similique incidunt perferendis illo
              sapiente enim saepe nesciunt alias earum. Adipisci soluta maiores
              voluptatem ullam similique accusantium sed. Neque, laboriosam?
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://media.istockphoto.com/id/1184388294/photo/business-women-working.jpg?s=2048x2048&w=is&k=20&c=JsC0A1-x-U0FjVPp7dC2M7FjZPSqCAqIhu6hDyziBcU=" className="w-[400px]"
                alt="no"
              />
              <p className="flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              temporibus sit atque reiciendis id quo dignissimos error odio
              repellendus, reprehenderit similique incidunt perferendis illo
              sapiente enim saepe nesciunt alias earum. Adipisci soluta maiores
              voluptatem ullam similique accusantium sed. Neque, laboriosam?
            </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};
export default MultipleItems;
