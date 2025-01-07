import { FC } from "react";

import { Dispatch, SetStateAction } from "react";

interface ModaProductsProps {
  image: string;
  nameProduct: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const ModaProducts: FC<ModaProductsProps> = ({
  openModal,
  setOpenModal,
  image,
}) => {
  return (
    <div
      className={`${
        !openModal && "hidden"
      } fixed top-0 left-0 w-full h-full bg-black/55 backdrop-blur-md z-[200] flex items-center justify-center`}
    >
      {/* باکس مودال */}
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">عنوان مودال</h2>
        <p>محتوای مودال اینجا قرار می‌گیرد.</p>
        <img src={image} alt="/" />
        <button
          onClick={() => setOpenModal(false)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          بستن
        </button>
      </div>
    </div>
  );
};

export default ModaProducts;
