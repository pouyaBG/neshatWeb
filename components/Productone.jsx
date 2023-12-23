import React from "react";
import { useCart } from "@/provider/cart";
import Image from "next/image";
import { useState } from "react";

const Productone = ({ paramss }) => {
  const remainingItems = 2;
  const totalItems = 20;
  const percentage = 100 - (remainingItems / totalItems) * 100;
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
  const product = productsData.find((p) => p.id.toString() === paramss.subpage);

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
              className={`${isInCart ? "" : ""} px-5 py-2 border rounded-[8px]`}
            >
              {isInCart ? "در سبد خرید شماست" : "افزودن به سبد خرید"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productone;
