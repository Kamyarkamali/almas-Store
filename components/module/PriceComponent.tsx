import { useFavorites } from "@/context/FavoritesProvider";
import formatNumber from "@/helpers/replaceNumber";
import { Props } from "@/types/interFace";
import React, { FC } from "react";
import ShuffileSvg from "../icon/ShuffileSvg";
import { Toaster } from "react-hot-toast";

const PriceComponent: FC<Props> = ({ Inventory, nameProduct, price }) => {
  const { addFavorite } = useFavorites();
  return (
    <div className="lg:w-[335px] sticky top-10 h-fit shadow-md rounded-md hover:shadow-lg transition-all  duration-300 cursor-pointer">
      <div className="p-4">
        <p className="text-[16px] lg:text-[21.7px] text-[#D60644] font-bold">
          {formatNumber(price) + " تومان"}
        </p>
        <section className="flex flex-col xl:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 border-[2px] border-[#faf6f6] rounded-md h-10">
            <button className="border-l-2 h-full rounded-md transition-all duration-300 rounded-l-none w-8 text-sm hover:bg-red-600 hover:text-white">
              -
            </button>
            <p className="text-sm">1</p>
            <button className="border-r-2 rounded-md transition-all duration-300 rounded-r-none w-8 h-full text-sm hover:bg-red-600 hover:text-white">
              +
            </button>
          </div>
          <button
            disabled={Inventory <= 0}
            className="bg-[#D60644] disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-[#ab0637] transition-all duration-200 text-[14px] text-white w-[175px] px-4 py-2 rounded"
          >
            {Inventory > 0 ? "افزودن به سبد خرید" : "موجود نیست"}
          </button>
        </section>

        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 mt-4 pr-5">
            <ShuffileSvg width="25px" height="25px" />
            <p className="text-[12px] lg:text-[14px] font-bold">مقایسه</p>
          </div>
          <div className="flex items-center gap-2 mt-4 pr-5">
            <img
              onClick={() => addFavorite(nameProduct)}
              src="/svgs/like.svg"
              alt="like"
              className="w-[20px] cursor-pointer animate-pop"
            />
            <p
              onClick={() => addFavorite(nameProduct)}
              className="text-[12px] lg:text-[14px] font-bold"
            >
              افزدون به علاقه مندی ها
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default PriceComponent;
