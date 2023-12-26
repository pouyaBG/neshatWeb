import React from "react";
import { useCart } from "@/provider/cart";
import Image from "next/image";
import { useState } from "react";

const Productone = ({ paramss }) => {
  const [tedad, setQuantity] = useState(1);
  const remainingItems = 9;
  const totalItems = 10;
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
      (item) =>
        item.id === product.id &&
        item.size === selectedSize &&
        item.color === selectedColor &&
        item.tedad === tedad
    );

    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart({
        id: product.id,
        quantity: tedad,
        tedad: tedad,
        category: product.category,
        name: product.name,
        price: product.price,
        img: product.img,
        size: selectedSize,
        color: selectedColor,
      });
    }
  };

  const handleQuantityChange = (amount) => {
    // بر اساس مقدار amount، تعداد محصول را افزایش یا کاهش دهید
    const newQuantity = Math.max(1, tedad + amount);
    setQuantity(newQuantity);
  };
  const isInCart = selectedProducts.some((item) => item.id === product.id);
  const handleColorChange = (color) => {
    setSColor(color);
  };
  return (
    <div className="flex  m-auto p-20">
      <div className="h-[583.642px] w-[600px] bg-[#EAEBF0] rounded-[19.222px]">
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
            <p className="my-5">سایز :{selectedSize}</p>
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
          <p className="my-5">رنگ: {selectedColor}</p>
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
          <p className="my-5">تعداد</p>
          <div className="flex items-center gap-5 my-5 ">
            <div className="flex items-center gap-5 border-2 rounded text-[18px] font-medium px-5 py-2">
              <div
                className="cursor-pointer"
                onClick={() => handleQuantityChange(-1)}
              >
                <p>-</p>
              </div>
              <div>
                <p>{tedad}</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleQuantityChange(1)}
              >
                <p>+</p>
              </div>
            </div>
            <button
              onClick={() =>
                handleBuyClick(product.id, product.category, product.type)
              }
              className={`${isInCart ? "" : ""} px-5 py-2 border rounded-[8px]`}
            >
              {isInCart ? "در سبد خرید شماست" : "افزودن به سبد خرید"}
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
              >
                <path
                  d="M9.75 6C9.8875 6 10 5.8875 10 5.75V5.25C10 5.1125 9.8875 5 9.75 5H2.25C2.1125 5 2 5.1125 2 5.25V5.75C2 5.8875 2.1125 6 2.25 6H9.75ZM20.75 12H20V8.62187C20 8.09687 19.7875 7.58125 19.4125 7.20937L16.7906 4.5875C16.4219 4.2125 15.9062 4 15.3781 4H14V2.45625C14 1.65312 13.3063 1 12.4563 1H4.54375C3.69375 1 3 1.65312 3 2.45625V3H1.25C1.1125 3 1 3.1125 1 3.25V3.75C1 3.8875 1.1125 4 1.25 4H8.75C8.8875 4 9 3.8875 9 3.75V3.25C9 3.1125 8.8875 3 8.75 3H4V2.45625C4 2.20312 4.24375 2 4.54375 2H12.4563C12.7563 2 13 2.20312 13 2.45625V12H7.4875C7.03125 11.3969 6.3125 11 5.5 11C4.93438 11 4.41875 11.1937 4 11.5125V9H3V13.5C3 14.8813 4.11875 16 5.5 16C6.88125 16 8 14.8813 8 13.5C8 13.3281 7.98125 13.1625 7.95 13H14.05C14.0156 13.1625 14 13.3281 14 13.5C14 14.8813 15.1187 16 16.5 16C17.8813 16 19 14.8813 19 13.5C19 13.3281 18.9813 13.1625 18.95 13H20.75C20.8875 13 21 12.8875 21 12.75V12.25C21 12.1125 20.8875 12 20.75 12ZM5.5 15C4.67188 15 4 14.3281 4 13.5C4 12.6719 4.67188 12 5.5 12C6.32812 12 7 12.6719 7 13.5C7 14.3281 6.32812 15 5.5 15ZM14 5H15.3781C15.6406 5 15.9 5.10625 16.0844 5.29375L18.7062 7.91563C18.7312 7.94063 18.7406 7.975 18.7625 8.00313H14V5ZM16.5 15C15.6719 15 15 14.3281 15 13.5C15 12.6719 15.6719 12 16.5 12C17.3281 12 18 12.6719 18 13.5C18 14.3281 17.3281 15 16.5 15ZM19 12H18.4875C18.0312 11.3969 17.3125 11 16.5 11C15.6875 11 14.9688 11.3969 14.5125 12H14V9H19V12ZM9 7.75V7.25C9 7.1125 8.8875 7 8.75 7H1.25C1.1125 7 1 7.1125 1 7.25V7.75C1 7.8875 1.1125 8 1.25 8H8.75C8.8875 8 9 7.8875 9 7.75Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.03125"
                />
              </svg>
            </span>
            <span>تحویل تخمینی:</span>
            <span className="font-thin">20 آذر _ 30 آذر </span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.9219 6.76875L15.3406 2.025C15.1375 1.4125 14.5656 1 13.9187 1H4.08125C3.43437 1 2.8625 1.4125 2.65937 2.025L1.07812 6.76875C1.02812 6.92188 1 7.08125 1 7.24375V15.5C1 16.3281 1.67188 17 2.5 17H15.5C16.3281 17 17 16.3281 17 15.5V7.24375C17 7.08125 16.975 6.92188 16.9219 6.76875ZM2 7.24375C2 7.19063 2.00937 7.1375 2.025 7.08437L3.60625 2.34063C3.675 2.1375 3.86562 2 4.08125 2H8.5V7.25H2V7.24375ZM16 15.5C16 15.775 15.775 16 15.5 16H2.5C2.225 16 2 15.775 2 15.5V8.25H16V15.5ZM16 7.25H9.5V2H13.9187C14.1344 2 14.325 2.1375 14.3938 2.34063L15.975 7.08437C15.9906 7.13438 16 7.1875 16 7.24375V7.25Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.03125"
                />
              </svg>
            </span>
            <span>ارسال رایگان و مرجوعی:</span>
            <span className="font-thin">
              در تمام سفارشات بیش از 500 هزار تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productone;
