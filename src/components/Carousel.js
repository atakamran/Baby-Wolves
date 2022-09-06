import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import ImageComponent from './media/ImageComponent'

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

const Container = styled.div`
    width: 25vw;
    height: 70vw;

    img {
        width: 100%;
    }

    @media (max-width: 64em){
      height: 55%;
      width: 55%;
    }

    .swiper{
      padding-top: 75%;
      width: 125%;
      height: 44.8%;
    }
    .swiper-slide{
        background-color: ${props => props.theme.CarouselColor};
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay= {{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/bev7zju_8fje.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/en05awy_95h5.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/0qc90fx_kd6o.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/bifz8vu_nqd2.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/ag5tuvh_cnjd.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/bev7zju_8fje.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/2xyq13g_4iyc.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/s4o6wh1_0jiq.png" alt="Baby Wolves" /></SwiperSlide>
        <SwiperSlide><ImageComponent url="https://s6.uupload.ir/files/sygnfjm_srfp.png" alt="Baby Wolves" /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel