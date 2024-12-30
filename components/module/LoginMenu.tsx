import { MenuLgProps } from "@/types/interFace";

import React, { FC, useEffect, useRef, useState } from "react";
import CloseSvg from "../icon/CloseSvg";
import LoginForm from "./LoginForm";

const LoginMenu: FC<MenuLgProps> = ({ openLogin, setOpenLogin }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  // بستن منو هنگام کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenLogin(false);
      }
    };

    if (openLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLogin, setOpenLogin]);

  if (!openLogin) return null;

  return (
    <div ref={menuRef}>
      <div className="p-5 pl-4 pr-3 border-b-[0.1px] border-[#bcb8b8]">
        <div className="flex justify-between items-center">
          <p className="text-[18px] text-[#333333] font-bold">ورود</p>
          <div
            className="flex items-center gap-2"
            onClick={() => setOpenLogin(false)}
          >
            <CloseSvg width="14px" height="13px" />
            <p className="text-[14px] font-bold text-[#333333]">بستن</p>
          </div>
        </div>
      </div>
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginMenu;
