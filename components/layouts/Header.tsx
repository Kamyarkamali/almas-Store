"use client";
import React, { useState } from "react";
import MenuMobile from "../module/MenuMobile";

import MenuLg from "../module/MenuLg";
import ScrollTop from "../buttons/ScrollTop";

function Header() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  return (
    <div>
      <MenuLg />
      <MenuMobile openLogin={openLogin} setOpenLogin={setOpenLogin} />
      {/* دکمه فیکس به صفحه برای بالا رفتن */}
      <section>
        <ScrollTop />
      </section>
    </div>
  );
}
{
}

export default Header;
