import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Calendar from "./Calendar";
const Bsalon = () => {
  return (
    <div
      className="w-full lg:px-36 lg:pb-20 lg:p-5 p-2 mb-5 mt-10"
      data-aos="flip-down"
    >
      <div className="m-auto w-full lg:p-2 flex justify-center items-center bg-white rounded-[15px]">
        <Accordion defaultActiveKey="theme">
          <AccordionItem
            key="theme"
            aria-label="Theme"
            indicator={() => (
              <button className="px-2 lg:px-5 lg:py-3 lg:border-[#DBDBDB] lg:text-[14px] text-[11.503px]  font-thin lg:border rounded-[15px] flex justify-between items-center gap-2 transition-all">
                انتخاب سانس
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    d="M1.90637 1.68296L8.48142 8.14151C8.73918 8.39471 9.15341 8.39101 9.40661 8.13324L15.8652 1.55819"
                    stroke="#494949"
                    stroke-width="2.32656"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            )}
            title={
              <>
                <p className="bg-[#DED60E] rounded-[15px] lg:w-[154px] w-[86.403px] lg:px-5 lg:py-3 py-2 text-[11.503px]  lg:text-[14px] text-center whitespace-nowrap">
                  سانس ها
                </p>
              </>
            }
          >
            <div className="border-t-2 p-0 w-full">
              <div className="mb-5">
                <Calendar />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Bsalon;
