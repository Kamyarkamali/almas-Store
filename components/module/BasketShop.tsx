import React, { FC } from "react";
import CloseSvg from "../icon/CloseSvg";
import { CombinedProps } from "@/types/type";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import Link from "next/link";
// کاستوم هوک

const BasketShop: FC<CombinedProps> = ({ setOpenBasket = () => {} }) => {
  // استفاده از کاستوم هوک برای بستن منو هنگام کلیک روی عنصر خارجی
  //   const loginRef = useClickOutside<HTMLDivElement>(
  //     () => setOpenBasket(false),
  //     openBasket
  //   );

  return (
    <div>
      <div className="p-5 pl-4 pr-3 border-b-[0.1px] border-[#bcb8b8]">
        <div className="flex justify-between items-center">
          <p className="text-[18px] text-[#333333] font-bold">سبد خرید</p>
          <div
            className="flex items-center gap-2"
            onClick={() => setOpenBasket((prv) => !prv)}
          >
            <CloseSvg width="14px" height="13px" />
            <button className="text-[14px] font-bold text-[#333333]">
              بستن
            </button>
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center mt-[2rem]">
        <Image
          src={"/images/imagesBasketShop/shopBasket.jpg"}
          width={90}
          height={90}
          alt="سبد خرید"
        />
      </section>
      <div className="flex flex-col items-center pt-2">
        <p className="text-[14px] font-bold">هیچ محصولی در سبد خرید نیست.</p>
        <Link href={"/"}>
          <button
            onClick={() => setOpenBasket(false)}
            className="w-[126px] h-[36px] bg-[#D60444] text-[12px] mt-[1.3rem] font-bold rounded-md text-[#FFFF]"
          >
            بازگشت به فروشگاه
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasketShop;
