"use client";

import { useCart } from "@/provider/cart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = ({ params }) => {
  const remainingItems = 2;
  const totalItems = 20;
  const percentage = 100 - (remainingItems / totalItems) * 100;
  console.log(percentage);
  const productsData = [
    {
      id: 1,
      name: "شلوار ورزشی ",
      category: "men",
      type: "pants",
      price: 430_000,
      img: "/img/pr1.png",
      link: "products/1",
    },
    {
      id: 2,
      name: "تی شرت ورزشی",
      category: "women",
      type: "shirts",
      price: 530_000,
      img: "/img/shop3.png",
      link: "products/2",
    },
    {
      id: 3,
      name: "شلوار ورزشی",
      category: "men",
      type: "pants",
      price: 1000_000,
      img: "/img/pr1.png",
      link: "/products/3",
    },
    {
      id: 4,
      name: "تی شرت ورزشی",
      category: "women",
      type: "shirts",
      price: 930_000,
      img: "/img/pr1.png",
      link: "products/4",
    },
    {
      id: 5,
      name: "شلوار ورزشی",
      category: "men",
      type: "pants",
      price: 230_000,
      img: "/img/pr1.png",
      link: "products/5",
    },
  ];
  const product = productsData.find((p) => p.id.toString() === params.subpage);

  const [selectedSize, setSize] = useState("M");
  const [selectedColor, setSColor] = useState("سیاه");
  const handleSizeChange = (size) => {
    setSize(size);
  };
  const { addToCart, removeFromCart, selectedProducts } = useCart();
  const handleBuyClick = () => {
    const isProductInCart = selectedProducts.some(
      (item) => item.id === product.id
    );

    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart({
        id: product.id,
        quantity: 1,
        category: product.category,
        name: product.name,
        price: product.price,
        img: product.img,
        size: selectedSize,
        color: selectedColor,
      });
    }
  };
  const isInCart = selectedProducts.some((item) => item.id === product.id);
  const handleColorChange = (color) => {
    setSColor(color);
  };
  return (
    <div>
      <div className="search-box w-full flex items-center justify-center border-b-2 p-5 mb-10">
        <input
          type="text"
          placeholder="جستوجو کنید..."
          className="px-5 py-2 rounded-[10px] w-[379px] outline-none border-[#7C7B7B] border "
        />
        <button className="mr-2 border p-2 rounded-md border-black">
          <img src="/svg/search.svg" alt="Search" />
        </button>
        <Link href={"/Cart"}>
          <div className="flex items-start mr-5">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
            >
              <path
                d="M14.5026 5.29171C14.5026 2.4198 12.1661 0.083374 9.29427 0.083374C6.42236 0.083374 4.08594 2.4198 4.08594 5.29171H0.179688V17.6615C0.179688 19.4593 1.63708 20.9167 3.4349 20.9167H15.1536C16.9515 20.9167 18.4089 19.4593 18.4089 17.6615V5.29171H14.5026ZM9.29427 2.0365C11.0892 2.0365 12.5495 3.49679 12.5495 5.29171H6.03906C6.03906 3.49679 7.49935 2.0365 9.29427 2.0365ZM16.4557 17.6615C16.4557 18.3795 15.8716 18.9636 15.1536 18.9636H3.4349C2.71692 18.9636 2.13281 18.3795 2.13281 17.6615V7.24483H4.08594V8.87244C4.08594 9.41178 4.52315 9.849 5.0625 9.849C5.60185 9.849 6.03906 9.41178 6.03906 8.87244V7.24483H12.5495V8.87244C12.5495 9.41178 12.9867 9.849 13.526 9.849C14.0654 9.849 14.5026 9.41178 14.5026 8.87244V7.24483H16.4557V17.6615Z"
                fill="#484848"
                stroke="#484848"
                stroke-width="0.0406901"
              />
            </svg>
            <span className="bg-[#FF0606] px-2 text-white rounded-full">
              {selectedProducts.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="flex  m-auto p-20">
        <div className="h-[583.642px] bg-[#EAEBF0] rounded-[19.222px]">
          <div className="h-full rounded-[19.222px]">
            <Image
              src={product.img}
              width={500}
              height={500}
              className="h-full"
            />
          </div>
        </div>
        <div className="px-10 w-full pt-2">
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-black text-right text-3xl not-italic font-medium leading-[42px]">
                {product.name}
              </p>
              <div className="w-[44px] h-[44px]">
                <Image
                  src={"/img/stra.png"}
                  width={500}
                  height={500}
                  className="w-[44px] h-[44px]"
                />
              </div>
            </div>
            <div className="w-[75px] my-5">
              <Image
                src={"/img/rate.png"}
                width={500}
                height={500}
                className="w-[75px] "
              />
            </div>
            <div>
              <p>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </p>
            </div>
            <div className="my-2">
              <p>فقط {remainingItems} مورد در انبار باقی مانده است!</p>
            </div>
            <div className="bg-gray-200">
              <div
                className="w-full h-2 my-3 rounded bg-red-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="my-3">
              <p className="mb-2">سایز :{selectedSize}</p>
              <div className="flex gap-5">
                <div
                  className={`pl-[17.56px] cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded ${
                    selectedSize === "S" ? "bg-[#000] text-white" : " "
                  }`}
                  onClick={() => handleSizeChange("S")}
                >
                  S
                </div>
                <div
                  className={`pl-[17.56px] cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded  ${
                    selectedSize === "M" ? "bg-[#000] text-white" : ""
                  }`}
                  onClick={() => handleSizeChange("M")}
                >
                  M
                </div>
                <div
                  className={`pl-[17.56px] cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded  ${
                    selectedSize === "L" ? "bg-[#000] text-white" : ""
                  }`}
                  onClick={() => handleSizeChange("L")}
                >
                  L
                </div>
                <div
                  className={`pl-[17.56px] cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded  ${
                    selectedSize === "XL" ? "bg-[#000] text-white" : ""
                  }`}
                  onClick={() => handleSizeChange("XL")}
                >
                  XL
                </div>
              </div>
            </div>
            <p className="my-3">رنگ: {selectedColor}</p>
            <div className="flex gap-5">
              <div
                className={`pl-[17.56px] w-[40px] h-[40px] bg-[#8DB4D2] cursor-pointer pr-[18.44px] py-[9px] border border-black   rounded-full ${
                  selectedColor === "B" ? " border-2 border-white" : " "
                }`}
                onClick={() => handleColorChange("آبی")}
              ></div>
              <div
                className={`pl-[17.56px] w-[40px] h-[40px] bg-[#000] cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded-full  ${
                  selectedColor === "W" ? " border-2 border-white" : ""
                }`}
                onClick={() => handleColorChange("مشکی")}
              ></div>
              <div
                className={`pl-[17.56px] w-[40px] h-[40px] bg-[#FFD1DC]  cursor-pointer pr-[18.44px] py-[9px] border border-black  rounded-full  ${
                  selectedColor === "BL" ? " border-2 border-white" : ""
                }`}
                onClick={() => handleColorChange("صورتی")}
              ></div>
            </div>
            <p className="my-3">تعداد</p>
            <div>
              <button
                onClick={() =>
                  handleBuyClick(product.id, product.category, product.type)
                }
                className={`${
                  isInCart ? "" : ""
                } px-5 py-2 border rounded-[8px]`}
              >
                {isInCart ? "در سبد خرید شماست" : "افزودن به سبد خرید"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
