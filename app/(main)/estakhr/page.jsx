"use client";
import Bchaman from "@/components/Bchaman";
import Bsalon from "@/components/Bsalon";
import Comment from "@/components/Comment";
import SwiperSlidesTwo from "@/components/SwiperSlidesTwo";
import TableEstakhr from "@/components/TableEstakhr";
import React, { useState } from "react";

const Estakhr = () => {
  const [commentPage, setCommentPage] = useState("comment");
  return (
    <div className="flex flex-col items-center m-auto w-full justify-center container yekanBakh ">
      <section className="relative w-full">
        <SwiperSlidesTwo />
      </section>
      <TableEstakhr />
      <section className="my-5 bg-white w-[79%] rounded-[15px]">
        <div className="p-5">
          <h1>
            <li className="text-black text-xl not-italic font-medium leading-[normal]">شرایط و مقررات استفاده از سالن استخر</li>
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