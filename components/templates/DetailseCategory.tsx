"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

import formatNumber from "@/helpers/replaceNumber";
import { DetailseCategoryProps } from "@/types/interFace";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ShuffileSvg from "../icon/ShuffileSvg";
import useShareLink from "@/hooks/useShareLink";
import { useFavorites } from "@/context/FavoritesProvider";
import DesctComments from "../module/DesctComments";

import { Box } from "@/data/data";

const DetailseCategory: FC<DetailseCategoryProps> = ({ product }) => {
  const { shareLink } = useShareLink();

  const { addFavorite } = useFavorites();

  const {
    category,
    category1,
    nameProduct,
    image,
    image2,
    image3,
    image4,
    price,
    Inventory,
  } = product;

  const [mainImage, setMainImage] = useState(image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image, image2, image3, image4].filter((img) => img);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="p-4">
      {/* مسیر صفحه */}
      <nav className="flex flex-wrap items-center text-sm gap-1">
        <Link href={"/"}>
          <p className="text-gray-500 text-[12px] lg:text-[14px]">خانه</p>
        </Link>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">/</p>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">{category}</p>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">/</p>
        <p className="text-gray-500 text-[12px] lg:text-[14px]">{category1}</p>
        <p className="hidden lg:block text-gray-500 text-[12px] lg:text-[14px]">
          /
        </p>
        <p className="hidden lg:block text-black text-[12px] lg:text-[14px]">
          {nameProduct}
        </p>
      </nav>

      {/* بخش تصاویر */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
        {/* تصویر اصلی */}
        <div className="flex flex-col lg:flex-row-reverse items-center relative w-full md:w-1/2 lg:w-1/3">
          <div className="relative w-full sm:w-[400px] h-[400px]">
            <TransformWrapper minScale={1} maxScale={3} wheel={{ step: 0.1 }}>
              <TransformComponent>
                <Image
                  src={mainImage}
                  width={350}
                  height={350}
                  alt={nameProduct}
                  className="w-full border rounded-md h-full object-cover"
                />
              </TransformComponent>
            </TransformWrapper>
            <div
              onClick={openModal}
              className="absolute bottom-8 right-0 bg-white hover:shadow-lg shadow-md transition-all duration-200  rounded-[100%] cursor-pointer"
            >
              <img
                className="w-[30px] hover:shadow-lg shadow-md transition-all duration-200  rounded-[100%] cursor-pointer"
                src="/images/imagesHomePage/towwarrow.jpg"
              />
            </div>
          </div>

          {/* تصاویر کوچک */}
          <div className="flex lg:flex-col items-center justify-center lg:ml-4 gap-4 mt-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`p-1 border rounded ${
                  mainImage === img ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  width={100}
                  height={100}
                  alt={`thumbnail-${index}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* اطلاعات محصول */}
        {/* جدا کننده */}
        <div className="border-r-2"></div>

        <div className="lg:flex hidden flex-col w-full md:w-1/2 lg:w-1/3">
          <p className="text-lg font-bold text-center lg:text-start">
            {nameProduct}
          </p>

          <div className="flex gap-1 text-sm mt-4">
            <p>دسته بندی:</p>
            <p className="text-gray-500">{category}</p>
            <p className="text-gray-500">,</p>
            <p className="text-gray-500">{category1}</p>
          </div>

          <section className="flex items-center mt-4 gap-2 w-full justify-start">
            <p className="text-sm">اشتراک گذاری:</p>
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
        </div>

        {/* قیمت و دکمه‌ها */}
        <div className="w-full h-fit md:w-1/2 lg:w-1/4 border-[4px] border-[#D9D9D9] rounded-sm p-4">
          <p className="text-xl font-bold text-red-600">
            {Inventory > 0 ? formatNumber(price) + " تومان" : "ناموجود"}
          </p>
          <p className="text-[14px] text-[#D60644] mt-3">
            {Inventory > 0
              ? `${Inventory} تعداد در انبار موجود است`
              : "موجود نیست"}
          </p>
          <section
            className={`${
              Inventory > 0 ? "flex" : "hidden"
            } flex flex-col xl:flex-row items-center justify-center gap-4 mt-4`}
          >
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
                onClick={() => addFavorite(product.nameProduct)}
                src="/svgs/like.svg"
                alt="like"
                className="w-[20px] cursor-pointer"
              />
              <p
                onClick={() => addFavorite(product.nameProduct)}
                className="text-[14px] font-bold"
              >
                افزدون به علاقه مندی ها
              </p>
            </div>
          </div>
          {/* باکس مشاهده */}
          <div
            className={`${
              Inventory > 0 ? "flex" : "hidden"
            } flex justify-center mt-[2rem]`}
          >
            <div className="w-[265px] h-[74px] bg-[#FAE6EC] p-3">
              <p className="text-[14px] text-[#777777]">
                {" "}
                <span className="font-bold text-[#000000]">2</span> نفر در حال
                مشاهده این محصول هستند!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* مودال تصویر */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative bg-black p-4 rounded-lg w-full h-full md:w-11/12">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded"
            >
              بستن
            </button>
            <Image
              src={images[currentImageIndex]}
              alt="Modal Image"
              width={800}
              height={800}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={goToPreviousImage}
                className="bg-gray-500 text-white p-2 rounded"
              >
                قبلی
              </button>
              <button
                onClick={goToNextImage}
                className="bg-gray-500 text-white p-2 rounded"
              >
                بعدی
              </button>
            </div>
          </div>
        </div>
      )}

      {/* جدا کننده */}

      <div className="w-full border-b-[1px] border-gray-300"></div>

      {/* قسمت روش های  خرید */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 py-2 justify-items-start  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:justify-items-center">
        {Box.map(({ image, title, desc }) => (
          <div className="flex items-center gap-2">
            <img
              className="w-[70px] h-[43px] lg:w-[80px] lg:h-[51px] object-contain"
              src={image}
              alt={title}
            />
            <div className="flex flex-col lg:items-start gap-2">
              <p className="text-[12px] lg:text-[16px] font-bold">{title}</p>
              <p className="text-[10px] lg:text-[12px] text-[#777777]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* قسمت کامنت ها */}
      <DesctComments product={product} />

      <Toaster />
    </div>
  );
};

export default DetailseCategory;
