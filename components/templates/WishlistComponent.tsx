"use client";
import { useFavorites } from "@/context/FavoritesProvider";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

const WishlistComponent: FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 px-4 py-8">
      {favorites.length === 0 ? (
        <div className="text-center">
          <Image
            className="w-[150px] sm:w-[200px] md:w-[250px] mx-auto animate-pulse"
            src={"/images/imageHero/heart.png"}
            width={250}
            height={250}
            alt="علاقه‌مندی‌ها"
          />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mt-6">
            لیست علاقه‌مندی‌ها خالی است.
          </h3>
          <p className="text-gray-600 text-lg sm:text-xl mt-2">
            محصولات مورد علاقه خود را به لیست اضافه کنید!
          </p>
          <Link href={"/"}>
            <button className="mt-6 px-8 py-3 bg-[#D60644] text-white rounded-lg shadow-lg hover:bg-[#b30536] transition-all duration-300">
              بازگشت به فروشگاه
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-6xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            لیست علاقه‌مندی‌های شما
          </h3>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item: any, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              >
                <Image
                  className="w-fit h-[150px] sm:h-[180px] md:h-[200px] object-cover rounded-md mb-4"
                  src={item.image || "/images/default-product.png"}
                  alt={item.name || "Product"}
                  width={200}
                  height={200}
                />
                <h4 className="text-[12px] lg:text-[14px] font-semibold text-gray-800 mb-4">
                  {item.description}
                </h4>
                <button
                  onClick={() => removeFavorite(item)}
                  className="px-6 text-[12px] py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  حذف از لیست
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={"/"}>
              <button className="px-8 py-3 bg-[#D60644] text-white rounded-lg shadow-lg hover:bg-[#b30536] transition-all duration-300">
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default WishlistComponent;
