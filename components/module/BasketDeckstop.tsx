import Image from "next/image";
import Link from "next/link";
import CloseSvg from "../icon/CloseSvg";
import { FC } from "react";
import { OpenBasket2 } from "@/types/interFace";

const BasketDeckstop: FC<OpenBasket2> = ({ openBasket, setOpenBasket }) => {
  return (
    <>
      <div
        className={`${
          openBasket ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-40 transition-all duration-300`}
        onClick={() => setOpenBasket(false)}
      ></div>

      <div
        className={`w-[340px] h-screen bg-white fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
          openBasket ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="p-5 pl-4 pr-3 border-b-[0.1px] border-[#bcb8b8]">
          <div className="flex justify-between items-center">
            <p className="text-[18px] text-[#333333] font-bold">سبد خرید</p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpenBasket(false)}
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
            <button className="w-[126px] h-[36px] bg-[#D60444] text-[12px] mt-[1.3rem] font-bold rounded-md text-[#FFFF]">
              بازگشت به فروشگاه
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BasketDeckstop;
