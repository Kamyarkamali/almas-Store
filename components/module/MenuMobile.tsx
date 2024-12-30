"use client";
import { FC, useEffect } from "react";
import Link from "next/link";

import { MenuLgProps } from "@/types/interFace";
import HamburgerMenuSvg from "../icon/HamburgerMenuSvg";
import LoginMenu from "./LoginMenu";
// کامپوننت های svg
import ShopSvg from "../icon/ShopSvg";
import UserSvg from "../icon/UserSvg";
import Image from "next/image";

const MenuMobile: FC<MenuLgProps> = ({ openLogin, setOpenLogin }) => {
  // مدیریت برای بسته منو و اسکرول نخوردن
  // useEffect(() => {
  //   if (!openLogin) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [openLogin]);

  return (
    <div
      className={`${
        openLogin &&
        "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-xl"
      }`}
    >
      <div className="flex lg:hidden justify-between items-center pr-2 pl-2 pt-2">
        <section>
          <div className="flex gap-1 items-center cursor-pointer">
            <HamburgerMenuSvg width="30px" height="25px" />
            <p className="text-[13px]">منو</p>
          </div>
        </section>

        <section>
          <Link href={"/"}>
            <Image
              src={"/images/imagesHomePage/logo.webp"}
              width={47}
              height={59}
              alt="فروشگاه کامپیوتر و قطعات کامپیوتر"
            />
          </Link>
        </section>

        <section className="flex items-center">
          <div className=" relative flex items-center group pl-[15px] cursor-pointer">
            <div onClick={() => setOpenLogin(true)}>
              <UserSvg width="20px" height="19px" />
            </div>
            <section
              className={`absolute top-[-24px] left-[-43px] w-[285px] overflow-y-auto overflow-x-hidden h-screen bg-white z-50 transition-transform duration-300 ease-out ${
                openLogin ? "block" : "hidden"
              }`}
            >
              <LoginMenu openLogin={openLogin} setOpenLogin={setOpenLogin} />
            </section>
          </div>

          <div className="flex items-center group pl-[15px]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShopSvg width="21px" height="21px" color="#B6B6B6" />
                <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
                  <span className="text-[9px]">0</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuMobile;