import formatNumber from "@/helpers/replaceNumber";
import React, { FC, useState } from "react";
import ShuffileSvg from "../icon/ShuffileSvg";
import { useFavorites } from "@/context/FavoritesProvider";
import { Props } from "@/types/interFace";

const Description: FC<Props> = ({ price, Inventory, nameProduct }) => {
  const { addFavorite } = useFavorites();

  return (
    <section className="flex md:flex-row flex-col items-center lg:items-start justify-between gap-3">
      <div className="flex flex-col gap-2">
        <span className="text-[14px] w-fit bg-red-400 p-2 text-white">
          به علت نبودن اطلاعات تا آماده شدن بک اند اطلاعات ساختگی است
        </span>
        <p className="text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
        <p className="text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
        <p className="text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
      </div>
      {/* قسمت قیمت */}
      <div className="w-[335px] h-[205px] shadow-md rounded-md hover:shadow-lg transition-all  duration-300 cursor-pointer">
        <div className="p-4">
          <p className="text-[21.7px] text-[#D60644] font-bold">
            {formatNumber(price) + " تومان"}
          </p>
          <section className="flex flex-col xl:flex-row items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 border-[2px] border-[#D9D9D9] rounded-md h-10">
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
              <p className="text-[14px] font-bold">مقایسه</p>
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
                className="text-[14px] font-bold"
              >
                افزدون به علاقه مندی ها
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
