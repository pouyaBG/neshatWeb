"use client";
// RegistrationForm.js
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
   
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    console.log(values);
    try {
      const response = await axios.post(
        "https://django-sport.iran.liara.run/api/secure/sign_up/",
        values
      );
      localStorage.setItem("mainToken", response.data.token.access);
      router.push("/");
      toast.success("با موفقیت ثبت نام شدید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      if (error.response) {
        toast.error("اشتباهی رخ داده است", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(
          "Server responded with an error status:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        toast.error("اشتباهی رخ داده است", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("No response received from the server");
      } else {
        toast.error("اشتباهی رخ داده است", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Error setting up the request:", error.message);
      }
      console.log("Full error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="w-full h-full flex justify-between flex-col items-center gap-2 p-10">
          <label className="flex flex-col">
            <p className="text-[#1D1D1D] text-[17.354px] not-italic font-medium leading-[normal] my-2">
              نام کاربری:
            </p>
            <Field
              type="text"
              name="username"
              className="rounded-[2.936px] border-[0.979px] border-solid border-[rgba(156,156,156,0.30)] p-2.5 w-[520.189px] "
            />
            <ErrorMessage name="username" component="div" />
          </label>

          <label className="flex flex-col">
            <p className="text-[#1D1D1D] text-[17.354px] not-italic font-medium leading-[normal] my-2">
              ایمیل:
            </p>
            <Field
              type="email"
              name="email"
              className="rounded-[2.936px] border-[0.979px] border-solid border-[rgba(156,156,156,0.30)] p-2.5 w-[520.189px] "
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label className="flex flex-col">
            <p className="text-[#1D1D1D] text-[17.354px] not-italic font-medium leading-[normal] my-2">
              رمز عبور:
            </p>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="rounded-[2.936px] border-[0.979px] border-solid border-[rgba(156,156,156,0.30)] p-2.5 w-[520.189px]"
              />
              <button
                className="absolute left-2 bottom-3 cursor-pointer"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M17.6985 15.8657C19.9325 13.4324 21.167 10.6755 21.167 10.6755C21.167 10.6755 17.227 1.8595 10.6603 1.8595C9.39897 1.8648 8.1519 2.18557 6.99609 2.802L8.00737 4.03784C8.85767 3.6598 9.75535 3.46509 10.6603 3.4624C13.4446 3.4624 15.7548 5.33459 17.4477 7.40073C18.2624 8.40044 18.9928 9.49753 19.6278 10.6755C19.5516 10.8149 19.4676 10.9688 19.3717 11.1371C18.9317 11.9065 18.2816 12.9323 17.4477 13.9502C17.2309 14.2147 17.0051 14.4759 16.7687 14.7292L17.6985 15.8657Z"
                      fill="black"
                    />
                    <path
                      d="M14.9884 12.561C15.2815 11.5605 15.3357 10.4791 15.1449 9.44243C14.9541 8.40579 14.5259 7.4566 13.9104 6.70531C13.2948 5.95402 12.5171 5.43152 11.6677 5.1986C10.8183 4.96568 9.93224 5.03192 9.11251 5.38962L10.1934 6.70881C10.6981 6.62064 11.2127 6.67714 11.6965 6.87385C12.1802 7.07055 12.6197 7.40205 12.9803 7.84208C13.3408 8.2821 13.6124 8.81856 13.7736 9.40894C13.9348 9.99932 13.9811 10.6274 13.9088 11.2434L14.9884 12.561ZM11.1232 14.6432L12.2028 15.9608C11.3831 16.3184 10.497 16.3847 9.64759 16.1518C8.79822 15.9189 8.0205 15.3964 7.40493 14.6451C6.78936 13.8938 6.36125 12.9446 6.17041 11.9079C5.97957 10.8713 6.03384 9.78984 6.32692 8.78937L7.4078 10.1086C7.33555 10.7246 7.38185 11.3527 7.54302 11.943C7.70419 12.5334 7.97581 13.0699 8.33634 13.5099C8.69688 13.9499 9.13643 14.2814 9.62016 14.4781C10.1039 14.6748 10.6185 14.7313 11.1232 14.6432Z"
                      fill="black"
                    />
                    <path
                      d="M4.55203 6.62034C4.31563 6.8768 4.08842 7.13647 3.87172 7.40095C3.05699 8.40067 2.3266 9.49775 1.69158 10.6757L1.94768 11.1373C2.38765 11.9067 3.03775 12.9326 3.87172 13.9504C5.56462 16.0165 7.87609 17.8887 10.6591 17.8887C11.5994 17.8887 12.4846 17.6756 13.312 17.3117L14.3233 18.5491C13.1675 19.1655 11.9204 19.4863 10.6591 19.4916C4.09236 19.4916 0.152344 10.6757 0.152344 10.6757C0.152344 10.6757 1.38557 7.91709 3.62087 5.48549L4.55072 6.62194L4.55203 6.62034ZM18.0742 20.8605L2.3141 1.6257L3.24395 0.490845L19.004 19.7257L18.0742 20.8605Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <ErrorMessage name="password" component="div" />
          </label>

          <button
            type="submit"
            className="bg-[#E0DA5E] w-full p-2.5 rounded-[3px] mt-5"
          >
            {isSubmitting ? (
              <div className="">
                <p>لطفا صبر کنید...</p>
              </div>
            ) : (
              "ثبت نام"
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
