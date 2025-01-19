import React from "react";
import NavarForm from "../element/NavarForm";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "@/featcher/crtSlice";

function FormNavarSending() {
  const totalPrice = useSelector((state: any) => selectCartTotalPrice(state));

  return (
    <div>
      <div className="max-w-full w-[909px] h-[83px] border-[2px] border-[#d7d6d6] border-dashed">
        <div className="p-4">
          <p className="lg:text-[14px] text-[12px] text-[#777777] mb-3">
            در صورت رسیدن مبلغ خرید به 10.000.000 تومان مبلغ ارسال رایگان می شود
          </p>
          <NavarForm totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default FormNavarSending;
