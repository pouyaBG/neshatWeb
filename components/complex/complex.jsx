import Image from "next/image";
import Link from "next/link";
import React from "react";

const Complex = () => {
  const listComplex = [
    {
      imgOne: "/svg/jym.png",
      texcBase: "سالن بدنسازی",
      textHover: "مجرب ترین مربی ها",
      number: "1",
      link: "/",
    },
    {
      imgOne: "/svg/sw.png",
      texcBase: "سالن استخر و ماساژ",
      textHover: "بالاترین میزان بهداشت",
      number: "2",
      link: "/estakhr",
    },
    {
      imgOne: "/svg/ball.png",
      texcBase: "چمن مصنوعی ورزشی",
      textHover: "فضای باز",
      number: "3",
      link: "/chamanSalon",
    },
    {
      imgOne: "/svg/game.png",
      texcBase: "گیم سنتر",
      textHover: "آخرین نسخه از بازی ها",
      number: "4",
      link: "/",
    },
  ];
  return (
    <div className="w-full mt-10 mb-10 ">
      <div
        className="flex items-center flex-col justify-center gap-3 "
        data-aos="zoom-out"
      >
        <h1 className="text-black text-[28px] not-italic font-bold leading-[normal]">
          مجموعه ها
        </h1>
        <Image src={"/svg/underline.svg"} width={250} height={50} />
      </div>
      <div className="w-full flex justify-between items-center gap-10 lg:gap-20 py-20 px-10 cursor-pointer overflow-auto ">
        {listComplex.map((items, id) => (
          <Link
            href={items.link}
            key={id}
            className="relative rounded-[15px] lg:hover:scale-105 transition-all group lg:shadow-xl shadow-sm  shadow-slate-500 hover:shadow-xl "
          >
            <img
              src={items.imgOne}
              className="object-cover h-[354px] lg:w-[273px] min-w-[250px] rounded-[10px]"
            />
            <img
              src={"/svg/on.png"}
              className="absolute top-0 left-0 object-cover h-[354px] w-[273px] rounded-[10px]"
            />
            <div className="absolute bottom-3 lg:group-hover:bottom-10 right-5 transition-all ">
              <p className=" yekanBakh   text-white  bg-opacity-50 rounded-[10px] p-2">
                {items.texcBase}
              </p>
            </div>
            <div className="absolute bottom-0  opacity-0 group-hover:bottom-3 right-5 lg:group-hover:opacity-100 transition-all font-thin ">
              <p className=" yekanBakh  text-[#DED60E]  bg-opacity-50 rounded-[10px] p-2">
                {items.textHover}
              </p>
            </div>
            <div className="absolute left-2 bottom-10 flex items-center justify-center lg:group-hover:bottom-20 transition-all ">
              <svg
                width="62"
                height="3"
                viewBox="0 0 42 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="42" height="2" rx="1" fill="#DED60E" />
              </svg>
              <p className="   text-white  text-[25px]  p-2 group-hover:text-[#DED60E]">
                {items.number}
              </p>
            </div>
            <div className="absolute bottom-0  lg:left-[23%] left-[14%] opacity-0 lg:group-hover:opacity-100 transition-all ">
              <svg
                width="150"
                height="4"
                viewBox="0 0 138 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H134C136.209 0 138 1.79086 138 4H0Z"
                  fill="#DED60E"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Complex;
