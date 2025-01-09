"use client";
import { useFavorites } from "@/context/FavoritesProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";

type FavoriteItem = {
  id?: string;
  name?: string;
  image?: string; // اضافه کردن تصویر برای آیتم‌ها
};

function WishlistComponent() {
  const { favorites, removeFavorite } = useFavorites();

  console.log(favorites);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      {favorites.length === 0 ? (
        <div className="text-center">
          <Image
            className="bg-transparent w-[250px] mx-auto animate-pulse"
            src={"/images/imageHero/heart.png"}
            width={250}
            height={250}
            alt="علاقه‌مندی‌ها"
          />
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-700 mt-6">
            لیست علاقه‌مندی‌ها خالی است.
          </h3>
          <p className="text-gray-500 text-lg md:text-xl mt-2">
            محصولات مورد علاقه خود را به لیست اضافه کنید!
          </p>
          <Link href={"/"}>
            <button className="mt-6 px-8 py-3 bg-[#D60644] text-white rounded-lg shadow-lg hover:bg-[#b30536] transition-all">
              بازگشت به فروشگاه
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            لیست علاقه‌مندی‌های شما
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((item, index) => (
              <div
                key={index} // بهتر است از یک کلید منحصر به فرد استفاده کنید
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-gray-800">{item}</h4>
                <button
                  onClick={() => removeFavorite(item)} // حذف آیتم
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                >
                  حذف از لیست
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={"/"}>
              <button className="px-6 py-3 bg-[#D60644] text-white rounded-lg shadow-lg hover:bg-[#b30536] transition-all">
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default WishlistComponent;
