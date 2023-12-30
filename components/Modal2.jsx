// Modal.js
import React, { useState } from "react";

const Modal2 = ({ isOpen, onClose, title }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block  mt-10 rounded-lg overflow-hidden shadow-xl transform transition-all ">
              <div className="bg-white ">
                <h3 className="text-black text-[18.916px] not-italic font-bold leading-[normal] py-5">
                  فرم درخواست {title}
                  <div className="flex flex-col items-start  w-full p-5">
                    <label htmlFor="name" className="flex flex-col items-start">
                      <p className="py-2 text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal] flex ">
                        نام و نام خوانوادگی
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M5.34349 0.0458984L6.35505 3.59043L9.93048 2.6942L7.36661 5.34251L9.93048 7.99081L6.35505 7.09459L5.34349 10.6391L4.33192 7.09459L0.756486 7.99081L3.32036 5.34251L0.756486 2.6942L4.33192 3.59043L5.34349 0.0458984Z"
                            fill="#FF3B3B"
                          />
                        </svg>
                      </p>
                      <input
                        type="text"
                        className="px-5 py-2 rounded border w-[286.017px]"
                      />
                    </label>
                    <div className="flex items-center gap-5">
                      <label
                        htmlFor="name"
                        className="flex flex-col items-start "
                      >
                        <p className="py-2 text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal]">
                          آدرس ایمیل
                        </p>
                        <input
                          type="text"
                          className="px-5 py-2 rounded border  w-[286.017px]"
                        />
                      </label>
                      <label
                        htmlFor="name"
                        className="flex flex-col items-start"
                      >
                        <p className="py-2 text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal] flex">
                          تلفن تماس
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="11"
                            viewBox="0 0 10 11"
                            fill="none"
                          >
                            <path
                              d="M5.34349 0.0458984L6.35505 3.59043L9.93048 2.6942L7.36661 5.34251L9.93048 7.99081L6.35505 7.09459L5.34349 10.6391L4.33192 7.09459L0.756486 7.99081L3.32036 5.34251L0.756486 2.6942L4.33192 3.59043L5.34349 0.0458984Z"
                              fill="#FF3B3B"
                            />
                          </svg>
                        </p>
                        <input
                          type="text"
                          className="px-5 py-2 rounded border  w-[286.017px]"
                        />
                      </label>
                    </div>

                    <div className="flex items-center gap-5 mt-5 ">
                      <div className="flex flex-col items-start  ">
                        <p className="py-2 text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal] flex">
                          فایل رزومه
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="11"
                            viewBox="0 0 10 11"
                            fill="none"
                          >
                            <path
                              d="M5.34349 0.0458984L6.35505 3.59043L9.93048 2.6942L7.36661 5.34251L9.93048 7.99081L6.35505 7.09459L5.34349 10.6391L4.33192 7.09459L0.756486 7.99081L3.32036 5.34251L0.756486 2.6942L4.33192 3.59043L5.34349 0.0458984Z"
                              fill="#FF3B3B"
                            />
                          </svg>
                        </p>

                        <div className=" p-2 flex items-center gap-2 border w-[286.017px] rounded">
                          <div className="">
                            <p className="text-[#999] text-right text-[12.62px]  not-italic font-thin leading-[normal] ">
                              فایل رزومه باید یکی از فرمت‌های JPG ،DOCX ،DOC
                              ،PDF و یا PNG باشد.
                            </p>
                          </div>

                          <label
                            htmlFor="fileInput"
                            className="flex flex-col w-fit items-center gap-2 border p-3 rounded border-[#FF6363] cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                d="M0.546875 7.89176V6.58719H7.2509V0.100586H8.55547V6.58719H15.1146V7.89176H8.55547V14.3059H7.2509V7.89176H0.546875Z"
                                fill="#FF6363"
                              />
                            </svg>
                            <p className="text-[#FF6363] text-right text-[10.593px] not-italic font-thin leading-[normal]">
                              بارگذاری
                            </p>
                            <input
                              type="file"
                              id="fileInput"
                              className="hidden bg-red-500"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="py-2 text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal] ">
                          عکس شما
                        </p>
                        <div className="border p-2 flex items-center gap-2 w-[286.017px]">
                          <div className="">
                            <p className="text-[#999] text-right text-[13.62px] not-italic font-thin leading-[normal] ">
                              تصویر باید یکی از فرمت‌های JPG ،PNG و یا JPEG
                              باشد.
                            </p>
                          </div>
                          <label
                            htmlFor="fileInput"
                            className="flex flex-col w-fit items-center gap-2 border p-3 rounded border-[#FF6363] cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                            >
                              <path
                                d="M0.546875 7.89176V6.58719H7.2509V0.100586H8.55547V6.58719H15.1146V7.89176H8.55547V14.3059H7.2509V7.89176H0.546875Z"
                                fill="#FF6363"
                              />
                            </svg>
                            <p className="text-[#FF6363] text-right text-[10.593px] not-italic font-thin leading-[normal]">
                              بارگذاری
                            </p>
                            <input
                              type="file"
                              id="fileInput"
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-5">
                      <label
                        htmlFor="myTextArea"
                        className="text-[#7A7A7A] text-[13.62px] not-italic font-thin leading-[normal] mt-5"
                      >
                        توضیحات تکمیلی ( درصورت نیاز)
                      </label>
                      <textarea
                        className=" rounded-[3.783px] border-[0.757px] border-solid border-[rgba(174,174,174,0.50)] outline-none w-full"
                        id="myTextArea"
                        rows={4} // You can adjust the number of rows as needed
                        cols={59}
                        onResize={false} // You can adjust the number of columns as needed
                      />
                    </div>
                  </div>
                </h3>
              </div>
              <div className="bg-white p-5 flex gap-5">
                <button
                  onClick={onClose}
                  type="button"
                  className="w-fit flex justify-center font-thin rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E74B54] text-white"
                >
                  ارسال درخواست
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className="w-fit flex justify-center rounded-md font-thin border border-transparent px-4 py-2 bg-white shadow-md  text-black"
                >
                  لغو
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
