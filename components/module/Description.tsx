import React, { FC } from "react";
import { Props } from "@/types/interFace";
import Link from "next/link";
import useShareLink from "@/hooks/useShareLink";
import PriceComponent from "./PriceComponent";

const Description: FC<Props> = ({
  price,
  Inventory,
  nameProduct,
  category,
}) => {
  const { shareLink } = useShareLink();

  return (
    <section className="flex md:flex-row flex-col items-center lg:items-start justify-between gap-3">
      <div className="flex flex-col gap-2">
        <span className="text-[12px] lg:text-[14px] w-fit bg-red-400 p-2 text-white">
          به علت نبودن اطلاعات تا آماده شدن بک اند اطلاعات ساختگی است
        </span>
        <p className="text-[12px] lg:text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
        <p className="text-[12px] lg:text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
        <p className="text-[12px] lg:text-[14px] hover:text-red-500 duration-300 transition-colors cursor-pointer text-[#777777]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </p>
      </div>

      {/* لیست دسته بندی ها باید اینجا قرار بگیره اما به علت زشت کردن یوآی فعلا حذف شده */}

      <nav className="flex flex-wrap items-center text-sm gap-1 md:hidden">
        <p>دسته:</p>
        <Link href={"/"}>
          <p className="text-gray-500 text-[12px] lg:text-[14px]">خانه</p>
        </Link>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">/</p>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">{category}</p>
        <p className="hidden lg:block text-gray-500 text-[12px] lg:text-[14px]">
          /
        </p>
        <p className="hidden lg:block text-black text-[12px] lg:text-[14px]">
          {nameProduct}
        </p>
        <section className="flex items-center mt-4 gap-2 w-full justify-start">
          <p className="text-[12px] lg:text-[14px]">اشتراک گذاری:</p>
          <img
            onClick={() => shareLink("telegram")}
            className="w-4 cursor-pointer"
            src="/svgs/telegram.svg"
            alt="telegram"
          />
          <img
            onClick={() => shareLink("whatsapp")}
            className="w-4 cursor-pointer"
            src="/svgs/watsApp.svg"
            alt="whatsapp"
          />
        </section>
      </nav>

      {/* قسمت قیمت */}
      <PriceComponent
        price={price}
        Inventory={Inventory}
        category={category}
        nameProduct={nameProduct}
      />
    </section>
  );
};

export default Description;
