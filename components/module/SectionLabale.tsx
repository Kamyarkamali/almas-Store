"use client";
import { dataLabales } from "@/data/data";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionLabale = () => {
  return (
    <div className="mySwiper bg-transparent w-full py-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop={true}
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
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="w-full"
      >
        {dataLabales.map((product) => (
          <SwiperSlide key={product.id}>
            <div className=" p-2 relative flex justify-center items-center">
              <img
                src={product.image}
                alt="لیبل ها"
                className="w-[144px] h-[86px] object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionLabale;
