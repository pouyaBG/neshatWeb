import React from "react";

const TabelEstakhrW = () => {
  const ListItem = [
    {
      day: "یکشنبه",
      date: "10 آبان",
      man: false,
      start: "10:00",
      end: "22:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "150",
      buy: true,
    },

    {
      day: "سه شنبه",
      date: "11 آبان",
      man: false,
      start: "10:00",
      end: "16:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "150",
      buy: true,
    },
    {
      day: "پنجشنبه",
      date: "13 آبان",
      man: false,
      start: "10:00",
      end: "22:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "10",
      buy: true,
    },
    {
      day: "جمعه",
      date: "14 آبان",
      man: false,
      start: "10:00",
      end: "16:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "10",
      buy: false,
    },
  ];
  return (
    <section className="w-full rounded-[15px] ">
      <div className="flex flex-col items-center  ">
        <div className="w-full mt-5 flex flex-col items-center justify-center gap-5 mb-5  bg-white">
          {ListItem?.map((item, id) => (
            <div
              key={id}
              className="w-full flex justify-center gap-5 items-center gap-y-5"
            >
              <div
                className={` w-[104.055px] flex flex-col items-center justify-center ${
                  item.man ? "bg-[#93D7FF]" : "bg-[#FFA0D8]"
                } px-4 py-2 rounded-[8.754px]`}
              >
                <p>{item.day}</p>
                <p>{item.date}</p>
              </div>
              <div className=" py-2 rounded-[8.754px] flex items-center justify-center border ">
                <div className="border-l px-10 flex flex-col items-center justify-center">
                  <p>شروع</p>
                  <p>{item.start}</p>
                </div>
                <div className=" px-10 flex flex-col items-center justify-center">
                  <p>پایان</p>
                  <p>{item.end}</p>
                </div>
              </div>
              {item.buy ? (
                <div className="border px-[162px] rounded-[8.754px] py-[19px]">
                  <p>ظـــرفــیـــت تــکــمــیــل</p>
                </div>
              ) : (
                <>
                  <div className=" py-2 rounded-[8.754px] flex items-center justify-center border ">
                    <div className="border-l px-10 flex flex-col items-center justify-center">
                      <p>قیمت (هر نفر)</p>
                      <p>{item.price1} ریال</p>
                    </div>
                    <div className=" px-10 flex flex-col items-center justify-center">
                      <p>به همراه ماساژ</p>
                      <p>{item.price2} ریال</p>
                    </div>
                  </div>
                  <div className=" px-4 py-2 rounded-[8.754px] border flex items-center flex-col justify-between ">
                    <p>ظرفیت</p>
                    <p>{item.quntitiy}</p>
                  </div>
                </>
              )}
              <div
                className={`cursor-pointer px-20 py-[19px] rounded-[8.754px] ${
                  item.buy ? "bg-[#9D9D9D]" : "bg-[#59AC49]"
                }`}
              >
                <button className="text-white">خرید</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabelEstakhrW;
