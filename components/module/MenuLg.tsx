import React from "react";
import TopMenuSection from "./TopMenuSection";
import Link from "next/link";
import Image from "next/image";

import SearchSvg from "@/components/icon/SearchSvg2";

function MenuLg() {
  return (
    <div className="hidden lg:flex justify-between items-center pl-5 pr-5 pt-2">
      <div className="mr-[30px]">
        <Link href={"/"}>
          <Image
            src={"/images/imagesHomePage/logo.webp"}
            width={75}
            height={75}
            alt="فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر"
          />
        </Link>
      </div>
      <div className="border-[2px] border-[#E5E5E5] lg:w-[713px] custom:w-[329px] h-[46px] rounded-md flex items-center justify-between">
        <input
          placeholder="جستوجوی محصولات"
          type="text"
          className="rounded-md placeholder:text-[13px] bg-transparent pr-4 rounded-tl-none focus:outline-none w-full h-full"
        />
        <button className="w-[46px] h-[46px] bg-[#D60444] rounded-l-md flex items-center justify-center">
          <SearchSvg />
        </button>
      </div>
      <div>
        <TopMenuSection />
      </div>
    </div>
  );
}

export default MenuLg;
