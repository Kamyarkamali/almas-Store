"use client";
import formatNumber from "@/helpers/replaceNumber";
import { Product } from "@/types/interFace";
import Image from "next/image";
import { useState } from "react";

import SearchSvg from "@/components/icon/SearchSvg";

const MainProducts = ({ products }: { products: Product[] }) => {
  if (!products || products.length === 0) {
    return (
      <p className="bg-red-400 p-1 text-center text-white rounded-sm">
        محصولی برای نمایش وجود ندارد.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-[3rem]">
      {products.map(
        ({ id, image, image2, nameProduct, price, Inventory, description }) => {
          const [currentImage, setCurrentImage] = useState(image);

          return (
            <div
              key={id}
              className="p-4 relative flex flex-col items-center bg-white border shadow-sm hover:shadow-lg rounded-md cursor-pointer transition-all duration-300 group"
              onMouseEnter={() => image2 && setCurrentImage(image2)}
              onMouseLeave={() => setCurrentImage(image)}
            >
              {/* تصویر محصول */}
              <div className="overflow-hidden rounded-md">
                <Image
                  src={currentImage}
                  alt={nameProduct}
                  width={187}
                  height={187}
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* نام محصول */}
              <p className="text-center text-[14px] text-[#333333] leading-7 mt-4 hover:text-[#777777] cursor-pointer duration-150">
                {nameProduct}
              </p>
              {/* قیمت */}
              <p
                className={
                  price
                    ? "text-center text-[13px] mt-2"
                    : "text-center text-[13px] mt-2 text-red-500"
                }
              >
                {price === 0 ? "موجود نیست" : formatNumber(price)} تومان
              </p>

              {/* توضیحات (نمایش هنگام هاور) */}
              <div className="absolute top-0 left-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300  backdrop-blur-lg text-[11px] text-gray-700 p-3 rounded-md shadow-lg">
                {description}
              </div>

              {/* دکمه‌های اضافی (نمایش هنگام هاور) */}
              <div className="absolute bottom-4 items-center left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-around gap-2">
                <button className="py-2 transition-colors">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/svgs/like.svg"
                    alt="faiverite"
                  />
                </button>
                <button className="w-[99px] h-[39px] py-2 bg-[#D60444] text-white text-[10px] hover:font-bold hover:duration-300 rounded-md transition-colors">
                  {Inventory > 0 ? "افزودن به سبد خرید" : "اطلاعات بیشتر"}
                </button>
                <button className="py-2  text-white text-sm rounded-md transition-colors">
                  <img
                    src="/svgs/searchs.svg"
                    alt="searchIcon"
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MainProducts;
