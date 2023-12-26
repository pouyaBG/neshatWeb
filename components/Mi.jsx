"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Mi = () => {
  const [startCounting, setStartCounting] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStartCounting(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full container m-auto ">
      <div className="">
        <div className=" p-10  ">
          <div className="m-auto flex flex-col lg:flex-row lg:gap-20 gap-10  rounded-[7.004px]  w-fit  py-5 px-20 items-center justify-center ">
            <div className="flex flex-col items-center gap-2  lg:pl-10   pb-10 lg:pb-5">
              <div className="text-white flex flex-col items-center mt-2">
                {startCounting && (
                  <div className=" text-[color:var(--base-100,#2C3131)] text-right text-[33.621px] not-italic flex items-center font-normal leading-[125%]">
                    <CountUp end={300} duration={2} />
                  </div>
                )}
                <p className="text-[color:var(--base-80,#626262)] text-center text-[12.608px] not-italic font-normal leading-[145%]">
                  رضایت مشتری
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2  lg:pl-20 border-b-1 lg:border-b-0 pb-5">
              <div className="text-white flex flex-col items-center mt-2">
                {startCounting && (
                  <div className="text-[color:var(--base-100,#2C3131)] text-right text-[33.621px] not-italic font-normal leading-[125%]">
                    <CountUp end={24} duration={5} />
                    <span className="text-[#5236FF] text-[31.422px] not-italic font-bold leading-[110%]">
                      h
                    </span>
                  </div>
                )}
                <p className="text-[color:var(--base-80,#626262)] text-center text-[12.608px] not-italic font-normal leading-[145%]">
                  تیم پشتیبانی متخصص
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 pb-5">
              <div className="text-white flex flex-col items-center mt-2">
                {startCounting && (
                  <div className="text-[color:var(--base-100,#2C3131)] text-right text-[33.621px] not-italic font-normal leading-[125%]">
                    <CountUp end={50} duration={5} />
                    <span className="text-[#5236FF] text-[31.422px] not-italic font-bold leading-[110%]">
                      k+
                    </span>
                  </div>
                )}
                <p className="text-[color:var(--base-80,#626262)] text-center text-[12.608px] not-italic font-normal leading-[145%]">
                  فروش
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mi;
