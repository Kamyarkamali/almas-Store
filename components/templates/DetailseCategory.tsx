"use client";
import formatNumber from "@/helpers/replaceNumber";
import { DetailseCategoryProps } from "@/types/interFace";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ShuffileSvg from "../icon/ShuffileSvg";

import useShareLink from "@/hooks/useShareLink";
import PasswordSvg from "@/components/icon/PasswordSvg";

const DetailseCategory: FC<DetailseCategoryProps> = ({ product }) => {
  const { shareLink } = useShareLink();

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
          <p className="text-gray-500">خانه</p>
        </Link>
        <p className="text-gray-500">/</p>
        <p className="text-gray-500">{category}</p>
        <p className="text-gray-500">/</p>
        <p className="text-gray-500">{category1}</p>
        <p className="hidden lg:block text-gray-500">/</p>
        <p className="hidden lg:block text-black">{nameProduct}</p>
      </nav>

      {/* بخش تصاویر */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
        {/* تصویر اصلی */}
        <div className="flex flex-col items-center relative w-full md:w-1/2 lg:w-1/3">
          <div className="relative w-full sm:w-[400px] h-[400px]">
            <TransformWrapper minScale={1} maxScale={3} wheel={{ step: 0.1 }}>
              <TransformComponent>
                <Image
                  src={mainImage}
                  width={350}
                  height={350}
                  alt={nameProduct}
                  className="w-full h-full object-cover"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          {/* تصاویر کوچک */}
          <div className="flex justify-center gap-4 mt-4">
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
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
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
        <div className="w-full md:w-1/2 lg:w-1/3 border rounded p-4">
          <p className="text-xl font-bold text-red-600">
            {Inventory > 0 ? formatNumber(price) + " تومان" : "ناموجود"}
          </p>
          {Inventory > 0 && (
            <section className="flex justify-between mt-4">
              <div className="flex items-center gap-2 border rounded h-10">
                <button className="border-l-2 w-8 text-sm hover:bg-red-600 hover:text-white">
                  -
                </button>
                <p className="text-sm">1</p>
                <button className="border-r-2 w-8 text-sm hover:bg-red-600 hover:text-white">
                  +
                </button>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                افزودن به سبد خرید
              </button>
            </section>
          )}
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
    </div>
  );
};

export default DetailseCategory;
