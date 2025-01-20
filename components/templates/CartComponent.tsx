"use client";
import { useCart } from "@/hooks/useCart";

import ArrowLeftCartSvg from "../icon/ArrowLeftCartSvg";
import ShoBasket from "@/components/shop/ShoBasket";
import SettlementComponent from "../shop/SettlementComponent";
import OrderCompletion from "../shop/OrderCompletion";
import { useState } from "react";
import Link from "next/link";

function CartComponent() {
  const { cart } = useCart();

  // حالت انتخابی
  const [selected, setSelected] = useState(1);

  return (
    <div>
      {cart.length === 0 && (
        <div className="flex justify-center items-center h-[300px]">
          <div>
            {cart.length === 0 && (
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold">
                  محصولی در سبد خرید وجود ندارد!
                </p>
                <Link
                  className="bg-[#D60444] p-2 flex justify-center w-full rounded-md text-white mt-3"
                  href={"/"}
                >
                  <button>برگشت به فروشگاه</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* منوی انتخاب */}
      <div
        className={`${
          cart.length > 0 ? "block" : "hidden"
        } bg-[#E8E8E8] text-[22px] gap-7 font-bold w-full lg:h-[157px] h-[56px] flex justify-center items-center transition-all duration-300 ease-linear`}
      >
        {/* گزینه‌های منو */}
        {[
          { id: 1, label: "سبد خرید", href: "/cart" },
          { id: 2, label: "تسویه حساب", href: "/checkout" },
          { id: 3, label: "تکمیل سفارش" },
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`text-[#777777]${
              selected === item.id ? "text-[#D60644] flex" : ""
            } flex gap-4 items-center cursor-pointer`}
          >
            <Link
              href={item.href || "#"}
              className={`${
                selected === item.id
                  ? "block md:border-b-[1px] border-gray-700"
                  : "hidden md:block"
              } lg:text-[18px] text-[15px]`}
            >
              {item.label}
            </Link>
            {/* آیکون */}
            <div className="md:block hidden">
              <ArrowLeftCartSvg />
            </div>
          </div>
        ))}
      </div>
      {/* نمایش کامپوننت ها براساس انتخاب مراحل خرید  */}
      {cart.length > 0 && (
        <section>
          {selected === 1 && <ShoBasket />}
          {selected === 2 && <SettlementComponent />}
          {selected === 3 && <OrderCompletion />}
        </section>
      )}
    </div>
  );
}

export default CartComponent;
