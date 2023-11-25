import React, { useState } from "react";

const TableEstakhr = () => {
  const ListItem = [
    {
      day: "شنبه",
      date: "9 آبان",
      man: true,
      start: "10:00",
      end: "22:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "150",
      buy: false,
    },
    // {
    //   day: "یکشنبه",
    //   date: "10 آبان",
    //   man: false,
    //   start: "10:00",
    //   end: "22:00",
    //   price1: "700.000",
    //   price2: "1.200.000",
    //   quntitiy: "150",
    //   buy: true,
    // },
    {
      day: "دوشنبه",
      date: "11 آبان",
      man: true,
      start: "10:00",
      end: "16:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "150",
      buy: false,
    },
    // {
    //   day: "سه شنبه",
    //   date: "11 آبان",
    //   man: false,
    //   start: "10:00",
    //   end: "16:00",
    //   price1: "700.000",
    //   price2: "1.200.000",
    //   quntitiy: "150",
    //   buy: true,
    // },
    {
      day: "چهارشنبه",
      date: "12 آبان",
      man: true,
      start: "10:00",
      end: "22:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "10",
      buy: false,
    },
    // {
    //   day: "پنجشنبه",
    //   date: "13 آبان",
    //   man: false,
    //   start: "10:00",
    //   end: "22:00",
    //   price1: "700.000",
    //   price2: "1.200.000",
    //   quntitiy: "10",
    //   buy: true,
    // },
    // {
    //   day: "جمعه",
    //   date: "14 آبان",
    //   man: false,
    //   start: "10:00",
    //   end: "16:00",
    //   price1: "700.000",
    //   price2: "1.200.000",
    //   quntitiy: "10",
    //   buy: false,
    // },
    {
      day: "جمعه",
      date: "14 آبان",
      man: true,
      start: "10:00",
      end: "16:00",
      price1: "700.000",
      price2: "1.200.000",
      quntitiy: "10",
      buy: true,
    },
  ];
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
                  <p className="font-thin">شروع</p>
                  <p>{item.start}</p>
                </div>
                <div className=" px-10 flex flex-col items-center justify-center">
                  <p className="font-thin">پایان</p>
                  <p>{item.end}</p>
                </div>
              </div>
              {item.buy ? (
                <div className="border px-[175px] rounded-[8.754px] py-[19px]">
                  <p>ظـــرفــیـــت تــکــمــیــل</p>
                </div>
              ) : (
                <>
                  <div className=" py-2 rounded-[8.754px] flex items-center justify-center border ">
                    <div className="border-l px-10 flex flex-col items-center justify-center">
                      <p className="font-thin">قیمت (هر نفر)</p>
                      <p>{item.price1} ریال</p>
                    </div>
                    <div className=" px-10 flex flex-col items-center justify-center">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <p className="font-thin">به همراه ماساژ</p>
                      </div>
                      <p>{item.price2} ریال</p>
                    </div>
                  </div>
                  <div className=" px-4 py-2 rounded-[8.754px] border flex items-center flex-col justify-between ">
                    <p className="font-thin">ظرفیت</p>
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

export default TableEstakhr;
