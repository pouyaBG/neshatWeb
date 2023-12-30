import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center m-auto w-full justify-center container yekanBakh ">
      <div className="w-full max-h-[200px] min-h-[200px] relative">
        <img src="/svg/map.png" className="object-cover w-full max-h-[200px]" />
        <img
          src="/svg/cover.png"
          className="object-cover w-full max-h-[200px] absolute top-0 left-0"
        />
        <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-center flex flex-col gap-5">
          <p className="text-[#DED60E] lg:text-[30px] text-[15px] not-italic font-bold leading-[normal]">
            با ما در تماس باشید
          </p>
          <p className="text-white text-[13px] whitespace-nowrap text-center lg:text-lg not-italic font-thin  leading-[normal]">
            بی صبرانه منتظر شنیدن نظرها و پیشنهادهای شما هستیم.{" "}
          </p>
        </div>
      </div>
      
      <div className="lg:px-20 p-9 py-5 w-full lg:-mt-10 mb-10 z-10 relative">
        <div className="absolute z-10 -bottom-20 left-[220px] hidden lg:flex">
          <img className="" src="/svg/name.svg" />
        </div>

        <div className="shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] rounded-[10px] bg-[#fff] p-2 flex flex-col-reverse lg:flex-row justify-between items-center gap-5 w-full">
          <div className="bg-[#242424] h-full lg:w-2/2 rounded-[5px] p-10 relative ">
            <div className="text-white  ">
              <h2 className="lg:text-[28px] text-[17px] not-italic font-bold leading-[normal] text-center lg:text-right ">
                اطلاعات تماس
              </h2>
              <p className="text-[#E4E4E4] lg:text-right text-center text-[12px] lg:text-[15px] not-italic mt-2 font-thin leading-[normal] lg:w-[394px] ">
                لطفا درصورت وجود هرگونه سوال یا مشکل با سرویس پشتیبانی نشاط تماس
                بگیرید.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start text-white mt-12 gap-10 font-thin">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full lg:w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.0022 10.999H22.0022C22.0022 5.869 18.1292 2 12.9922 2V4C17.0542 4 20.0022 6.943 20.0022 10.999Z"
                    fill="white"
                  />
                  <path
                    d="M13.0003 7.99999C15.1033 7.99999 16.0003 8.89699 16.0003 11H18.0003C18.0003 7.77499 16.2253 5.99999 13.0003 5.99999V7.99999ZM16.4223 13.443C16.2301 13.2683 15.9776 13.1752 15.7181 13.1832C15.4585 13.1912 15.2123 13.2998 15.0313 13.486L12.6383 15.947C12.0623 15.837 10.9043 15.476 9.71228 14.287C8.52028 13.094 8.15928 11.933 8.05228 11.361L10.5113 8.96699C10.6977 8.78612 10.8064 8.53982 10.8144 8.2802C10.8225 8.02059 10.7292 7.76804 10.5543 7.57599L6.85928 3.51299C6.68432 3.32035 6.44116 3.2035 6.18143 3.18725C5.92171 3.17101 5.66588 3.25665 5.46828 3.42599L3.29828 5.28699C3.12539 5.46051 3.0222 5.69145 3.00828 5.93599C2.99328 6.18599 2.70728 12.108 7.29928 16.702C11.3053 20.707 16.3233 21 17.7053 21C17.9073 21 18.0313 20.994 18.0643 20.992C18.3088 20.9783 18.5396 20.8747 18.7123 20.701L20.5723 18.53C20.7417 18.3325 20.8276 18.0768 20.8115 17.817C20.7954 17.5573 20.6788 17.3141 20.4863 17.139L16.4223 13.443Z"
                    fill="white"
                  />
                </svg>
                <p style={{direction:"ltr"}}>011 - 4789 4789</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full lg:w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="white"
                  />
                </svg>
                <p>info.neshat@gmail.com</p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full lg:w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                    fill="white"
                  />
                </svg>
                <p>مازندران،آمل،دانشگاه شمال</p>
              </div>
            </div>
            <div className="w-full absolute bottom-0 right-0 flex items-start ">
              <svg
                width="188"
                height="210"
                viewBox="0 0 188 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.288394 209.987C0.250521 188.407 5.06145 167.03 14.4465 147.076C23.8316 127.122 37.6069 108.982 54.9861 93.6924C72.3653 78.4025 93.008 66.2619 115.735 57.9637C138.463 49.6655 162.83 45.3722 187.446 45.329L187.734 209.658L0.288394 209.987Z"
                  fill="white"
                  fill-opacity="0.12"
                />
                <circle
                  cx="83"
                  cy="69"
                  r="69"
                  fill="#FFF9F9"
                  fill-opacity="0.13"
                />
              </svg>
            </div>
            <div className="mt-36 flex w-full lg:justify-end justify-center items-center">
              <div className="flex items-center justify-between gap-4">
                <div className="hovers cursor-pointer z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="#DED60E" />
                    <path
                      d="M11.8467 14.8652L18.6016 10.7049C18.723 10.6303 18.8479 10.7945 18.7437 10.8912L13.1689 16.0732C12.973 16.2556 12.8466 16.4997 12.8108 16.7647L12.6209 18.172C12.5957 18.3599 12.3318 18.3785 12.2799 18.1967L11.5496 15.6304C11.4659 15.3377 11.5878 15.025 11.8467 14.8652Z"
                      fill="#DED60E"
                    />
                    <path
                      d="M7.26493 14.2622L10.7212 15.5522L12.059 19.8546C12.1447 20.1301 12.4816 20.232 12.7052 20.0491L14.6318 18.4785C14.8338 18.314 15.1214 18.3058 15.3325 18.459L18.8074 20.9818C19.0466 21.1557 19.3856 21.0246 19.4456 20.7355L21.9912 8.49098C22.0567 8.17518 21.7464 7.91172 21.4457 8.02803L7.26089 13.5C6.91085 13.635 6.9139 14.1306 7.26493 14.2622ZM11.8435 14.8655L18.5983 10.7051C18.7198 10.6306 18.8446 10.7947 18.7404 10.8914L13.1656 16.0735C12.9697 16.2559 12.8433 16.5 12.8075 16.7649L12.6176 18.1722C12.5925 18.3601 12.3285 18.3788 12.2766 18.1969L11.5463 15.6307C11.4626 15.3379 11.5846 15.0253 11.8435 14.8655Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="hovers cursor-pointer z-50">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="#DED60E" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.6179 7C10.4106 7 7 10.4106 7 14.6179C7 16.0574 7.39998 17.4056 8.09512 18.5551L7.41579 20.8647C7.24395 21.449 7.78681 21.9919 8.37103 21.82L10.6807 21.1407C11.8302 21.8359 13.1784 22.2358 14.6179 22.2358C18.8251 22.2358 22.2358 18.8251 22.2358 14.6179C22.2358 10.4106 18.8251 7 14.6179 7ZM12.8949 16.3416C14.4356 17.8823 15.9068 18.0854 16.4263 18.1045C17.2164 18.1336 17.9858 17.5302 18.2857 16.8303C18.3592 16.6589 18.3408 16.4527 18.2177 16.2949C17.8008 15.761 17.2364 15.3784 16.6849 14.9976C16.4467 14.8327 16.119 14.8838 15.9435 15.1173L15.4859 15.8144C15.4351 15.8917 15.3341 15.9183 15.2538 15.8723C14.9442 15.6953 14.4927 15.3934 14.1678 15.0686C13.8434 14.7441 13.5599 14.313 13.4007 14.0233C13.3589 13.9471 13.382 13.8531 13.4518 13.8013L14.1553 13.2788C14.3651 13.0972 14.4019 12.7887 14.2475 12.5628C13.9056 12.0626 13.5074 11.4269 12.9309 11.0065C12.7735 10.8916 12.5743 10.8787 12.4099 10.9492C11.7092 11.2495 11.1028 12.0186 11.1319 12.8101C11.1511 13.3296 11.3542 14.8009 12.8949 16.3416Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:p-20 p-2 flex flex-col justify-start w-full gap-10 font-thin">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full flex flex-col justify-center ">
                <label htmlFor="name">نام</label>
                <input
                  type="text"
                  name="name"
                  className="outline-none border-b-2 border-[#8D8D8D] p-2"
                />
              </div>
              <div className="w-full flex flex-col justify-center ">
                <label htmlFor="name"> نام نام خانودادگی</label>
                <input
                  type="text"
                  name="name"
                  className="outline-none border-b-2 border-[#8D8D8D] p-2"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full flex flex-col justify-center">
                <label htmlFor="name">ایمیل</label>
                <input
                  type="text"
                  name="name"
                  className="outline-none border-b-2 border-[#8D8D8D] p-2"
                />
              </div>
              <div className="w-full flex flex-col justify-center ">
                <label htmlFor="name">
                  شماره همراه <span>(اختیاری)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="outline-none border-b-2 border-[#8D8D8D] p-2 "
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center ">
              <label htmlFor="name">ارسال پیام</label>
              <input
                type="text"
                name="name"
                className="outline-none border-b-2 border-[#8D8D8D] p-2 placeholder:text-[14px]"
                placeholder="نظرها  و پیشنهاد های خود را اینجا وارد کنید!"
              />
            </div>
            <div className="w-full flex justify-end items-center">
              <button className="bg-[#59AC49] hover:shadow-lg text-white transition-all w-fit px-10 py-2 lg:px-20 lg:py-2 lg:text-[20px] lg:font-medium rounded-[5px] mt-5">
                ثبت نام
              </button>
            </div>
            <div className="w-full relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
