"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const slideNumbers = [1, 2, 3];
  const handleSlideNumberClick = (slideNumber) => {
    const now = slideNumber - 1;
    swiper.slideTo(now);
  };
  const itemsSwiper = [
    {
      textBase: "تأثیرات مثبت روانی و جسمی ورزش:",
      discription:
        "ورزش به تقویت سلامت جسمی و روانی کمک می‌کند. انجام ورزش منظم باعث افزایش اندام‌های عضلانی، بهبود قدرت قلبی و عروقی، و کاهش استرس و ...",
      link: "/",
      img: "/svg/sports.png",
    },
    {
      textBase: "آیا می توان با ورزش تعداد سلولهای چربی را در بدن کمتر کرد؟",
      discription:
        "متاسفانه وقتی افراد به سن رشد می رسند، دیگر نمی توانند از شمار سلولهای چربی بکاهند؛ ولی می توانند به وسیله کمتر کردن حجم آن لاغر شوند. تحقیقات نشان داده است که غذای ... ",
      link: "/",
      img: "/svg/fat.png",
    },
    {
      textBase: "آیا زیاد عرق کردن درحین ورزش، میتواند موجب کاهش وزن بدن شود؟",
      discription:
        "عرق کردن زیاد، بلافاصله از وزن بدن می کاهد. علت آن از بین رفتن نسوج چربی نیست، بلکه مربوط به کم شدن آب بدن است، اما این کم شدن وزن با ... ",
      link: "/",
      img: "/svg/wh.png",
    },
  ];
  return (
    <>
      <div data-swiper-autoplay="2000">
        <Swiper
          className="mySwiper"
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
        >
          {itemsSwiper.map((items, id) => (
            <SwiperSlide key={id} className=" p-10">
              <div className="w-full flex flex-col lg:flex-row lg:gap-[10rem] justify-center items-center">
                <div className=" flex flex-col items-start ">
                  <h1 className="text-black yekanBakh text-[18px] lg:text-[20px] mb-5 not-italic font-bold  ">
                    {items.textBase}
                  </h1>
                  <p className="lg:w-[509px] yekanBakh text-[15px]  text-right text-black  lg:text-[20px]  not-italic font-thin ">
                    {items.discription}
                  </p>
                  <div className="w-full flex items-end justify-end mt-1">
                    <button className="text-black text-[14px] lg:text-[16px] bg-[#DFD82A] shadow-[2px_2px_5px_0px_rgba(0,0,0,0.25)] rounded-[10px] font-thin lg:px-5 lg:py-2 px-2 py-2 mb-5">
                      مشاهده بیشتر
                    </button>
                  </div>
                </div>
                <div className=" lg:w-[400px] w-[200px] ml-[125px] ">
                  <img src={items.img} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex items-center justify-center ">
        <div
          className=" items-center justify-center gap-4 mt-10 ml-5 h-10 hidden lg:flex"
          style={{ direction: "ltr" }}
        >
          {slideNumbers.map((number) => (
            <div
              key={number}
              className={`cursor-pointer transition-all  ${
                currentSlide + 1 === number
                  ? "text-black text-[25px]  font-medium leading-[normal] "
                  : " text-[rgba(59,58,58,0.30)] text-[13.91px]  font-medium leading-[normal]"
              }`}
              onClick={() => handleSlideNumberClick(number)}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="progress-bar-container mt-10  ">
          <div
            className="progress-bar"
            style={{ width: `${(currentSlide / 2) * 100}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
