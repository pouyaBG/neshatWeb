import Image from "next/image";
import React from "react";

const Article = () => {
  const listComplex = [
    {
      imgOne: "/svg/sport1.png",
      texcBase: "تمرینات استقامتی ",
      discription:
        "استقامت عضلانی توانایی ادامه انقباض عضله یا گروهی از عضلات در برابر مقاومت‌هایی مانند وزنه، کش‌های مقاومتی یا وزن بدن در یک دوره زمانی معین است.",
    },
    {
      imgOne: "/svg/sport2.png",
      texcBase: "ورزش‌های اکستریم",
      discription:
        "ورزش های اکستریم که با عبارات دیگری مثل ورزش های افراطی یا مخاطره آمیز هم شناخته می‌شوند، طرفداران بسیار دارند.",
    },
    {
      imgOne: "/svg/sport3.png",
      texcBase: "تغذیه ورزشی",
      discription:
        "تغذیه ورزشی برای داشتن عملکرد مناسب حین تمرینات بسیار مهم است. باید بدانید قبل و بعد از ورزش در تمرینات مختلف چه تغذیه‌ای مناسب است.",
    },
  ];
  return (
    <div className="w-full mt-10 mb-10 pb-20 " >
      <div className="flex items-center flex-col justify-center gap-3 " data-aos="zoom-out">
        <h1 className="text-black text-[28px] not-italic font-bold leading-[normal]">
          مقالات و مجلات
        </h1>
        <Image src={"/svg/underline.svg"} width={250} height={50} />
      </div>
      <div className="w-full flex justify-between items-center px-10 lg:px-20 py-20 gap-20 cursor-pointer overflow-auto ">
        {listComplex.map((items, id) => (
          <div key={id} className="group lg:hover:scale-105 transition-all shadow-md lg:hover:shadow-xl ">
            <div className="relative">
              <img
                src={items.imgOne}
                className="object-cover  h-[249px] lg:w-[249px] min-w-[294px] lg:min-w-[394px] rounded-t-[10px] "
              />
              <img
                src={"/svg/down.svg"}
                className="object-cover absolute bottom-0 left-0 h-[249px] lg:w-[249px] min-w-[294px] lg:min-w-[394px]"
              />
              <p className="yekanBakh text-white absolute bottom-6 right-7  text-[21px] not-italic font-bold leading-[normal] tracking-[-0.28px] lg:group-hover:text-[#DFD82A] transition-all">
                {items.texcBase}
              </p>
            </div>
            <div className="bg-[#FAFAFA] rounded-b-[10px] p-5 relative max-w-[394px] ">
              <p className="text-[16px] font-[200] yekanBakh">{items.discription}</p>
              <button className="w-full flex justify-end mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <g filter="url(#filter0_d_3013_475)">
                    <circle cx="27.5" cy="27.5" r="21.5" fill="#DFD82A" />
                  </g>
                  <path
                    d="M20.73 27.0529C20.4831 27.2998 20.4831 27.7002 20.73 27.9471L24.7543 31.9714C25.0012 32.2184 25.4016 32.2184 25.6486 31.9714C25.8955 31.7245 25.8955 31.3241 25.6486 31.0771L22.0714 27.5L25.6486 23.9229C25.8955 23.6759 25.8955 23.2755 25.6486 23.0286C25.4016 22.7816 25.0012 22.7816 24.7543 23.0286L20.73 27.0529ZM33.8242 26.8676H21.1772V28.1324H33.8242V26.8676Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_d_3013_475"
                      x="0.941177"
                      y="0.941177"
                      width="55.6471"
                      height="55.6471"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="1.26471" dy="1.26471" />
                      <feGaussianBlur stdDeviation="3.16176" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3013_475"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3013_475"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
              <img
                src="/svg/line2.svg"
                className="absolute bottom-0 w-[200px] left-12 lg:left-24 opacity-0 lg:group-hover:opacity-100 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
