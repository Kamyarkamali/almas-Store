"use client";
import { products } from "@/data/data";
import formatNumber from "@/helpers/replaceNumber";
import { usePathname } from "next/navigation";
import React from "react";

function Myorders() {
  const router = usePathname();

  return (
    <div className="border w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4">
      {/* عنوان و مشاهده بیشتر */}
      <div className="flex items-center justify-between">
        <p className="text-[16px] md:text-[18px] font-bold border-b-2 border-blue-700">
          {router === "/dashboard/profile"
            ? "سفارش های من"
            : router === "/dashboard/faiverites"
            ? "کالاهای پسندیده"
            : ""}
        </p>
        <button className="text-[14px] md:text-[16px] text-blue-600 font-bold hover:underline">
          مشاهده بیشتر
        </button>
      </div>

      {/* لیست محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#ffffff] rounded-lg p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover"
            />
            <div className="flex flex-col items-start gap-2 text-sm sm:text-base text-white">
              <p className="font-semibold">{product.name}</p>
              <p className="text-xs sm:text-sm text-gray-800">
                {product.warranty}
              </p>
              <del className="text-gray-800">
                {formatNumber(product.oldPrice)} تومان
              </del>
              <p className="text-green-500 font-bold">
                {formatNumber(product.newPrice)} تومان
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myorders;
