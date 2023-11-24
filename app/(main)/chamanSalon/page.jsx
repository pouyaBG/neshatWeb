"use client";
import Bchaman from "@/components/Bchaman";
import Bsalon from "@/components/Bsalon";
import Comment from "@/components/Comment";
import SwiperSlides from "@/components/SwiperSlide";
import Link from "next/link";
import React, { useState } from "react";


const Chaman = () => {
  const [currentPage, setCurrentPage] = useState("chaman");
  const [commentPage, setCommentPage] = useState("comment");
  return (
    <div className="flex flex-col items-center m-auto w-full justify-center container yekanBakh ">
      <section className="relative w-full">
        <SwiperSlides />
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-10">
        <div className="flex justify-between items-center lg:gap-10 gap-5">
          <button
            onClick={() => setCurrentPage("chaman")}
            className={`transition-all shadow-md lg:px-20 lg:py-3 px-14 py-2 text-black lg:text-2xl text-[20px] not-italic font-thin lg:font-medium leading-6 bg-white rounded-[50px] ${
              currentPage === "chaman" ? "activSub" : ""
            }`}
          >
            چمن
          </button>
          <button
            onClick={() => setCurrentPage("salon")}
            className={` transition-all shadow-md lg:px-20 lg:py-3 px-14 py-2 text-black lg:text-2xl text-[20px] not-italic lg:font-medium font-thin leading-6 bg-white rounded-[50px] ${
              currentPage === "salon" ? "activSub" : ""
            }`}
          >
            سالن
          </button>
        </div>
        <div className=" w-full ">
          {currentPage === "chaman" && (
            <>
              <Bchaman />
            </>
          )}
          {currentPage === "salon" && (
            <>
              <Bsalon />
            </>
          )}
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center mb-20">
        <div className="flex justify-between items-center lg:gap-10 mt-5 lg:mt-0 gap-5 lg:px-36 lg:py-3 py-1 px-10 bg-white mb-32  border shadow-[10px_30px_50px_0px_rgba(0,0,0,0.05),0px_-4px_11px_-4px_rgba(0,0,0,0.12)] rounded-[50px] border-solid border-[#D6D6D6] ">
          <button
            onClick={() => setCommentPage("comment")}
            className={`transition-all py-2  font-thin lg:font-medium text-[13px] lg:text-[16px] ${
              commentPage === "comment" ? "border-b-[3px] border-[#BBB]" : ""
            }`}
          >
            دیدگاه کاربران
          </button>
          <button
            onClick={() => setCommentPage("comment0")}
            className={` transition-all pb-2  font-thin lg:font-medium text-[13px] lg:text-[16px] ${commentPage === "" ? "" : ""}`}
          >
            ثبت دیدگاه
          </button>
          <button
            onClick={() => setCommentPage("comment4")}
            className={` transition-all pb-2  font-thin lg:font-medium text-[13px] lg:text-[16px] ${commentPage === "" ? "" : ""}`}
          >
            شرایط و مقررات
          </button>
        </div>
        <div className="mt-1 w-full ">
          {commentPage === "comment" && (
            <>
              <Comment />
            </>
          )}
          {commentPage === "2" && (
            <>
              <Bsalon />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Chaman;
