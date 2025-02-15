"use client";

import { FC, useState } from "react";
import Description from "./Description";
import Comments from "./Comments";
import { DetailseCategoryProps } from "@/types/interFace";
import FeaturesComponents from "./FeaturesComponents";

const DesctComments: FC<DetailseCategoryProps> = ({ product }) => {
  const { price, stock, nameProduct, category } = product || {};

  const [active, setActive] = useState<"توضیحات" | "ویژگی ها" | "نظرات">(
    "توضیحات"
  );
  const handleActive = (value: "توضیحات" | "ویژگی ها" | "نظرات") => {
    setActive(value);
  };

  return (
    <div className="mt-[2.68rem]">
      <div className="flex items-center gap-5">
        <p
          onClick={() => handleActive("توضیحات")}
          className={`relative text-[12px] lg:text-[14px] py-2 lg:py-0 cursor-pointer ${
            active === "توضیحات" ? "text-red-500" : ""
          }`}
        >
          توضیحات
          <span
            className={`absolute  bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
              active === "توضیحات" ? "w-full" : "w-0"
            }`}
          ></span>
        </p>
        <p
          onClick={() => handleActive("ویژگی ها")}
          className={`relative text-[12px] lg:text-[14px] py-2 lg:py-0 cursor-pointer ${
            active === "ویژگی ها" ? "text-red-500" : ""
          }`}
        >
          ویژگی ها
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
              active === "ویژگی ها" ? "w-full" : "w-0"
            }`}
          ></span>
        </p>
        <p
          onClick={() => handleActive("نظرات")}
          className={`relative text-[12px] lg:text-[14px] py-2 lg:py-0 cursor-pointer ${
            active === "نظرات" ? "text-red-500" : ""
          }`}
        >
          نظرات (0)
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
              active === "نظرات" ? "w-full" : "w-0"
            }`}
          ></span>
        </p>
      </div>
      <div className="mt-4">
        {active === "توضیحات" && (
          <Description
            price={price}
            Inventory={stock}
            nameProduct={nameProduct}
            category={category}
          />
        )}
        {active === "نظرات" && (
          <Comments
            price={price}
            Inventory={stock}
            nameProduct={nameProduct}
            category={category}
          />
        )}
        {active === "ویژگی ها" && <FeaturesComponents />}
      </div>
    </div>
  );
};

export default DesctComments;
