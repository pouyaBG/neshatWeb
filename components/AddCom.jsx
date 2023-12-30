import React from "react";

const AddCom = () => {
  return (
    <div className="p-10">
      <p className="mb-5">نظر خود را بنویسید</p>
      <p className="font-thin">محصول چگونه است؟</p>
      <div className="my-2">
        <img src="/img/Group 1321314866.png" alt="" />
      </div>
      <div>
        <p className="font-thin my-2">ایمیل خود را وارد کنید</p>
        <input type="text" className="w-[850px] p-3 rounded-[14px] shadow-md" />
      </div>
      <div>
        <p className="font-thin my-2">متن نظر خود را اینجا بنویسید</p>
        <textarea
          className=" rounded-[14px] w-[850px] p-3  shadow-md    outline-none "
          id="myTextArea"
          rows={10} // You can adjust the number of rows as needed
          cols={59}
          onResize={false} // You can adjust the number of columns as needed
        />
      </div>
      <button className="bg-[#3A4980] rounded-lg w-fit text-white px-3 py-2 my-3 mr-2">
        ارسال نطر
      </button>
    </div>
  );
};

export default AddCom;
