"use client";
import React, { useState } from "react";
import MenuMobile from "../module/MenuMobile";

import MenuLg from "../module/MenuLg";
import ScrollTop from "../buttons/ScrollTop";
import BottomMenuMobile from "../module/BottomMenuMobile";
import MegaMenus from "../module/MegaMenus";
import { usePathname } from "next/navigation";

function Header() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const [openBasket, setOpenBasket] = useState<boolean>(false);

  return (
    <div>
      <MenuLg />
      <MenuMobile
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        openBasket={openBasket}
        setOpenBasket={setOpenBasket}
      />
      {/* دکمه فیکس به صفحه برای بالا رفتن */}
      <section>
        <ScrollTop />
      </section>
      {/* منو پایین در سایز موبایل */}
      <section>{!openLogin && !openBasket && <BottomMenuMobile />}</section>
      {/* قسکت مگامنو */}
      <section className="hidden lg:block">
        <MegaMenus />
      </section>
    </div>
  );
}
{
}

export default Header;
