import React, { FC } from "react";
import CloseSvg from "../icon/CloseSvg";
import LoginForm from "./LoginForm";
import useClickOutside from "@/hooks/useClickOutside";
import { CombinedProps } from "@/types/type";

const LoginMenu: FC<CombinedProps> = ({
  openLogin = false,
  setOpenLogin = () => {},
}) => {
  // استفاده از کاستوم هوک برای بستن منو هنگام کلیک روی عنصر خارجی
  const loginRef = useClickOutside<HTMLDivElement>(
    () => setOpenLogin(false),
    openLogin
  );

  return (
    <div ref={loginRef}>
      <div className="p-5 pl-4 pr-3 z-[1000] border-b-[0.1px] border-[#bcb8b8]">
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
