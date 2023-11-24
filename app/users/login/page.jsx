"use client"
import LoginForm from "@/components/LoginForm";
import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

const Page = () => {
 
  return (
    <div className="flex items-center w-full h-screen" data-aos="zoom-in-down">
      <div className="w-[40%] h-full relative">
        <img
          src="/svg/coverL.png"
          className="w-full h-full object-cover left-0 bottom-0 absolute"
        />
        <img src="/svg/logS.png" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 flex flex-col items-center justify-center">
          <h2 className="text-white text-[34.042px] not-italic font-medium leading-[normal] my-2">
            حساب کاربری ندارید؟
          </h2>
          <h2 className="text-[#DEDEDE] text-[23.83px] not-italic font-medium leading-[normal] my-2">
            همین حالا ثبت نام کنید
          </h2>
          <Link
            href={"/users/singup"}
            className="opacity-80 rounded-[6.049px] border-[1.695px] border-solid border-white text-white px-20 mt-2 py-2 hover:scale-105 transition-all bg-[#5F5F5F]"
          >
            ثبت نام
          </Link>
        </div>
      </div>
      <div className="bg-white w-[60%] h-full flex flex-col items-center justify-center">
        <h1 className=" text-black text-[24.23px] not-italic font-bold leading-[normal]">
          وارد حساب کاربری خود شوید
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
