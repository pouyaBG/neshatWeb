import Mi from "@/components/Mi";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex  flex-col items-center m-auto  justify-center container yekanBakh ">
      <p className="text-black w-[70%] text-center mt-10 text-[40px] not-italic font-bold leading-[normal]">
        درباره مجموعه ما
      </p>
      <div className=" my-5 w-[70%]">
        <p className="text-[#5B5B5B] text-center text-xl not-italic font-thin leading-[normal]">
          "خوش آمدید به وبسایت مجموعه ورزشی ما! با افتخار به شما ارائه می‌دهیم
          که در آن می‌توانید از جدیدترین اخبار ورزشی، آموزش‌های تخصصی، و
          فعالیت‌های متنوع ما باخبر شوید. از ما دیدن کنید و به تجربه ورزشی منحصر
          به فرد ما بپیوندید!"
        </p>
      </div>
      <div className="w-[70%]">
        <div className="w-full  flex gap-10 m-auto mr-10">
          <div className=" w-[40%]  max-h-[500px]  rounded-[37.611px]  p-2">
            <img
              src={"/img/ab.png"}
              className="object-cover rounded-[37.611px] h-[400px] "
            />
          </div>
          <div className="w-[60%] max-h-[550px] rounded-[37.611px]   p-2">
            <img
              src={"/img/ab2.png"}
              className="object-cover  rounded-[37.611px] h-[400px]"
            />
          </div>
        </div>
      </div>
      <div>
        <Mi />
      </div>

      <div className=" w-[70%]">
        <p className="text-black text-right text-[35px] not-italic font-bold leading-[44px] mb-5">
          ماموریت ما
        </p>
        <div className="w-full flex gap-8 mb-10">
          <div className="w-[510px]">
            <p className="text-[#5B5B5B] text-justify text-[22px] not-italic font-thin leading-loose">
              در مجموعه ورزشی ما، به ارائه محتوای تازه و تخصصی در زمینه‌های
              ورزشی، تناسب اندام و تغذیه متمرکز هستیم. هدف ما ایجاد یک جامعه
              پویا از علاقه‌مندان به ورزش است که تجربیات و ایده‌هایشان را با هم
              به اشتراک بگذارند.
            </p>
            <p className="text-[#5B5B5B] text-justify text-[22px] not-italic font-thin leading-loose">
              با حمایت از افراد با اهداف ورزشی خاص، ما سعی داریم تا بهبودی در
              سبک زندگی ایجاد کنیم و افراد را در مسیر بهبود ورزشی و سلامتی خود
              هدایت کنیم.
            </p>
          </div>
          <div className="  ">
            <img src="/img/tn.png" className="object-contain rounded-[30px] " />
          </div>
        </div>
      </div>
      <div className="my-20  w-full">
        <p className="text-black text-center text-3xl not-italic font-bold leading-[44px]">
          افتخار آفرینانی که با مجموعه ما کار کردند
        </p>
        <div className="bg-[#F6F6F6] flex items-start gap-10 mt-5 p-5">
          <div className="p-5 w-[656px]">
            <li>خلیل اسدی</li>
            <p className="font-thin mr-10 py-1">
              متولد 1367/8/24 شهرستان آمل می باشد و کارشناس تربیت بدنی است.
            </p>
            <p className="font-thin mr-10 py-1">
              خلیل اسدی مدت 8سال است که برای قوای آمادگی جسمانی به بدنسازی رفته
              است و تا به امروز این ورزش را ادامه داده است.
            </p>
            <h3 className="mr-2">افتخارات وی :</h3>
            <div>
              <span className="ml-5 font-thin mr-10">
                قهرماني آسيا ٢٠١٤ سريلانكا IFBB
              </span>{" "}
              <span className="font-thin ">اوورال آسيا ٢٠١٤ IFBB</span>
            </div>
            <div>
              <span className="ml-[44.5px] font-thin mr-10">
                نايب قهرمان جهان ٢٠١٥ IFBB
              </span>
              <span className="font-thin">
                قهرمان مسابقات جام الماس ٢٠١٥ IFBB
              </span>
            </div>
            <li>اللهیار صیادمنش</li>
            <p className="font-thin mr-10">
              متولد 8 تیر 1380 بازیکن فوتبال اهل شهرستان آمل می باشد.
            </p>
            <p className="font-thin mr-10">
              وی در پست وینگر و مهاجم برای باشگاه فوتبال های سیتی در لیگ برتر
              فوتبال انگلستان و تیم ملی فوتبال بازی می کند.
            </p>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col  gap-5 justify-between">
              <img
                src="/img/al.png"
                alt="Upper Right Image"
                className="object-contain w-[292px]  rounded-lg"
              />
              <img
                src="/img/mi2.png"
                alt="Lower Right Image"
                className="object-contain w-[292px]  rounded-lg"
              />
            </div>
            <div className="w-[50%] -mr-[100px]">
              <img
                src="/img/mi3.png"
                alt="Left Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <p className="text-black text-center text-3xl not-italic font-bold leading-[44px] mb-5">
          خدمات و امکانات مجموعه ما
        </p>
        <div className="flex items-start justify-between gap-5 mb-10">
          <div className="flex flex-col gap-5">
            <div className="bg-[#EBF5FF] w-[476px] p-2 rounded">
              <p>محتوای تخصصی:</p>
              <p className="font-thin">
                ارائه مقالات، ویدئوها و راهنماهای تخصصی در زمینه‌های تمرینات،
                تغذیه و بهبود عملکرد ورزشی.
              </p>
            </div>
            <div className="bg-[#EBF5FF] w-[476px] p-2 rounded">
              <p>برنامه‌های تمرینی شخصی:</p>
              <p className="font-thin">
                فراهم کردن برنامه‌های تمرینی شخصی با توجه به اهداف و نیازهای
                ورزشی هر فرد.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-[#EBF5FF] w-[476px] p-2 rounded">
              <p>جامعه آنلاین:</p>
              <p className="font-thin">
                ایجاد یک فضای اجتماعی برای تبادل تجربیات و اطلاعات بین افراد
                علاقه‌مند به ورزش و سلامت.
              </p>
            </div>
            <div className="bg-[#EBF5FF] w-[476px] p-2 rounded">
              <p>پشتیبانی از اهداف خاص:</p>
              <p className="font-thin">
                حمایت و راهنمایی افراد با اهداف ورزشی خاص از طریق منابع و
                مشاوره‌های مخصوص.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
