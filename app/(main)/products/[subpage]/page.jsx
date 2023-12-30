"use client";
import AddCom from "@/components/AddCom";
import BoxTop from "@/components/BoxTop";
import Comments from "@/components/Comments";
import Productone from "@/components/Productone";

const page = ({ params }) => {
  return (
    <div>
      <div className="search-box w-full flex items-center justify-center border-b-2 p-5 mb-10">
        <input
          type="text"
          placeholder="جستوجو کنید..."
          className="px-5 py-2 rounded-[10px] w-[379px] outline-none border-[#7C7B7B] border "
        />
        <button className="mr-2 border p-2 rounded-md border-black">
          <img src="/svg/search.svg" alt="Search" />
        </button>
        <BoxTop />
      </div>
      <Productone paramss={params} />
      <Comments />
      <AddCom />
    </div>
  );
};

export default page;
