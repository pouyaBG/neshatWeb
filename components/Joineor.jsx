import React, { useState } from "react";
import Modal2 from "./Modal2";

const Joineor = () => {
  const dataList = [
    {
      title: "نظافت و خدمات بهداشتی",
      item1: "تمیزکاری و نظافت اماکن و تجهیزات ورزشی",
      item2: "فراهم کردن امکانات بهداشتی و بهداشتی",
    },
    {
      title: "پذیرش و اداری",
      item1: "استقبال و راهنمایی بازدیدکنندگان و اعضای مجموعه",
      item2: "مدیریت اسناد و فعالیت‌های اداری مرتبط با مجموعه ورزشی",
    },
    {
      title: "نگهداری فضاهای سبز",
      item1: "نگهداری و بهبود فضاهای سبز و فضای باز مرتبط با مجموعه",
      item2: "طراحی و مراقبت از باغ‌ها و مناطق سبز",
    },
    {
      title: "امور فنی و تعمیرات",
      item1:
        "تعمیرات ساده و نگهداری از تجهیزات فنی مانند آسانسورها و سیستم‌های گرمایشی و سرمایشی.",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="grid grid-cols-2 gap-x-14 gap-y-8">
      {dataList.map((item, id) => (
        <div
          key={id}
          onClick={() => openModal(item.title, item.item1)}
          className="border cursor-pointer rounded-[10px] hover:shadow-xl transition-all hover:scale-105 bg-white shadow-md p-5 border-solid border-[rgba(0,0,0,0.20)] flex flex-col items-start gap-2"
        >
          <div className="flex items-center gap-5">
            <p>{item.title}</p>
            {item.is ? (
              <>
                <div className="bg-[#E2E2E2] flex items-center gap-2 p-2 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z"
                      fill="#292929"
                    />
                  </svg>
                  <p className="text-[#353535] text-base not-italic font-thin leading-[normal]">
                    {item.is}
                  </p>
                </div>
                <div className="bg-[#E2E2E2] flex items-center gap-2 p-2 rounded-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z"
                      fill="#292929"
                    />
                  </svg>
                  <p className="text-[#353535] text-base not-italic font-thin leading-[normal]">
                    {item.isTo}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <li className="text-black text-lg not-italic font-thin leading-[normal]">
            {item.item1}
          </li>
          {item.item2 ? (
            <>
              <li className="text-black text-lg not-italic font-thin leading-[normal]">
                {item.item2}
              </li>
            </>
          ) : (
            ""
          )}
          <Modal2
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalContent.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Joineor;
