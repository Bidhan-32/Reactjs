import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "./Testimonial.css";

import { data } from "../Data";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
    return (
      <section id="testimonials" className="main-testimonials-wrapper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            slideShadows: true,
          }}

        >
          {data.map((item, key) => (
            <SwiperSlide>
              <img src={item.image} />
              <div className='font'>
                  {item.name }
              </div>
              <div className='font1'>
               {item.testimony}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default Testimonials;