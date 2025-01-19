"use client";
import { selectCartTotalPrice } from "@/featcher/crtSlice";
import formatNumber from "@/helpers/replaceNumber";
import { useSelector } from "react-redux";

function ShopBasketComponent() {
  const totalPrice = useSelector((state: any) => selectCartTotalPrice(state));

  return (
    <div>
      <div className="border-[4px] border-[#eae7e7] lg:mr-5 p-5">
        <div>
          <p className="text-[22px] font-bold">جمع کل سبد خرید</p>
          <div className="flex items-center justify-between mt-[1.25rem]">
            <p className="font-bold text-[14px]">جمع کل</p>
            <p className="text-[14px] text-[#777777]">
              {formatNumber(totalPrice)} تومان
            </p>
          </div>

          {/* جدا کننده */}
          <div className="w-full border-[0.5px] mt-4"></div>

          <div className="flex items-center justify-between mt-[1.25rem]">
            <p className="font-bold text-[18px]">مجموع</p>
            <p className="text-[22px] font-bold text-[#D60644]">
              {formatNumber(totalPrice)} تومان
            </p>
          </div>
          <div className="flex justify-center mt-[2.43rem]">
            <button className="text-white bg-[#D60644] hover:bg-[#9f1e45] transition-colors duration-200 w-full p-3 rounded-md text-[14px]">
              ادامه جهت تسویه حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopBasketComponent;
