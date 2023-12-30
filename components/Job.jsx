"use client";
import React, { useState } from "react";
import Sinior from "./Sinior";
import Joineor from "./Joineor";

const Job = () => {
  const [commentPage, setCommentPage] = useState("mot");

  return (
    <>
      <div className="bg-[#ECECEC] w-full items-center shadow-lg flex m-auto justify-center gap-32  p-10 rounded-[60px]">
        <div className="flex flex-col gap-7 ">
          <p className="text-black text-[30px] not-italic font-normal leading-[normal] Homa">
            اشتیاق خود را به <span className="text-[#F40B0B] Homa">شغل</span> خود
            تبدیل کنید!
          </p>
          <p className="text-[#444] text-justify text-[17px] not-italic font-thin leading-[30px] w-[596px] ">
            ما در نشاط به دنبال افراد پرانرژی و متعهد در حوزه ورزشی هستیم. اگر
            عاشق چالش‌های ورزشی و مایل به همکاری در یک محیط پویا هستید، ما منتظر
            استعداد شما هستیم.
          </p>
          <div className="flex items-center  gap-5 p-2 ">
            <button
              onClick={() => setCommentPage("mot")}
              className={`transition-all  text-black rounded-[10px] px-3 py-2 font-thin  ${
                commentPage === "mot" ? " text-white bg-[#2EB2FF]" : "bg-white"
              }`}
            >
              نیروی متخصص
            </button>
            <button
              onClick={() => setCommentPage("khad")}
              className={` transition-all  text-black rounded-[10px] px-3 py-2 font-thin  ${
                commentPage === "khad" ? " text-white bg-[#2EB2FF]" : "bg-white"
              }`}
            >
              نیروی خدماتی
            </button>
            <button
              className={` transition-all bg-white text-red-400 rounded-[10px] px-3 py-2 font-thin  `}
            >
              جستجو در فرصت های شغلی
            </button>
          </div>
        </div>
        <div className="relative">
          <div>
            <img
              src="/img/mna.png"
              alt=""
              className="absolute h-[430.935px] w-[808px] -top-[80px] object-cover"
            />
          </div>
          <img src="/img/innn.png" alt="" />
        </div>
      </div>
      <div className="mt-32 w-full ">
        {commentPage === "mot" && (
          <>
            <Sinior />
          </>
        )}
        {commentPage === "khad" && <Joineor />}
      </div>
    </>
  );
};

export default Job;
