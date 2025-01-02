import React from "react";
import MarketSvg from "../icon/MarketSvg";
import ShopSvg from "../icon/ShopSvg";
import UserSvg from "../icon/UserSvg";
import Link from "next/link";

function ItemBottomMenu() {
  return (
    <div className="w-full flex justify-around">
      <Link
        href={"#"}
        className="flex flex-col items-center gap-1 cursor-pointer"
      >
        <MarketSvg width="23px" height="23px" />
        <p className="text-[11px] text-[#333333] font-bold">فروشگاه</p>
      </Link>

      <div className="flex items-center group cursor-pointer">
        <div className="flex flex-col items-center gap-1">
          <Link href={"#"} className="relative">
            <img
              className="w-[20px] h-[20px]"
              src="/svgs/like.svg"
              alt="faiverite"
            />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </Link>
          <p className="text-[11px] text-[#333333] font-bold group-hover:text-[#453939be] transition-colors cursor-pointer">
            علاقه مندی ها
          </p>
        </div>
      </div>

      <div className="flex items-center group">
        <div className="flex flex-col items-center gap-1">
          <Link href={"#"} className="relative">
            <ShopSvg width="20px" height="20px" color="#B6B6B6" />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </Link>
          <p className="text-[11px] font-bold text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
            سبد خرید
          </p>
        </div>
      </div>

      <div className="flex items-center group">
        <div className="flex flex-col items-center gap-1">
          <Link href={"#"} className="relative">
            <UserSvg width="20px" height="20px" color="#B6B6B6" />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </Link>
          <p className="text-[11px] font-bold text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
            حساب کاربری من
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemBottomMenu;
