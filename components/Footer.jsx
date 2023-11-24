import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "صفحات",
      links: [
        { title: "صفحه اصلی", url: "/" },
        { title: "فروشگاه", url: "/" },
        { title: "تماس با ما", url: "/" },
        { title: "پرسش های متداول", url: "/" },
        { title: "شرایط و مقررات", url: "/" },
      ],
    },
    {
      title: "خدمات مشتریان",
      links: [
        { title: "رزرو بلیت", url: "/" },
        { title: "رزرو وقت ماساژ", url: "/" },
        { title: "لغو رزرو", url: "/" },
        { title: "پشتیبانی آنلاین", url: "/" },
      ],
    },
  ];

  return (
    <>
      <div className="-ml-1 relative w-full container">
        <div className="absolute  -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[90%] lg:w-max flex  items-start lg:gap-20 ">
          <div className="flex flex-col items-center justify-center">
            <img src={"/svg/dast.svg"} alt="" className="" />
            <p className="text-white mt-[2px] text-[11px] lg:text-[16px] whitespace-nowrap">
              دسترسی آسان
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={"/svg/amniyat.svg"} alt="" />
            <p className="text-white mt-[2px]  text-[11px] lg:text-[16px] whitespace-nowrap">
              امنیت بالا
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={"/svg/taj.svg"} alt="" />
            <p className="text-white text-[11px] -mr-2 -mt-[7px] lg:text-[16px]  whitespace-nowrap">
              تجهیزات مدرن
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={"/svg/dastresi.svg"} alt="" />
            <p className="text-white text-[11px] -mt-[0.5px] lg:text-[16px]  whitespace-nowrap">
              اطلاع رسانی سریع
            </p>
          </div>
        </div>
        <img
          src={"/img/emkanat.png"}
          className="w-full h-[160px] lg:h-min"
          alt=""
        />
      </div>
      <footer className="  mt-5 lg:p-20 p-5 container">
        <div className="flex flex-col md:flex-row w-full p-2 items-center justify-between gap-36  ">
          <div className="flex flex-col p-5 gap-10 justify-center items-start">
            <div className="flex-1 w-full  flex md:justify-start flex-wrap max-md:mt-10 gap-[70px] mb-2 ">
              {footerLinks.map((links, id) => (
                <div key={id} className="flex flex-col gap-5 text-base ">
                  <h3 className="font-bold gap-5">{links.title}</h3>
                  {links.links.map((item, id) => (
                    <Link
                      href={item.url}
                      key={id}
                      className="text-gray-500 font-thin"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex-col items-center flex-wrap px-2 mr-10 text-black  ">
                <p className="font-[700] mb-3">ارتباط با نشاط</p>
                <div className="flex items-center gap-4 py-3">
                  <img src="/svg/phone.svg" alt="dd" />
                  <p className="text-[14px] not-italic font-thin leading-[normal]">
                    <a href="tel:+981144471856">021-4789-4789</a>
                  </p>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <img src="/svg/email.svg" alt="dd" />
                  <p className="text-[14px] not-italic font-thin leading-[normal]">
                    <a href="mailto:info.tiget@gmail.com" className="font-body">
                      info.neshat@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <img src="/svg/location.svg" alt="dd" />
                  <p className="text-[14px] not-italic font-thin leading-[normal]">
                    <a className="font-body">مازندران،آمل،دانشگاه شمال</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-20 justify-center -order-1 md:order-1 lg:mb-1 -mb-40 ">
            <div className="flex items-start flex-col gap-3">
              <div className="w-full lg:w-min flex -mr-10 lg:mr-0 items-center justify-center">
                <Link href={"/"} className="flex gap-5 mb-10  md:mr-0">
                  <Image
                    src="/svg/logoDark.svg"
                    priority
                    width={80}
                    height={18}
                    className="object-contain absolute"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex w-full  items-center md:items-start flex-col  text-black">
                <p className="mt-4 text-center md:text-right px-5 md:px-0 whitespace-nowrap  text-[#2D2D2D]  not-italic font-thin leading-[normal] text-[13px] lg:text-[16px] ">
                  برای اطلاع از تخفیف های ویژه و آخرین رویداد ها در نشاط عضو
                  شوید.
                </p>
                <div className="flex w-fit lg:w-full mt-3 relative">
                  <button
                    type="button"
                    className="absolute bg-[#DFD82A] w-[25%] whitespace-nowrap p-3 mt-1 mr-1 shadow-[-3px_12px_36px_5px_rgba(0,0,0,0.22)] rounded-[50px] bg-Primary_Color text-black  "
                  >
                    ثبت نام
                  </button>
                  <input
                    className="bg-[#454545] rounded-[50px] placeholder:font-thin w-full p-4 whitespace-nowrap pr-28 lg:pr-32 outline-none text-white "
                    placeholder="ایمیل خود را وارد کنید..."
                  />
                </div>
              </div>
              <p className="font-thin text-gray-700 text-[16px] mt-5 w-full text-center lg:text-right">
                نشاط را در شبکه‌های اجتماعی دنبال کنید:
              </p>
              <div className="flex gap-5 items-center justify-center w-full lg:justify-start">
                <Link href={"/"}>
                  <Image
                    src="/svg/tw.svg"
                    priority
                    width={35}
                    height={35}
                    alt="s"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/svg/telegram.svg"
                    priority
                    width={35}
                    height={35}
                    alt="s"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/svg/phone2.svg"
                    priority
                    width={35}
                    height={35}
                    alt="s"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center   lg:gap-[400px] border-t-2 ">
          <div className="mb-5">
            <div className="w-full flex items-center justify-center py-5">
              <p className="text-black font-bold mb-3   border-black pb-2  border-b-2 w-fit">
                مجوز ها
              </p>
            </div>
            <div className="flex justify-center items-center w-full gap-5 lg:gap-3">
              <div className="w-[70px] md:w-[100px] ">
                <Image
                  alt="#"
                  src={"/img/enamad.png"}
                  width={90}
                  height={140}
                  priority
                />
              </div>
              <div className="w-[60px] md:w-[90px]">
                <Image
                  alt="#"
                  src={"/img/enamad2.png"}
                  width={70}
                  height={140}
                  priority
                />
              </div>
              <Link href={"https://behdasht.gov.ir/"} target="_blank" className="w-[60px] md:w-[100px]">
                <Image
                  alt="#"
                  src={"/svg/beh.svg"}
                  width={65}
                  height={140}
                  priority
                />
              </Link>
              <Link href={"https://irsf.ir/"} target="_blank" className="w-[70px] md:w-[100px] -mr-5 mt-2">
                <Image
                  alt="#"
                  src={"/svg/fed.svg"}
                  width={90}
                  height={140}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="mb-5">
            <div className="w-full flex items-center justify-center py-5">
              <p className="text-black font-bold mb-3 ml-10  border-b-2 border-black pb-2 w-fit ">
                اسپانسر
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-0 w-full ">
              <div className="w-[70px] md:w-[90px]">
                <Image
                  alt="#"
                  src={"/svg/es1.png"}
                  width={69}
                  height={140}
                  priority
                />
              </div>
              <div className="w-[60px] md:w-[90px]">
                <Image
                  alt="#"
                  src={"/svg/es2.png"}
                  width={70}
                  height={140}
                  priority
                />
              </div>
              <div className="w-[60px] md:w-[100px]">
                <Image
                  alt="#"
                  src={"/svg/es3.png"}
                  width={68}
                  height={140}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center  items-center mb-2  lg:-mb-10 sm:px-48   border-t border-gray-300 ">
          <p className="text-[color:var(--Text-Color,#7D7D87)] text-[11px] not-italic font-light leading-[normal] mt-5">
            © کلیه حقوق این سایت محفوظ و متعلق به پلتفرم رزرو آنلاین نشاط است.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
