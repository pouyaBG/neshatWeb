import Part from "@/components/Part";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative mb-10">
        <div className="absolute  -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-50">
          <p className="text-white text-[40px] not-italic font-bold leading-[normal] text-center mb-2">
            گالری مجموعه
          </p>
          <p className=" text-white text-center text-[22px] not-italic font-thin  leading-[50px]">
            گردآوری لحظات بی‌نظیر تیم، تمرینات ایستاده در زمین بازی، و
            جشنواره‌های شگفت‌انگیز در گالری ورزشی ما، جهت به اشتراک گذاری شور و
            انگیزه ورزشی با شما.
          </p>
        </div>
        <img
          src="/img/Rectangle 34624459.png"
          alt=""
          className="w-full absolute left-0 bottom-0 object-cover"
        />
        <img src="/img/Mask group.png" alt="" className="w-full object-cover" />
      </div>
      <Part />
    </div>
  );
};

export default page;
