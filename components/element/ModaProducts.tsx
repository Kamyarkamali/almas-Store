import Link from "next/link";
import { FC } from "react";

import { Dispatch, SetStateAction } from "react";
import CloseSvg from "../icon/CloseSvg";

interface ModaProductsProps {
  image: string;
  nameProduct: string;
  category: string;
  category1: string;
  description: string;
  openModal: boolean;
  id: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModaProducts: FC<ModaProductsProps> = ({
  openModal,
  setOpenModal,
  image,
  nameProduct,
  category,
  category1,
  description,
  id,
}) => {
  return (
    <div
      className={`${
        !openModal && "hidden"
      } fixed top-0 left-0 w-full h-full bg-black/55 backdrop-blur-md z-[200] flex items-center justify-center`}
    >
      {/* باکس مودال */}
      <div className="bg-white p-6 flex flex-col items-center rounded-md shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        {/* بستن مودال */}
        <div
          className="flex justify-end w-full cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <CloseSvg width="17px" height="17px" />
        </div>
        <img src={image} alt={description} />
        {/* دکمه دیدن جزئیات */}
        {/* جدا کننده */}
        <div className="w-full border-t-[1px] border-[#000000] mt-2 py-2"></div>
        <div className="w-full">
          <Link
            href={`/product-category/${id}`}
            className="bg-[#D60444] w-full inline-block text-center text-white py-2 px-4 rounded-md"
          >
            دیدن جزئیات
          </Link>
        </div>
        <div className="w-full">
          <p className="w-[400px] mt-4 text-[14px] font-bold text-right">
            {nameProduct}
          </p>
        </div>
        {/* دسته بندی های صفحه */}
        <section className="flex gap-2 mt-2 justify-start w-full *:text-[14px]">
          <p>دسته بندی:</p>
          <p className="text-[#777777]">{category}</p>
          <p className="text-[#777777]">,</p>
          <p className="text-[#777777]">{category1}</p>
        </section>

        {/* قسمت اشتراک گذاری */}
        <section className="flex items-center mt-[1rem] gap-2 w-full justify-start">
          <p className="text-[14px]">اشتراک گذاری:</p>
          <img
            className="w-[20px] cursor-pointer"
            src="/svgs/telegram.svg"
            alt="telegram"
          />
          <img
            className="w-[20px] cursor-pointer"
            src="/svgs/watsApp.svg"
            alt="whatsapp"
          />
        </section>
      </div>
    </div>
  );
};

export default ModaProducts;
