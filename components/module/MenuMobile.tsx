"use client";
import { FC, useState } from "react";
import Link from "next/link";

import HamburgerMenuSvg from "../icon/HamburgerMenuSvg";
import LoginMenu from "./LoginMenu";
// کامپوننت های svg
import ShopSvg from "../icon/ShopSvg";
import UserSvg from "../icon/UserSvg";
import Image from "next/image";
import { CombinedProps } from "@/types/type";
import BasketShop from "./BasketShop";
import HamburgerMenu from "./HamburgerMenu";

const MenuMobile: FC<CombinedProps> = ({
  openLogin = false,
  setOpenLogin = () => {},
  openBasket = false,
  setOpenBasket = () => {},
}) => {
  const [openBlur, setOpenBlur] = useState<boolean>(false);

  return (
    <div
      className={`${
        openLogin ||
        openBasket ||
        (openBlur &&
          "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-xl z-[10000]")
      }`}
    >
      <div className="flex lg:hidden justify-between items-center pr-2 pl-2 pt-2">
        <section className="relative">
          <div
            onClick={() => setOpenBlur(true)}
            className="flex cursor-pointer gap-1 items-center"
          >
            <HamburgerMenuSvg width="30px" height="25px" />
          </div>
          {/* همبرگرمنو */}
          <section
            className={`absolute transition-all duration-300 ease-linear top-[-1.2rem] ${
              openBlur ? "right-[-10px]" : "right-[-1200%]"
            }`}
          >
            <HamburgerMenu openBlur={openBlur} setOpenBlur={setOpenBlur} />
          </section>
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
          {/* منو ورود */}
          <div className="relative flex items-center group pl-[15px] cursor-pointer">
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

          {/* منو سبد خرید */}
          <div className="flex items-center group pl-[15px] cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div onClick={() => setOpenBasket((prv) => !prv)}>
                  <ShopSvg width="21px" height="21px" color="#B6B6B6" />
                </div>
                <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
                  <span className="text-[9px]">0</span>
                </div>
                {/* منو سبد خرید در موبایل */}
                <section
                  className={`absolute top-[-24px] left-[-20px] w-[285px] overflow-y-auto overflow-x-hidden h-screen bg-white z-auto transition-transform duration-300 ease-out ${
                    openBasket ? "block" : "hidden"
                  }`}
                >
                  <BasketShop
                    openBasket={openBasket}
                    setOpenBasket={setOpenBasket}
                  />
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuMobile;
