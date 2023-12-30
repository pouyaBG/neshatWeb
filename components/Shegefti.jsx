import React from "react";
import Swiperpish from "./Swiperpish";

const Shegefti = () => {
  const productsData = [
    {
      id: 1,
      name: "شلوار ورزشی ",
      category: "men",
      type: "pants",
      price: 430_000,
      dis: 490000,
      per: 20,
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
      dis: 2000000,
      per: 60,
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
  return (
    <div className="w-full relative">
      <div className="absolute right-12 w-[103.539px] flex flex-col gap-5 top-14">
        <p className="text-white text-center text-[30.453px] not-italic font-bold leading-[38.827px] tracking-[0.914px]">
          پیشنهاد شـگـفـت انــگـیـــز
        </p>
        <img src="/img/tab.png" alt="" />
      </div>
      <div className="absolute left-16 -top-4">
      <Swiperpish products={productsData.slice(0, 4)} />
      </div>
      <img src="/img/back.png" className="w-full" />
    </div>
  );
};

export default Shegefti;
