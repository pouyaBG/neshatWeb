"use client";
import React, { useState } from "react";
import PageOneContent from "./PageOneContent";
import PageTwoContent from "./PageTwoContent";
import PageThreeContent from "./PageThreeContent";
import PageFourContent from "./PageFourContent";


const Content = ({ activeButton }) => {
  const contentMap = {
    1: <PageOneContent />,
    2: <PageTwoContent />,
    3: <PageThreeContent />,
    4: <PageFourContent />,
  };

  return <div>{contentMap[activeButton]}</div>;
};
const Part = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (pageNumber) => {
    setActiveButton(pageNumber);
  };

  const buttonNames = [
    "فعالیت های تیمی",
    "تمرینات",
    "تجهیزات و وسایل ورزشی",
    "رویداد های ویژه",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-20  ">
      <div className="flex gap-10 items-center mb-5">
        {[1, 2, 3, 4].map((pageNumber) => (
          <button
            key={pageNumber}
            className={`text-black text-center text-lg not-italic font-thin  leading-[normal] px-5 py-3  rounded-[130px] transition-all ${
              activeButton === pageNumber
                ? "bg-[#118AFF] text-white"
                : "bg-[#EEE]"
            }`}
            onClick={() => handleButtonClick(pageNumber)}
          >
            {buttonNames[pageNumber - 1]}
          </button>
        ))}
      </div>
      <Content activeButton={activeButton} />
    </div>
  );
};

export default Part;
