"use client";
// RegistrationForm.js
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    return errors;
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://django-sport.iran.liara.run/api/secure/sign_up/",
        values
      );
      localStorage.setItem("mainToken", response.data.token.access);
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with an error status:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received from the server");
      } else {
        console.log("Error setting up the request:", error.message);
      }
      console.log("Full error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
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
            <Field
              type="password"
              name="password"
              className="rounded-[2.936px] border-[0.979px] border-solid border-[rgba(156,156,156,0.30)] p-2.5 w-[520.189px] "
            />
            <ErrorMessage name="password" component="div" />
          </label>

          <button
            type="submit"
            className="bg-[#E0DA5E] w-full p-2.5 rounded-[3px] mt-5"
          >
            ثبت نام
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
