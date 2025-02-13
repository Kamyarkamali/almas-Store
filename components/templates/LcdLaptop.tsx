"use client";
import { useState } from "react";
import Image from "next/image";
import { LaptoppartComponentProps, Product } from "@/types/interFace";

// Helper function for formatting numbers
import formatNumber from "@/helpers/replaceNumber";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesProvider";
import { Toaster } from "react-hot-toast";

// Component for displaying each product card
const ProductCard = ({
  product,
  setSelectedProduct,
  setOpenModal,
}: {
  product: Product;
  setSelectedProduct: (product: Product) => void;
  setOpenModal: (value: boolean) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(product.image);

  const { addFavorite } = useFavorites();

  return (
    <div
      className="p-4 relative flex flex-col items-center bg-white border shadow-sm hover:shadow-lg rounded-md cursor-pointer transition-all duration-300 group"
      onMouseEnter={() => product.image2 && setCurrentImage(product.image2)}
      onMouseLeave={() => setCurrentImage(product.image)}
    >
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
      <p className="text-center text-[14px] text-[#333333] leading-7 mt-4 hover:text-[#777777] cursor-pointer duration-150">
        {product.nameProduct}
      </p>
      <p
        className={
          product.price
            ? "text-center text-[13px] mt-2"
            : "text-center text-[13px] mt-2 text-red-500"
        }
      >
        {product.price === 0 ? "موجود نیست" : formatNumber(product.price)} تومان
      </p>

      <div className="absolute top-0 left-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg text-[11px] text-gray-700 p-3 rounded-md shadow-lg">
        {product.description}
      </div>

      <div className="absolute bottom-4 items-center left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-around gap-2">
        <button className="py-2 transition-colors">
          <img
            onClick={() => addFavorite(product)}
            className="w-[20px] h-[20px]"
            src="/svgs/like.svg"
            alt="faiverite"
          />
        </button>
        <button className="w-[99px] h-[39px] py-2 bg-[#D60444] text-white text-[10px] hover:font-bold hover:duration-300 rounded-md transition-colors">
          {product.stock > 0 ? "افزودن به سبد خرید" : "اطلاعات بیشتر"}
        </button>
        <section className="relative">
          <button className="py-2 text-white text-sm rounded-md transition-colors">
            <img
              onClick={() => {
                setSelectedProduct(product);
                setOpenModal(true); // استفاده صحیح از setOpenModal برای باز کردن مودال
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

const LcdLaptop: React.FC<LaptoppartComponentProps> = ({
  filteredProducts,
  initialProducts,
  totalProducts,
}) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(
    initialProducts || []
  );
  const [itemsToShow, setItemsToShow] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const loadMoreProducts = () => {
    if (totalProducts) {
      const newItemsToShow = itemsToShow + 8;
      setItemsToShow(newItemsToShow);
      setVisibleProducts(totalProducts.slice(0, newItemsToShow));
    } else {
      console.error("Total products is undefined.");
    }
  };

  return (
    <div>
      {visibleProducts.length === 0 ? (
        <p>محصولی یافت نشد.</p>
      ) : (
        <div>
          {/* نمایش محصولات */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-[3rem]">
            {filteredProducts?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
                setOpenModal={setOpenModal}
              />
            ))}
          </div>

          {/* دکمه بارگیری بیشتر */}
          {visibleProducts.length < (totalProducts?.length || 0) && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreProducts}
                className="py-2 px-6 bg-[#D60444] text-white text-sm rounded-md hover:font-bold transition-all duration-300"
              >
                بارگیری بیشتر محصولات
              </button>
            </div>
          )}
        </div>
      )}

      {/* نمایش مودال */}
      {openModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">
              {selectedProduct.nameProduct}
            </h2>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.nameProduct}
              width={500}
              height={500}
            />
            <p className="text-sm mb-4">{selectedProduct.description}</p>
            <div className="text-center">
              <button
                onClick={() => setOpenModal(false)}
                className="py-2 px-4 bg-[#D60444] text-white rounded-md"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default LcdLaptop;
