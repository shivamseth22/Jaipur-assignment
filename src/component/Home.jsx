import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import One from "../assets/1.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-8"
      >
        <SwiperSlide><img src={One} alt="" /></SwiperSlide>
        <SwiperSlide><img src={One} alt="" /></SwiperSlide>
        <SwiperSlide><img src={One} alt="" /></SwiperSlide>
      </Swiper>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1545239351-c77e88f1c3c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full lg:max-w-[500px]   h-auto mb-8 lg:mb-0"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <div className="flex flex-col  items-start">
            <h2 className="font-bold mb-4">
              WELCOME TO ACCOUNTING
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              We Are the Best Accounting Agency
            </h1>
          </div>

          <div className="lg:flex-row lg:gap-4">
            <div className="flex flex-col items-start  max-w-[500px] ">
              <h1 className="text-xl lg:text-2xl font-bold ">
                Market Analysis
              </h1>
              <p cl>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia
              </p>
            </div>
            <div className="flex flex-col items-start max-w-[500px]">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">
                Market Analysis
              </h1>
              <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia
              </p>
            </div>
            <div className="flex flex-col items-start max-w-[500px]">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">
                Market Analysis
              </h1>
              <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia
              </p>
            </div>
            <div className="flex flex-col items-start max-w-[500px]">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">
                Market Analysis
              </h1>
              <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
