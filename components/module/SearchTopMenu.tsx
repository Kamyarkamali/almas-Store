"use client";
import { useState } from "react";

// component like-module
import LikeSvg from "@/components/icon/SearchSvg";

const SearchTopMenu = () => {
  const [search, setSearch] = useState<string>("");

  const submitHandeler = () => {
    console.log(search);
  };

  return (
    <div className="md:w-[322px] lg:w-[741.62px] h-[2.8rem] border-[2px] border-[#D9D9D9] flex items-center justify-between rounded-md">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستوجوی محصولات"
        type="text"
        className="w-full text-[#777777] pr-[18px] bg-[#F4F4F4] focus:outline-none rounded-md placeholder:text-[14px] placeholder:text-[#777777]"
      />
      <button
        onClick={submitHandeler}
        className="w-[53.9888px] h-[45.9888px] bg-[#D60644] flex justify-center items-center rounded-l-md"
      >
        <LikeSvg
          color="#fff"
          width={"28.39px"}
          height={"18.39px"}
          strokeWidth=".5px"
        />
      </button>
    </div>
  );
};

export default SearchTopMenu;
