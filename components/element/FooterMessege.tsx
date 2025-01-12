"use client";
import { useEffect, useState } from "react";
import CloseSvg2 from "../icon/CloseSvg2";

function FooterMessege() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // از بین رفتن مسیج فوتر بعد از 3 ثانیه
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  });

  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="w-full h-[80px] lg:h-[60px] z-40 bg-[#D60444] fixed bottom-0 flex items-center justify-between">
          {/* <div>1</div> */}
          <p className="text-[14px] pr-8 leading-6 pl-8 font-bold text-center w-full md:text-[14px] text-white">
            جهت سفارشات سازمانی ، فاکتور رسمی و پیش فاکتور با شماره 02146138518
            تماس حاصل فرمایید.
          </p>
          <div
            onClick={handleOpen}
            className="w-[60px] hover:bg-[#c12453] transition-all duration-300 cursor-pointer h-full flex items-center justify-center bg-[#b21343]"
          >
            <CloseSvg2 width="16px" height="16px" />
          </div>
        </div>
      )}
    </>
  );
}

export default FooterMessege;
