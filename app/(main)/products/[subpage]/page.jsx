"use client";

import Productone from "@/components/productone";
import { useCart } from "@/provider/cart";
import Link from "next/link";

const page = ({ params }) => {
  const { selectedProducts } = useCart();

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
        <Link href={"/Cart"}>
          <div className="flex items-start mr-5">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
            >
              <path
                d="M14.5026 5.29171C14.5026 2.4198 12.1661 0.083374 9.29427 0.083374C6.42236 0.083374 4.08594 2.4198 4.08594 5.29171H0.179688V17.6615C0.179688 19.4593 1.63708 20.9167 3.4349 20.9167H15.1536C16.9515 20.9167 18.4089 19.4593 18.4089 17.6615V5.29171H14.5026ZM9.29427 2.0365C11.0892 2.0365 12.5495 3.49679 12.5495 5.29171H6.03906C6.03906 3.49679 7.49935 2.0365 9.29427 2.0365ZM16.4557 17.6615C16.4557 18.3795 15.8716 18.9636 15.1536 18.9636H3.4349C2.71692 18.9636 2.13281 18.3795 2.13281 17.6615V7.24483H4.08594V8.87244C4.08594 9.41178 4.52315 9.849 5.0625 9.849C5.60185 9.849 6.03906 9.41178 6.03906 8.87244V7.24483H12.5495V8.87244C12.5495 9.41178 12.9867 9.849 13.526 9.849C14.0654 9.849 14.5026 9.41178 14.5026 8.87244V7.24483H16.4557V17.6615Z"
                fill="#484848"
                stroke="#484848"
                stroke-width="0.0406901"
              />
            </svg>
            <span className="bg-[#FF0606] px-2 text-white rounded-full">
              {selectedProducts.length}
            </span>
          </div>
        </Link>
      </div>
      <Productone paramss={params} />
    </div>
  );
};

export default page;
