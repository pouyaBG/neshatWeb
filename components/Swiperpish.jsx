// Swiperpish.js
import Link from "next/link";
import React from "react";
import "swiper/swiper-bundle.css";

const Swiperpish = ({ products }) => {
  return (
    <>
      <div className="flex container m-auto gap-20 items-center justify-center my-10">
        {products.map((product) => (
          <Link href={product.link} key={product.id} className="bg-white p-2 rounded-lg">
            <div className="relative">
              {product.per ? (
                <>
                  <div className="absolute left-3 text-[12px] top-2 rounded-full px-2 py-2 shadow-sm border border-red-800  bg-red-600 text-white">
                    {product.per}%
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="w-[190px] h-[200.744px]">
                <img src={product.img} alt={`Product ${product.id}`} />
              </div>
            </div>
            <div className="flex justify-between items-center mb-2 mt-9">
              <h3 className="text-[15px] font-semibold  ">{product.name}</h3>
              <div className="flex items-center justify-between gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3732_2066)">
                    <path
                      d="M14.775 17.1945L9.3082 13.1766L3.84141 17.1945L5.94042 10.7057L0.476562 6.71344H7.22237L9.3082 0.213623L11.394 6.71344H18.1391L12.676 10.7057L14.775 17.1945Z"
                      fill="#F5D426"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3732_2066">
                      <rect
                        width="17.571"
                        height="17.571"
                        fill="white"
                        transform="translate(0.523438 0.125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-black">4.2</h2>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-gray-700">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  تومان
                </p>
                <p className="text-red-500 line-through">
                  {product.dis ? <>{product.dis} تومان</> : ""}
                </p>
              </div>
              <button
                className={`bg-[#3DAC6A] text-white px-4 font-thin py-1 mt-2 rounded-md `}
              >
                خرید
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Swiperpish;
