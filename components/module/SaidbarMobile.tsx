"use client";

import HamburgerMenuSvg from "../icon/HamburgerMenuSvg";
import SaidbarMenuMobile from "./SaidbarMenuMobile";
import { useState } from "react";

function SaidbarMobile() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <aside>
        <div className="cursor-pointer border-t-[1px] border-[#D9D9D9] w-full">
          <div
            className="flex items-center justify-start pt-4 gap-1 relative"
            onClick={() => setOpen(true)}
          >
            <HamburgerMenuSvg />
            <p className="text-[14px] text-[#333333] font-bold">
              مشاهده فیلترها
            </p>
          </div>
        </div>
      </aside>
      {/* رندر کامپوننت منو */}
      <SaidbarMenuMobile open={open} setOpen={setOpen} />
    </>
  );
}

export default SaidbarMobile;
