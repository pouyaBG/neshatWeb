"use client";
import Introduction from "@/components/Introduction/Introduction";
import Article from "@/components/arti/Article";
import Complex from "@/components/complex/complex";
import MySlider from "@/components/slider/Slider";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <main className="flex flex-col items-center m-auto w-full justify-center container">
      <Introduction />
      <Complex />
      <div className="flex items-center flex-col justify-center gap-3 mb-20 " data-aos="zoom-out">
        <h1 className="text-black text-[28px] not-italic font-bold leading-[normal]">
          دانستنی ها و اخبار
        </h1>
        <Image src={"/svg/underline.svg"} width={250} height={50} />
      </div>
      <div className="w-full mb-10 relative ">
        <img
          src="/svg/base.png"
          className="absolute top-0 -mt-[100px] hidden lg:flex"
        />
        <img src="/svg/mob.png" className="absolute top-0  lg:hidden flex" />
        <MySlider />
      </div>
      <Article />
    </main>
  );
}
