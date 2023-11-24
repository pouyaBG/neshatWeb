"use client"
import RegistrationForm from "@/components/RegistrationForm";
import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <div className="flex items-center w-full h-screen" data-aos="zoom-in-down">
      <div className="bg-white w-[60%] h-full flex flex-col items-center justify-center">
        <h1 className=" text-black text-[24.232px] not-italic font-bold leading-[normal]">
          برای داشتن یک حساب کاربری ثبت نام کنید
        </h1>
        <RegistrationForm />
      </div>
      <div className="w-[40%] h-full relative">
        <img
          src="/svg/coverL.png"
          className="w-full h-full object-cover left-0 bottom-0 absolute"
        />
        <img src="/svg/logS.png" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 flex flex-col items-center justify-center">
          <h2 className="text-white text-[28.042px] not-italic font-medium leading-[normal] my-2">
            آیا قبلا ثبت نام کرده اید؟
          </h2>
          <h2 className="text-[#DEDEDE] text-[23.83px] not-italic font-medium leading-[normal] my-2">
            وارد حساب کاربری خود شوید
          </h2>
          <Link
            href={"/users/login"}
            className="opacity-80 rounded-[6.049px] border-[1.695px] border-solid border-white text-white px-20 mt-2 py-2 hover:scale-105 transition-all bg-[#5F5F5F]"
          >
            ورود
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
