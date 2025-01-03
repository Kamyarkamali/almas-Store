"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Slide } from "@/types/interFace";
import { api } from "@/configs/api";
import Image from "next/image";
import Link from "next/link";
import ArrowRightSvg from "../icon/ArrowRightSvg";
import ArrowLeftSlider from "../icon/ArrowLeftSlider";

const HeroSlider = () => {
  const [data, setData] = useState<Slide[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/json/hero.json");
        setData(res.data);

        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.autoplay.start();
        }
      } catch (error) {
        console.error("مشکل در گرفتن دیتای عکس‌های اسلایدر:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[3.06rem] hidden lg:block px-4">
      <div className="relative w-full max-w-[1440px] mx-auto shadow-lg shadow-gray-400 rounded-lg overflow-hidden">
        <Swiper
          ref={swiperRef}
          observeParents={true}
          observeSlideChildren={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[500px] md:h-[590px] flex items-center justify-center">
                <Link href={slide.paths}>
                  <Image
                    width={1367}
                    height={590}
                    src={slide.image}
                    alt={slide.description}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* خطوط بالا و پایین */}
        <div className="absolute top-0 left-0 w-full h-[34px] bg-white z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[34px] bg-white z-20 flex items-center justify-center">
          <div className="custom-pagination flex gap-2 justify-center"></div>
        </div>
        {/* دکمه‌های سفارشی */}
        <button className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-30">
          <ArrowLeftSlider width="25px" height="25px" fill="#D60444" />
        </button>
        <button className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-30">
          <ArrowRightSvg width="25px" height="25px" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
