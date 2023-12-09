import Image from "next/image";
import React from "react";

const Mark = () => {
  return (
    <div className="w-screen m-auto flex items-center justify-between container  shadow-[0px_4px_10px_0px_rgba(47,178,255,0.15)] rounded-[3.753px] p-10">
      <div className="w-[147.102px] h-[24.767px]">
        <Image src={"/img/logo.png"} width={500} height={500} />
      </div>
      <div className="w-[147.102px] h-[24.767px]">
        <Image src={"/img/logo (1).png"} width={500} height={500} />
      </div>
      <div className="w-[147.102px] h-[24.767px]">
        <Image src={"/img/logo (2).png"} width={500} height={500} />
      </div>
      <div className="w-[147.102px] h-[24.767px]">
        <Image src={"/img/logo (3).png"} width={500} height={500} />
      </div>
      <div className="w-[147.102px] h-[24.767px]">
        <Image src={"/img/logo (4).png"} width={500} height={500} />
      </div>
    </div>
  );
};

export default Mark;
