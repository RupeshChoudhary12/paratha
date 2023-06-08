import React,{useRef,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../hero/Swip.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

const NewSwiper = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <div>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src='src/assets/1.png'/>
          </SwiperSlide>
       
          <SwiperSlide> <h1>Roll Thali</h1>
          <img  className='slide'  src='src/assets/2.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>Rice </h1>
          <img  className='slide'  src='src/assets/3.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>Pastta</h1>
          <img  className='slide'  src='src/assets/4.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src='src/assets/2.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>chips Fingur</h1>
          <img  className='slide'  src='src/assets/5.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>Nann</h1>
          <img  className='slide'  src='src/assets/6.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>tandori nann</h1>
          <img  className='slide'  src='src/assets/7.png'/>
          </SwiperSlide>

          <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src='src/assets/5.png'/>
          </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default NewSwiper
