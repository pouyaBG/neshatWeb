"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Avatar } from "@nextui-org/react";

const Navbar = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const authToken = localStorage.getItem("mainToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };

    axios
      .get("https://django-sport.iran.liara.run/api/secure/refreshjwt/", {
        headers: headers,
      })
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  const handleToggleForm = () => {
    setIsLoginFormVisible((prevValue) => !prevValue);
  };

  const [menu, setIsmenu] = useState(false);
  const toggleMenu = () => {
    setIsmenu(!menu);
  };
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-fit bg-Primery backdrop-blur-[5px]  justify-between items-center text-white py-5 px-5 lg:hidden flex z-50">
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="20"
            viewBox="0 0 29 15"
            fill="none"
          >
            <rect
              x="6.72266"
              y="11.8289"
              width="21.5361"
              height="2.22787"
              rx="1.11394"
              fill="white"
            />
            <rect
              x="0.917969"
              y="5.88794"
              width="21.5361"
              height="2.22787"
              rx="1.11394"
              fill="white"
            />
            <rect
              x="6.72266"
              width="21.5361"
              height="2.22787"
              rx="1.11394"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex items-center ">
          <div className="ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M11.8119 27C12.7069 27 13.5653 26.6444 14.1982 26.0115C14.8311 25.3786 15.1867 24.5202 15.1867 23.6252H8.43704C8.43704 24.5202 8.7926 25.3786 9.4255 26.0115C10.0584 26.6444 10.9168 27 11.8119 27ZM13.4908 1.85594C13.5144 1.62131 13.4885 1.38435 13.4148 1.16034C13.3412 0.936334 13.2214 0.73025 13.0632 0.555382C12.905 0.380513 12.7119 0.240742 12.4964 0.145082C12.2808 0.0494233 12.0477 0 11.8119 0C11.576 0 11.3429 0.0494233 11.1273 0.145082C10.9118 0.240742 10.7187 0.380513 10.5605 0.555382C10.4023 0.73025 10.2825 0.936334 10.2089 1.16034C10.1352 1.38435 10.1093 1.62131 10.1329 1.85594C8.22564 2.24387 6.51107 3.27903 5.2795 4.78612C4.04794 6.29321 3.37506 8.17962 3.37482 10.1259C3.37482 11.9787 2.53111 20.2504 0 21.9378H23.6237C21.0926 20.2504 20.2489 11.9787 20.2489 10.1259C20.2489 6.0424 17.3466 2.63383 13.4908 1.85594Z"
                fill="white"
              />
              <circle cx="18.5" cy="4.5" r="3.5" fill="#DED60E" />
            </svg>
          </div>

          <button className="bg-[#DED60E] rounded-[7px] flex gap-1 items-center  text-black p-[10px]">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1.45706 13.8132C1.45706 13.8132 0.382812 13.8132 0.382812 12.6793C0.382812 11.5453 1.45706 8.14355 6.8283 8.14355C12.1995 8.14355 13.2738 11.5453 13.2738 12.6793C13.2738 13.8132 12.1995 13.8132 12.1995 13.8132H1.45706ZM6.8283 7.00963C7.68303 7.00963 8.50274 6.65122 9.10713 6.01327C9.71151 5.37531 10.051 4.51005 10.051 3.60784C10.051 2.70563 9.71151 1.84037 9.10713 1.20241C8.50274 0.564456 7.68303 0.206055 6.8283 0.206055C5.97358 0.206055 5.15386 0.564456 4.54948 1.20241C3.9451 1.84037 3.60556 2.70563 3.60556 3.60784C3.60556 4.51005 3.9451 5.37531 4.54948 6.01327C5.15386 6.65122 5.97358 7.00963 6.8283 7.00963Z"
                fill="#101010"
              />
            </svg>
            <p className="font-thin text-[12px]">ورود / ثبت نام </p>
          </button>
        </div>
        <div
          className={`absolute top-0 z-50 p-10 bg-black w-[80%]   ${
            menu ? "right-0" : "-right-[1000px]"
          } h-screen transition-all ease-in-out`}
        >
          <div onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="20"
              viewBox="0 0 29 15"
              fill="none"
            >
              <rect
                x="6.72266"
                y="11.8289"
                width="21.5361"
                height="2.22787"
                rx="1.11394"
                fill="white"
              />
              <rect
                x="0.917969"
                y="5.88794"
                width="21.5361"
                height="2.22787"
                rx="1.11394"
                fill="white"
              />
            </svg>
          </div>
          <ul className="flex flex-col mt-20 justify-between items-center gap-10">
            <li>
              <Link href="/">
                <p
                  className={`font-thin  transition-all  ${
                    pathname === "/" ? "active font-medium" : ""
                  }`}
                >
                  صفحه اصلی
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p
                  className={`font-thin hover:scale-105 transition-all  ${
                    pathname === "/about" ? "active font-medium" : ""
                  }`}
                >
                  تور مجازی
                </p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/shop" ? "active font-medium" : ""
                  }`}
                >
                  فروشگاه
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/about" ? "active font-medium" : ""
                  }`}
                >
                  فرصت های شغلی
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/about" ? "active font-medium" : ""
                  }`}
                >
                  درباره ما
                </p>
              </Link>
            </li>
            <li>
              <Link href="/tamas">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/tamas" ? "active font-medium" : ""
                  }`}
                >
                  تماس با ما
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit bg-Primery  justify-between items-center text-white p-3 px-11 hidden lg:flex">
        <div>
          <Image src={"/svg/logo.svg"} width={80} height={50} priority />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-10">
            <li>
              <Link href="/">
                <p
                  className={`font-thin  transition-all  ${
                    pathname === "/" ? "active font-medium" : ""
                  }`}
                >
                  صفحه اصلی
                </p>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <p
                  className={`font-thin hover:scale-105 transition-all  ${
                    pathname === "/gallery" ? "active font-medium" : ""
                  }`}
                >
                  گالری
                </p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/shop" ? "active font-medium" : ""
                  }`}
                >
                  فروشگاه
                </p>
              </Link>
            </li>
            <li>
              <Link href="/workjob">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/workjob" ? "active font-medium" : ""
                  }`}
                >
                  فرصت های شغلی
                </p>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/aboutus" ? "active font-medium" : ""
                  }`}
                >
                  درباره ما
                </p>
              </Link>
            </li>
            <li>
              <Link href="/tamas">
                <p
                  className={`font-thin  hover:scale-105 transition-all  ${
                    pathname === "/tamas" ? "active font-medium" : ""
                  }`}
                >
                  تماس با ما
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <div className="ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M11.8119 27C12.7069 27 13.5653 26.6444 14.1982 26.0115C14.8311 25.3786 15.1867 24.5202 15.1867 23.6252H8.43704C8.43704 24.5202 8.7926 25.3786 9.4255 26.0115C10.0584 26.6444 10.9168 27 11.8119 27ZM13.4908 1.85594C13.5144 1.62131 13.4885 1.38435 13.4148 1.16034C13.3412 0.936334 13.2214 0.73025 13.0632 0.555382C12.905 0.380513 12.7119 0.240742 12.4964 0.145082C12.2808 0.0494233 12.0477 0 11.8119 0C11.576 0 11.3429 0.0494233 11.1273 0.145082C10.9118 0.240742 10.7187 0.380513 10.5605 0.555382C10.4023 0.73025 10.2825 0.936334 10.2089 1.16034C10.1352 1.38435 10.1093 1.62131 10.1329 1.85594C8.22564 2.24387 6.51107 3.27903 5.2795 4.78612C4.04794 6.29321 3.37506 8.17962 3.37482 10.1259C3.37482 11.9787 2.53111 20.2504 0 21.9378H23.6237C21.0926 20.2504 20.2489 11.9787 20.2489 10.1259C20.2489 6.0424 17.3466 2.63383 13.4908 1.85594Z"
                fill="white"
              />
              <circle cx="18.5" cy="4.5" r="3.5" fill="#DED60E" />
            </svg>
          </div>
          {data ? (
            <div className="flex items-center gap-5">
              <div className="z-10 bg-white rounded-full p-2">
                <p className="px-2 text-black">{data.username[0]}</p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p>{data.username}</p>
                <p>{data.email}</p>
              </div>
            </div>
          ) : (
            <>
              <Link
                href={"/users/login"}
                className="bg-[#DED60E] rounded-[7px] flex gap-1 items-center  text-black p-[10px]"
              >
                <svg
                  className="mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.45706 13.8132C1.45706 13.8132 0.382812 13.8132 0.382812 12.6793C0.382812 11.5453 1.45706 8.14355 6.8283 8.14355C12.1995 8.14355 13.2738 11.5453 13.2738 12.6793C13.2738 13.8132 12.1995 13.8132 12.1995 13.8132H1.45706ZM6.8283 7.00963C7.68303 7.00963 8.50274 6.65122 9.10713 6.01327C9.71151 5.37531 10.051 4.51005 10.051 3.60784C10.051 2.70563 9.71151 1.84037 9.10713 1.20241C8.50274 0.564456 7.68303 0.206055 6.8283 0.206055C5.97358 0.206055 5.15386 0.564456 4.54948 1.20241C3.9451 1.84037 3.60556 2.70563 3.60556 3.60784C3.60556 4.51005 3.9451 5.37531 4.54948 6.01327C5.15386 6.65122 5.97358 7.00963 6.8283 7.00963Z"
                    fill="#101010"
                  />
                </svg>
                <p className="font-thin">ورود / ثبت نام </p>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
