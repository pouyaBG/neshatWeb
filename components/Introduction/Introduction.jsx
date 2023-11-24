import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="w-full relative lg:hidden flex">
        <img
          src="/svg/mobfirst.png"
          className="object-cover w-full min-h-[425px]"
        />
        <img
          src="/svg/shadow.png"
          className="object-contain w-full absolute bottom-0 left-0 "
        />
        <div className="absolute   -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 border-b pb-[45px] ">
          <p
            className="text-white text-center w-full text-[25px]   not-italic font-black leading-[normal] mb-10 md:text-[30px] "
            data-aos="fade-up"
            data-aos-delay="10"
            data-aos-anchor-placement="center-bottom"
          >
            به مجموعه <span className="text-[#DED60E]">نشاط</span> خوش آمدید
          </p>
          <p
            className="text-white text-justify font-thin w-[320.72px] text-[17px] md:w-[380px] md:text-[20px] "
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-anchor-placement="center-bottom"
          >
            ما برای شما یک محیط پویا و پرانرژی فراهم کرده‌ایم که به تمرین و
            تفریح شما نشاط دهیم.
          </p>
          <p
            className=" text-[#DED60E] text-center text-[16px] not-italic font-bold leading-[normal]  mt-6"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            هر روز را به شاهکار خودت تبدیل کن!
          </p>
        </div>
      </div>
      <div className="hidden lg:flex mb-5 w-full styleL h-[558px]  justify-between items-center overflow-hidden relative">
        <div className=" pr-20 flex flex-col gap-5 mb-12 ">
          <p
            className="text-white text-[30px] not-italic font-black leading-[normal] mb-5 "
            data-aos="fade-left"
            data-aos-delay="50"
          >
            به مجموعه <span className="text-[#DED60E]">نشاط</span> خوش آمدید
          </p>
          <p
            className="w-[450px] text-white text-justify text-xl  not-italic font-thin leading-[normal] "
            data-aos="fade-left"
            data-aos-delay="150"
          >
            ما برای شما یک محیط پویا و پرانرژی فراهم کرده‌ایم که به تمرین و
            تفریح شما نشاط دهیم.
          </p>
          <p
            className="w-[446px] text-[#DED60E] text-justify text-[19px] not-italic font-thin leading-[normal] "
            data-aos="fade-left"
            data-aos-delay="250"
          >
            هر روز را به شاهکار خودت تبدیل کن!
          </p>
        </div>
        <Image
          src={"/svg/line.svg"}
          width={300}
          height={100}
          className="absolute  hidden lg:flex bottom-44 right-[24rem]"
        />
        <Image
          src={"/svg/neshat.svg"}
          width={400}
          height={100}
          className="absolute hidden lg:flex right-5 bottom-14"
        />
        <img
          src={"/svg/lineye.svg"}
          className="absolute hidden lg:flex -bottom-4 -right-5 w-[65%] 2xl:w-[62.1%]"
        />
        <div className="" data-aos="zoom-in">
          <Image
            src={"/svg/first.png"}
            width={1500}
            height={300}
            className="object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
