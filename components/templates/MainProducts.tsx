"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";

// interface
import { Product } from "@/types/interFace";
// helpers
import formatNumber from "@/helpers/replaceNumber";

// component
import ModaProducts from "../element/ModaProducts";
import { useFavorites } from "@/context/FavoritesProvider";
import { useCart } from "@/hooks/useCart";
import { Altet } from "@/types/enums";

const ProductCard = ({
  product,
  setSelectedProduct,
  setOpenModal,
}: {
  product: Product;
  setSelectedProduct: (product: Product) => void;
  setOpenModal: (value: boolean) => void;
}) => {
  const [currentImage] = useState(product.image);
  const { addFavorite } = useFavorites();

  // استفاده  از کاستومم  هوک  و  ریداکس- دخیره مقادیر در لوکال استوریج
  const { addProduct } = useCart();

  const addProducts = (product: any) => {
    addProduct(product);
    toast.success(Altet.ADDED_PRODUCT);
  };

  return (
    <div className="p-4 relative flex flex-col items-center bg-white border shadow-sm hover:shadow-lg rounded-md cursor-pointer transition-all duration-300 group">
      {/* تصویر محصول */}
      <div className="overflow-hidden rounded-md">
        <Link href={`/product/${product.id}`}>
          <Image
            src={currentImage}
            alt={product.nameProduct}
            width={187}
            height={187}
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
      </div>
      {/* نام محصول */}
      <p className="text-center text-[14px] text-[#333333] leading-7 mt-4 hover:text-[#777777] cursor-pointer duration-150">
        {product.nameProduct}
      </p>
      <div
        className={`${
          product.discount
            ? "text-[10px] bg-green-600 text-white py-1 px-2 rounded-md"
            : ""
        } `}
      >
        <p>{product.discount === true ? "تخفیف 10 %" : ""}</p>
      </div>
      {/* قیمت */}
      <p
        className={
          product.price
            ? "text-center text-[13px] mt-2"
            : "text-center text-[13px] mt-2 text-red-500"
        }
      >
        {product.price === 0 ? "موجود نیست" : formatNumber(product.price)} تومان
      </p>

      {/* توضیحات (نمایش هنگام هاور) */}
      <div className="absolute top-0 left-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300  backdrop-blur-lg text-[11px] text-gray-700 p-3 rounded-md shadow-lg">
        {product.description}
      </div>

      {/* دکمه‌های  (نمایش هنگام هاور) */}
      <div className="absolute bottom-4 items-center left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-around gap-2">
        <button
          className="py-2 transition-colors"
          onClick={() => addFavorite(product)}
        >
          <img
            className="w-[20px] h-[20px]"
            src="/svgs/like.svg"
            alt="faiverite"
          />
        </button>
        {product.Inventory > 0 ? (
          <button
            onClick={() => addProducts(product)}
            className="w-[99px] h-[39px] py-2 bg-[#D60444] text-white text-[10px] hover:font-bold hover:duration-300 rounded-md transition-colors"
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <Link href={`/product/${product.id}`}>
            <button className="w-[99px] h-[39px] py-2 bg-[#D60444] text-white text-[10px] hover:font-bold hover:duration-300 rounded-md transition-colors">
              اطلاعات بیشتر
            </button>
          </Link>
        )}
        <section className="relative">
          <button className="py-2 text-white text-sm rounded-md transition-colors">
            <img
              onClick={() => {
                setSelectedProduct(product); // ذخیره اطلاعات محصول
                setOpenModal(true); // باز کردن مودال
              }}
              src="/svgs/searchs.svg"
              alt="searchIcon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </section>
      </div>
    </div>
  );
};

const MainProducts = ({ products }: { products: Product[] }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [show, setShow] = useState<Product[]>(products); // مقدار اولیه برابر با تمام محصولات
  const { checkbox, checkbox2 } = useFavorites();

  useEffect(() => {
    if (checkbox || checkbox2) {
      const filtered = products.filter(
        (item) =>
          (checkbox ? item.discount === checkbox : true) &&
          (checkbox2 ? item.Inventory > 0 : true)
      );
      setShow(filtered);
    } else {
      setShow(products);
    }
  }, [checkbox, checkbox2, products]);

  if (!show || show.length === 0) {
    return (
      <p className="bg-red-400 p-1 text-center text-white rounded-sm">
        محصولی برای نمایش وجود ندارد.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-[3rem]">
      {show.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setSelectedProduct={setSelectedProduct}
          setOpenModal={setOpenModal}
        />
      ))}

      {/* نمایش مودال */}
      {openModal && selectedProduct && (
        <ModaProducts
          image={selectedProduct.image}
          id={selectedProduct.id}
          description={selectedProduct.description}
          nameProduct={selectedProduct.nameProduct}
          category={selectedProduct.category}
          category1={selectedProduct.category1}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Toaster />
    </div>
  );
};

export default MainProducts;
