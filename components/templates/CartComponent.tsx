"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";

import ArrowLeftCartSvg from "../icon/ArrowLeftCartSvg";
import ShoBasket from "@/components/shop/ShoBasket";
import SettlementComponent from "../shop/SettlementComponent";
import OrderCompletion from "../shop/OrderCompletion";

function CartComponent() {
  const { cart } = useCart();
  const router = useRouter();

  // حالت انتخابی
  const [selected, setSelected] = useState(1);

  // بررسی وجود محصولات در سبد خرید
  useEffect(() => {
    if (!cart || cart.length === 0) {
      router.push("/");
    } else {
      return;
    }
  }, [cart, router]);

  return (
    <div>
      {cart.length === 0 && <p>محصولی در سبد خرید وجود ندارد!</p>}

      {/* منوی انتخاب */}
      <div className="bg-[#E8E8E8] text-[22px] gap-7 font-bold w-full lg:h-[157px] h-[56px] flex justify-center items-center transition-all duration-300 ease-linear">
        {/* گزینه‌های منو */}
        {[
          { id: 1, label: "سبد خرید" },
          { id: 2, label: "تسویه حساب" },
          { id: 3, label: "تکمیل سفارش" },
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`text-[#777777]${
              selected === item.id ? "text-[#D60644] flex" : ""
            } flex gap-4 items-center cursor-pointer`}
          >
            <p
              className={`${
                selected === item.id
                  ? "block md:border-b-[1px] border-gray-700"
                  : "hidden md:block"
              } lg:text-[18px] text-[15px]`}
            >
              {item.label}
            </p>
            {/* آیکون */}
            <div className="md:block hidden">
              <ArrowLeftCartSvg />
            </div>
          </div>
        ))}
      </div>
      {/* نمایش کامپوننت ها براساس انتخاب مراحل خرید  */}
      <section>
        <ShoBasket />
        <SettlementComponent />
        <OrderCompletion />
      </section>
    </div>
  );
}

export default CartComponent;
