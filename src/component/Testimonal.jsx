import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className='bg-gradient-to-b from-teal-500 to-white p-8 min-h-screen flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <p className='text-sm text-white'>TESTIMONIES</p>
        <h1 className='text-4xl lg:text-5xl text-white font-bold'>Happy Clients & Feedbacks</h1>
      </div>

      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='text-white text-center'>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aperiam!</p>
            <div className='flex flex-col items-center mt-4'>
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg" alt="" className='w-20 h-20 rounded-full' />
              <div className='mt-2'>
                <h1 className='text-lg font-bold'>Roger Scott</h1>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-white text-center'>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aperiam!</p>
            <div className='flex flex-col items-center mt-4'>
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg" alt="" className='w-20 h-20 rounded-full' />
              <div className='mt-2'>
                <h1 className='text-lg font-bold'>Roger Scott</h1>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-white text-center'>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aperiam!</p>
            <div className='flex flex-col items-center mt-4'>
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg" alt="" className='w-20 h-20 rounded-full' />
              <div className='mt-2'>
                <h1 className='text-lg font-bold'>Roger Scott</h1>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

       
      {/* </Swiper> */}
    </div>
  );
};

export default Testimonial;
