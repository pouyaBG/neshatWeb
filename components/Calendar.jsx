"use client";
import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import moment from "jalali-moment";
const daysOfWeek = [
  "شنبه",
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

const dayData = {
  شنبه: [
    {
      column1: "9:00",
      column2: "10:30",
      column3: "150/000 ",
      column4: "خرید بلیط",
    },
    {
      column1: "10:30",
      column2: "12:00",
      column3: "150/000 ",
      column4: "خرید بلیط",
    },
    {
      column1: "10:30",
      column2: "12:00",
      column3: "150/000 ",
      column4: "خرید بلیط",
    },
    {
      column1: "10:30",
      column2: "12:00",
      column3: "150/000 ",
      column4: "خرید بلیط",
    },
    {
      column1: "10:30",
      column2: "12:00",
      column3: "150/000 ",
      column4: "خرید بلیط",
    },
  ],
  یک‌شنبه: [
    {
      column1: "مقدار 1 یک‌شنبه",
      column2: "مقدار 2 یک‌شنبه",
      column3: "ss",
      column4: "خرید",
    },
  ],
};

const WeekDaySelector = () => {
  const [selectedDay, setSelectedDay] = useState("شنبه");
  const jalaliDate = moment();
  const handleChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-3 px-5">
        <p className="hidden lg:flex -mr-1 lg:text-[25px] ">روز</p>
        <p className="flex lg:hidden -mr-1 lg:text-[25px] text-[11.503px] ">
          {jalaliDate.format("jYYYY/jMM/jDD")}
        </p>
        <div className="bg-[#D9D9D9] lg:px-3 lg:py-1 px-1 rounded-[17px]">
          <select
            value={selectedDay}
            onChange={handleChange}
            className="bg-[#D9D9D9] text-[#474747]  rounded-[17px] text-[12px] outline-none lg:text-[14px]"
          >
            {daysOfWeek.map((day) => (
              <option
                className="text-[10px] lg:text-[16px]"
                key={day}
                value={day}
              >
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex relative items-center justify-start  styleS overflow-auto ">
        <div className="absolute -right-12  whitespace-nowrap bg-[#D9D9D9] px-5 -mr-[50px] mt-14 h-fit   py-1 rounded-[8px] text-center rotate-[-90deg]">
          <p className="hidden lg:flex lg:text-[20px] font-thin px-5 py-0">
            تاریخ روز: {jalaliDate.format("jYYYY/jMM/jDD")}
          </p>
        </div>
        {selectedDay && (
          <table className="table mt-5  m-auto">
            <thead>
              <tr className="border-b-2">
                <th className="th text-[12.336px] lg:text-[16px] text-center   lg:pb-5  whitespace-nowrap">
                  زمان شروع
                </th>
                <th className="th text-[12.336px] lg:text-[16px] text-center  lg:pb-5 whitespace-nowrap ">
                  زمان پایان
                </th>
                <th className="th text-[12.336px] lg:text-[16px] text-center lg:pb-5  whitespace-nowrap">
                  قیمت
                </th>
                <th className="th text-[12.336px] lg:text-[16px] text-center  lg:pb-5 whitespace-nowrap">
                  خرید بلیط
                </th>
              </tr>
            </thead>
            <tbody>
              {dayData[selectedDay]?.map((row) => (
                <tr key={row.id} className="font-thin">
                  <td className="td text-center lg:py-2 lg:pt-3">
                    <p className="border-l-2 lg:text-[18px] lg:py-3 text-[11.749px]">
                      {row.column1}
                    </p>
                  </td>
                  <td className="td text-center py-2 pt-3">
                    <p className="border-l-2  lg:text-[18px] lg:py-3 text-[11.749px] ">
                      {row.column2}
                    </p>
                  </td>
                  <td className="td text-center lg:py-2 lg:pt-3 ">
                    <p className="border-l-2  lg:text-[18px] lg:whitespace-nowrap  text-[11.749px]  lg:py-3 ">
                      {row.column3}
                      <span className="text-[#C5BD0E] lg:text-[15px] text-[11.749px]  ">
                        تومان
                      </span>
                    </p>
                  </td>
                  <td className="td text-center   ">
                    <button className="bg-[#DED60E] lg:px-5 lg:py-2 py-1 px-2 rounded-[7px] hover:shadow-lg transition-all whitespace-nowrap text-[10px] lg:text-[18px]">
                      {row.column4}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default WeekDaySelector;
