"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import IconBasket from "@/components/icon/IconBasket";
import datas from "@/public/json/endproduct.json";
import ShuffileSvg from "../icon/ShuffileSvg";
import LikeHeartSvg from "../icon/LikeHeartSvg";
import Link from "next/link";
import SearchSvg3 from "../icon/SearchSvg3";
import { useFavorites } from "@/context/FavoritesProvider";
import { Toaster, toast } from "react-hot-toast";
import { NavigationOptions } from "swiper/types";
import { useCart } from "@/hooks/useCart";
import { Altet } from "@/types/enums";

// مودال برای نمایش جزئیات محصول
const ModaProducts = ({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">جزئیات محصول</h2>
        <img
          src={product.image}
          alt={product.nameProduct}
          className="w-full h-auto mb-4"
        />
        <h3 className="text-lg font-semibold">{product.nameProduct}</h3>
        <p>{product.description}</p>
        <p className="mt-2 text-xl">{product.price} تومان</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
        >
          بستن
        </button>
      </div>
    </div>
  );
};

const SectionMotherBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // وضعیت مودال
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // محصول انتخاب‌شده
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { addFavorite } = useFavorites();
  // ترکیب ریداس و کاستوم هوک برای نمایش مقادیر سبد خرید
  const { addProduct } = useCart();

  // اضافه کردن محول به سبد خرید

  const addProducts = (product: any) => {
    addProduct(product);
    toast.success(Altet.ADDED_PRODUCT);
  };

  const handleModalOpen = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const data = datas.filter((item: any) => item.category === "مادربرد");
  return (
    <div className="w-full rounded-md shadow-lg mx-auto mt-[2rem] h-auto bg-[#FFFFFF] items-center relative px-4">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
          type: "bullets",
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigationParams = swiper.params
            .navigation as NavigationOptions;
          navigationParams.prevEl = prevRef.current;
          navigationParams.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-8 mt-16 flex flex-col items-center relative group">
              {/* تصویر محصول */}
              <div className="relative overflow-hidden h-[171px] group flex justify-center w-full">
                <Link href={`/product/${product.id}`}>
                  {/* تصویر اصلی */}
                  <img
                    src={product.image}
                    alt={product.nameProduct}
                    className="absolute inset-0 w-full h-full object-contain rounded-md transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                  />
                  {/* تصویر دوم */}
                  <img
                    src={product.image2}
                    alt={product.nameProduct}
                    className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </Link>
              </div>

              {/* نام محصول */}
              <h3 className="mt-2 text-center text-[12px] lg:text-[14px]">
                {product.nameProduct}
              </h3>
              <p className="text-center mt-4 text-[12px] lg:text-[14px]">
                {product.price} تومان
              </p>

              {/* باکس گزینه‌ها */}
              <div className="absolute bottom-[6rem] w-[185px] justify-around left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out p-2 flex items-center z-10">
                <div
                  onClick={() => addProducts(product)}
                  className="cursor-pointer"
                >
                  <IconBasket />
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => handleModalOpen(product)}
                >
                  {/* فعال‌سازی مودال */}
                  <SearchSvg3 />
                </div>

                <div className="cursor-pointer">
                  <ShuffileSvg />
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => addFavorite(product)}
                >
                  <LikeHeartSvg />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* نمایش مودال */}
      {isModalOpen && selectedProduct && (
        <ModaProducts product={selectedProduct} onClose={handleModalClose} />
      )}

      {/* تنظیمات pagination */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 z-10">
        <div className="swiper-pagination" />
      </div>

      {/* فلش‌های ناوبری کاستوم */}
      <div className="absolute flex items-center justify-between w-full top-0 left-0 space-x-2 p-2 border-b-[1px] z-10">
        <div className="p-3">
          <h3 className="text-[22px] font-bold">مادربرد </h3>
        </div>
        <div className="flex items-center">
          <button
            ref={prevRef}
            className="text-2xl text-gray-500 hover:text-black transition-transform"
          >
            <img
              className="w-[30px] rotate-180"
              src="/svgs/arrowlefslider.svg"
              alt="left"
            />
          </button>
          <button
            ref={nextRef}
            className="text-2xl text-gray-500 hover:text-black transition-transform"
          >
            <img
              className="w-[30px]"
              src="/svgs/arrowlefslider.svg"
              alt="right"
            />
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SectionMotherBoard;
