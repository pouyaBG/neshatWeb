"use client";
import React, { useState } from "react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import  SwiperCore  from "swiper/core";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperSlidesTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideNumbers = [1, 2, 3];
  const [swiper, setSwiper] = useState(null);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const handleSlideNumberClick = (slideNumber) => {
    const now = slideNumber - 1;
    swiper.slideTo(now);
  };
  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <Swiper
      onSwiper={setSwiper}
      className="relative"
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <div className="hidden lg:flex z-50 absolute top-20 left-28  flex-col justify-between items-center gap-10" data-aos="zoom-in">
        <div
          onClick={() => handleSlideNumberClick(1)}
          className={`cursor-pointer border-white border-2 hover:border-[#DED60E] transition-all rounded-[16px]`}
        >
          <img
            src="/svg/estakhr.png"
            className="w-[200px] h-[112px] rounded-[16px]"
          />
        </div>
        <div
          onClick={() => handleSlideNumberClick(2)}
          className="cursor-pointer border-white border-2 hover:border-[#DED60E] transition-all rounded-[16px]"
        >
          <img
            src="/svg/estakhr2.png"
            className="w-[200px] h-[112px] rounded-[16px]"
          />
        </div>
        <div
          onClick={() => handleSlideNumberClick(3)}
          className="cursor-pointer border-white border-2 hover:border-[#DED60E] transition-all rounded-[16px]"
        >
          <img
            src="/svg/estakhr3.png"
            className="w-[200px] h-[112px] rounded-[16px]"
          />
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 left-0 text-white  rounded-full z-10"
      >
        <svg
          width="103"
          height="114"
          viewBox="0 0 103 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3446_2536)">
            <circle
              cx="53.4861"
              cy="46.4939"
              r="21.0551"
              stroke="white"
              stroke-width="0.877518"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M56.7138 40.0457L51.7855 44.974C50.9461 45.8134 50.9461 47.1743 51.7855 48.0137L56.7138 52.942"
            stroke="white"
            stroke-width="2.14939"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_d_3446_2536"
              x="-9.98912"
              y="0.876196"
              width="112.731"
              height="112.735"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.63256"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_3446_2536"
              />
              <feOffset dx="-7.1079" dy="10.7496" />
              <feGaussianBlur stdDeviation="16.1204" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3446_2536"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3446_2536"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 right-0 text-white  rounded-full z-10"
      >
        <svg
          width="113"
          height="114"
          viewBox="0 0 113 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3446_2533)">
            <circle
              cx="63.4905"
              cy="46.4939"
              r="21.0551"
              transform="rotate(180 63.4905 46.4939)"
              stroke="white"
              stroke-width="0.877518"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M60.2628 52.9421L65.1911 48.0138C66.0305 47.1744 66.0305 45.8135 65.1911 44.9741L60.2628 40.0458"
            stroke="white"
            stroke-width="2.14939"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_d_3446_2533"
              x="0.0186973"
              y="0.876196"
              width="112.731"
              height="112.735"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.63256"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_3446_2533"
              />
              <feOffset dx="-7.1079" dy="10.7496" />
              <feGaussianBlur stdDeviation="16.1204" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3446_2533"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3446_2533"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>

      <SwiperSlide className="w-full max-h-[640px]">
        <div className="relative" >
          <p data-aos="fade-left" className="absolute lg:bottom-36 lg:right-32 bottom-8 right-2 text-white lg:text-[35px] not-italic font-bold leading-[normal] tracking-[-0.43px]">
            چمن مصنوعی ورزشی
          </p>
          <p data-aos="fade-left" className="absolute lg:bottom-24 lg:right-32 bottom-2 right-2 text-[#DED60E] lg:text-[25px] not-italic font-thin leading-[normal] tracking-[-0.358px]">
            سالن و دارای فضای باز
          </p>
          <img src="/svg/estakhr.png" className="object-contain" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full max-h-[640px]">
        <div className="relative">
          <p data-aos="fade-left" className="absolute lg:bottom-36 lg:right-32 bottom-8 right-2 text-white lg:text-[35px] not-italic font-bold leading-[normal] tracking-[-0.43px]">
            چمن مصنوعی ورزشی
          </p>
          <p data-aos="fade-left" className="absolute lg:bottom-24 lg:right-32 bottom-2 right-2 text-[#DED60E] lg:text-[25px] not-italic font-thin leading-[normal] tracking-[-0.358px]">
            سالن و دارای فضای باز
          </p>
          <img src="/svg/estakhr2.png" className="object-contain" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full max-h-[640px]">
        <div className="relative">
          <p data-aos="fade-left" className="absolute lg:bottom-36 lg:right-32 bottom-8 right-2 text-white lg:text-[35px] not-italic font-bold leading-[normal] tracking-[-0.43px]">
          سالن ورزشی
          </p>
          <p data-aos="fade-left" className="absolute lg:bottom-24 lg:right-32 bottom-2 right-2 text-[#DED60E] lg:text-[25px] not-italic font-thin leading-[normal] tracking-[-0.358px]">
            سالن حرفه ایی
          </p>
          <img src="/svg/estakhr3.png" className="object-contain" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlidesTwo;
