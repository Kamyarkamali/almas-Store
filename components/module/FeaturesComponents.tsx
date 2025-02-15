import formatNumber from "@/helpers/replaceNumber";
import React from "react";

const FeaturesComponents = () => {
  return (
    <div className="mt-5 p-4 w-full ">
      <div className="space-y-4">
        <div className="flex p-4 rounded-sm w-fit hover:scale-105 duration-300 cursor-pointer flex-col lg:flex-row items-start lg:items-center gap-2 odd:bg-gray-100 even:bg-gray-200">
          <p className="font-semibold text-sm lg:text-base text-gray-600">
            اسم محصول:
          </p>
          <p className="text-sm lg:text-base text-gray-800">شارژر لپ تاپ</p>
        </div>

        <div className="flex p-4 rounded-sm w-fit hover:scale-105 duration-300 cursor-pointer flex-col lg:flex-row items-start lg:items-center gap-2 odd:bg-gray-100 even:bg-gray-200">
          <p className="font-semibold text-sm lg:text-base text-gray-600">
            قیمت:
          </p>
          <p className="text-sm lg:text-base text-gray-800">
            {formatNumber(1000000)}تومان
          </p>
        </div>

        <div className="flex p-4 rounded-sm w-fit hover:scale-105 duration-300 cursor-pointer flex-col lg:flex-row items-start lg:items-center gap-2 odd:bg-gray-100 even:bg-gray-200">
          <p className="font-semibold text-sm lg:text-base text-gray-600">
            توضیحات کوتاه:
          </p>
          <p className="text-sm lg:text-base text-gray-800">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>

        <div className="flex p-4 rounded-sm w-fit hover:scale-105 duration-300 cursor-pointer flex-col lg:flex-row items-start lg:items-center gap-2 odd:bg-gray-100 even:bg-gray-200">
          <p className="font-semibold text-sm lg:text-base text-gray-600">
            توضیحات کامل:
          </p>
          <p className="text-sm lg:text-base text-gray-800">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponents;
