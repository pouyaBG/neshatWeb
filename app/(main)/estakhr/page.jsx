"use client";
import Bsalon from "@/components/Bsalon";
import Comment from "@/components/Comment";
import SwiperSlidesTwo from "@/components/SwiperSlidesTwo";
import TabelEstakhrW from "@/components/TabelEstakhrW";
import TableEstakhr from "@/components/TableEstakhr";
import React, { useState } from "react";

const Estakhr = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const accordionItems = [
    { title: "سانس آقایان", svg: "/svg/man.svg", color: "00A1FF", bool: true },
    {
      title: "سانس بانوان",
      svg: "/svg/woman.svg",
      color: "FF089A",
      bool: false,
    },
  ];
  const listMorabi = [
    { svg: "/svg/mor1.png", name: "آرش ساغری", work: "ماساژور" },
    { svg: "/svg/mor2.png", name: "شایان نجفی", work: "مربی شنا" },
    { svg: "/svg/mor3.png", name: "سحر حسینی", work: "ماساژور" },
    { svg: "/svg/mor4.png", name: "مهسا اسماعیلی", work: "مربی شنا" },
  ];
  const [commentPage, setCommentPage] = useState("comment");
  return (
    <div className="flex flex-col items-center m-auto w-full justify-center container yekanBakh ">
      <section className="relative w-full">
        <SwiperSlidesTwo />
      </section>
      <div className="mt-6">
        <p className="text-[#1D1D1D] text-[28px] not-italic font-bold leading-[normal]">
          رزرو بلیط استخر و ماساژ
        </p>
      </div>
      <div className="w-[88%] mx-auto mt-10 transition-all">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden mb-2 w-[90%] m-auto transition-all"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full p-4 flex justify-between items-center focus:outline-none bg-white border-[1px solid rgba(0, 0, 0, 0.30);

              ] relative"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`bg-[#${item.color}] rounded-[10px] flex justify-center items-center py-2`}
                >
                  <img src={item.svg} className="" />
                </div>
                {item.title}
              </div>
              <span className="bg-[#F0F0F0] rounded-[15px] py-3 px-3">
                <svg
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M20 10.1892L11.5845 1.7739C11.1563 1.34573 10.4627 1.34365 10.032 1.76924L1.51 10.1892"
                    stroke="#202020"
                    stroke-width="2.59872"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </button>
            {/* Content (Initially Hidden) */}
            {openIndex === index && (
              <div className="p-4 bg-white border-t w-full">
                {item.bool ? <TableEstakhr /> : <TabelEstakhrW />}
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="my-5 bg-white w-[79%] rounded-[15px]">
        <div className="p-5">
          <h1>
            <li className="text-black text-[18px] mb-5 not-italic font-medium leading-[normal]">
              شرایط و مقررات استفاده از سالن استخر
            </li>
            <p className="text-black text-base not-italic font-thin my-1 leading-[normal]">
              1. استفاده از استخر برای شنا و سرگرمی تنها مجاز است و استفاده از
              آن به عنوان محل شستشو یا شست و شوی لباس ممنوع است.
            </p>
            <p className="text-black text-base not-italic font-thin my-1 leading-[normal]">
              2. استفاده از استخر تنها با لباس شنا مجاز است و استفاده از لباس
              های خارجی یا پوشاک درونی ممنوع است.
            </p>
            <p className="text-black text-base not-italic font-thin my-1 leading-[normal]">
              3. کودکان باید تحت نظارت والدین یا نگهبان ها باشند و هیچ کودکی
              بدون نظارت در استخر قرار نگیرد.
            </p>
            <p className="text-black text-base not-italic font-thin my-1 leading-[normal]">
              4. حفظ نظافت و بهداشت استخر از مسئولیت هر فردی است که از آن
              استفاده می کند و هر گونه آلودگی یا آسیب به استخر باید جبران شود.
            </p>
            <p className="text-black text-base not-italic font-thin my-1 leading-[normal]">
              5. هرگونه خطرات یا حوادث در استخر باید به نگهبان یا مسئولین مربوطه
              گزارش شود.
            </p>
          </h1>
        </div>
      </section>
      <div className="mb-20">
        <div className="w-full m-auto flex items-center justify-center">
          <p className="border-b border-black py-5 w-fit my-5 text-center">
            مربیان
          </p>
        </div>
        <div className="w-full flex items-center justify-between gap-5">
          {listMorabi.map((item, id) => (
            <div
              key={id}
              className="border border-black rounded-[14.484px] flex overflow-hidden relative group cursor-pointer"
            >
              <img
                src={item.svg}
                className="w-1/2 group-hover:w-full transition-all"
              />
              <img
                src="/svg/cover4.png"
                className=" transition-all absolute -z-10 group-hover:z-0 left-0 bottom-0 "
              />
              <div className="absolute left-2 top-28 group-hover:hidden">
                <p className="text-[#FFF] text-[20px]">{item.name}</p>
              </div>
              <div className="absolute left-10 bottom-10 opacity-0 group-hover:opacity-100">
                <p className="text-[#DED60E] text-[25px] ">{item.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
            className={` transition-all pb-2  font-thin lg:font-medium text-[13px] lg:text-[16px] ${
              commentPage === "" ? "" : ""
            }`}
          >
            ثبت دیدگاه
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

export default Estakhr;
