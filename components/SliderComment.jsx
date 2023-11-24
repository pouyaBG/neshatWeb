import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const SliderComment = () => {
  const [swiper, setSwiper] = useState(null);
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
    <>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer  transition-all  hover:bg-[#F7F5C1] flex flex-col group justify-between items-start bg-white shadow-[0px_5.98838px_25.66449px_0px_rgba(0,0,0,0.05)] rounded-[5px] p-5">
            <div className="flex justify-start items-center lg:gap-5 gap-1">
              <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] lg:mr-5">
                <img src="/svg/Oval.png" className="object-contain" />
              </div>
              <p className="text-[14px] lg:text-[16px]">amyrobson</p>
            </div>
            <p className="pl-5 font-thin text-right text-[15px] my-5 mr-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <div className="w-full flex justify-end items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="18"
                viewBox="0 0 76 18"
                fill="none"
              >
                <path
                  d="M8.42536 0.963867L10.2363 6.53732H16.0966L11.3555 9.98191L13.1664 15.5554L8.42536 12.1108L3.68429 15.5554L5.49522 9.98191L0.754152 6.53732H6.61443L8.42536 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M28.1441 0.963867L29.955 6.53732H35.8153L31.0742 9.98191L32.8852 15.5554L28.1441 12.1108L23.403 15.5554L25.214 9.98191L20.4729 6.53732H26.3332L28.1441 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M47.8629 0.963867L49.6738 6.53732H55.5341L50.793 9.98191L52.6039 15.5554L47.8629 12.1108L43.1218 15.5554L44.9327 9.98191L40.1917 6.53732H46.0519L47.8629 0.963867Z"
                  fill="#DED60E"
                />
                <path
                  d="M67.5738 0.963867L69.3847 6.53732H75.245L70.5039 9.98191L72.3149 15.5554L67.5738 12.1108L62.8327 15.5554L64.6437 9.98191L59.9026 6.53732H65.7629L67.5738 0.963867Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center items-center gap-10 mt-10 ">
        <div
          className="cursor-pointer bg-white py-3 px-4 rounded-[2.566px] hover:bg-[#F7F5C1] transition-all"
          onClick={prevSlide}
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.4939L7.54918 7.54307"
              stroke="#224F34"
              stroke-width="1.71097"
              stroke-linecap="round"
            />
            <path
              d="M1.5 13.5317L7.54918 7.48256"
              stroke="#224F34"
              stroke-width="1.71097"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div
          className="cursor-pointer bg-white py-3 px-4 rounded-[2.566px] hover:bg-[#F7F5C1] transition-all"
          onClick={nextSlide}
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1.43311L1.45082 7.48228"
              stroke="#224F34"
              stroke-width="1.71097"
              stroke-linecap="round"
            />
            <path
              d="M7.5 13.4709L1.45082 7.42177"
              stroke="#224F34"
              stroke-width="1.71097"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SliderComment;
