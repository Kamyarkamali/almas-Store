"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  updateProductStatus,
  toggleTrashed,
  removeProduct,
} from "@/featcher/createProducts";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUndo,
} from "react-icons/ai";
import React, { useState } from "react";
import formatNumber from "@/helpers/replaceNumber";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { Altet } from "@/types/enums";

function ShowAllProducts() {
  const state = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();

  // State for Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 15;

  const [showBtn, setShowBtn] = useState<boolean>(true);

  const handleStatusChange = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    dispatch(updateProductStatus({ id, status: newStatus }));

    if (newStatus === "active") {
      toast.error(Altet.NOTSHOWPRODUCT);
    } else if (newStatus === "inactive") {
      toast.success(Altet.SHOWPRODDUCT);
    }
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTrashed(id));
    toast.success(Altet.BACKTOPRODUCTS);
  };

  const handleDeletePermanently = (id: string) => {
    dispatch(removeProduct(id));
    toast.error(Altet.COMPILEDELETED);
  };

  const getFirstImageUrl = (product: any) => {
    if (product.image) {
      return URL.createObjectURL(product.image);
    } else if (product.image2) {
      return URL.createObjectURL(product.image2);
    } else if (product.image3) {
      return URL.createObjectURL(product.image3);
    }
    return "/default-image.jpg";
  };

  const activeProducts = state.filter((product: any) => !product.trashed);
  const trashedProducts = state.filter((product: any) => product.trashed);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentActiveProducts = activeProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      {/* محصولات فعال */}
      <div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowBtn(true)}
            className="text-2xl hover:border-b-[1px] border-red-400 duration-200 font-extrabold text-blue-600 mb-6 transition-all ease-in-out hover:text-blue-800"
          >
            محصولات فعال
          </button>
          {trashedProducts.length > 0 && (
            <button
              onClick={() => setShowBtn(false)}
              className="text-2xl hover:border-b-[1px] border-red-400 duration-200 font-extrabold text-red-600 mb-6 transition-all ease-in-out hover:text-red-800"
            >
              زباله دان
            </button>
          )}
        </div>

        {showBtn && activeProducts.length === 0 && (
          <div className="mt-4 bg-gray-300 rounded-lg p-4 flex flex-col items-center gap-3">
            <p className="text-center text-red-500 text-xl font-bold ">
              محصولی اضافه نکردید.
            </p>
            <Link href={"/admin/products/add"}>
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded">
                ساخت محصول
              </button>
            </Link>
          </div>
        )}

        {showBtn ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentActiveProducts.map((product: any) => (
              <div
                key={product.id}
                className="bg-white border h-full border-gray-300 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-[300px] mb-4 overflow-hidden rounded-lg rounded-b-none">
                  <img
                    src={getFirstImageUrl(product)}
                    alt={product.nameProduct || "Product Image"}
                    className="w-full h-[300px] object-cover transition-all duration-300 hover:opacity-75"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="lg:text-[14px] text-[12px] font-semibold text-gray-800">
                    {product.nameProduct || "بدون نام"}
                  </h3>
                  <div className="flex items-center justify-around">
                    <p className="text-gray-600 lg:text-[14px] text-[12px] mt-2">
                      {product.category1}
                    </p>
                    <p className="text-gray-600 lg:text-[14px] text-[12px] mt-2">
                      {product.category}
                    </p>
                  </div>
                  <p
                    className={`lg:text-[14px] text-[12px] text-right pr-4 pt-3 ${
                      product.Inventory ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.Inventory ? "در انبار موجود است" : "بدون موجودی"}
                  </p>
                  <span className="lg:text-[14px] text-[12px] font-bold mt-2 block text-green-600">
                    {product.price ? formatNumber(product.price) : "بدون قیمت"}{" "}
                    تومان
                  </span>
                </div>
                <div className="flex justify-center gap-6 mb-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 transition-all duration-200"
                    onClick={() =>
                      handleStatusChange(product.id, product.status)
                    }
                  >
                    {product.status === "active" ? (
                      <AiOutlineEyeInvisible size={24} />
                    ) : (
                      <AiOutlineEye size={24} />
                    )}
                  </button>
                  <button
                    className="text-white lg:text-[14px] text-[12px] hover:text-red-700 bg-orange-300 hover:bg-orange-400 p-2 rounded transition-all duration-200"
                    onClick={() => handleToggle(product.id)}
                  >
                    انتقال به زباله‌دانی
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <React.Fragment>
            {/* زباله‌دان */}
            <div className="mt-8">
              <h2 className="text-3xl font-extrabold text-red-600 mb-6 transition-all ease-in-out hover:text-red-800">
                زباله‌دان
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trashedProducts.length === 0 ? (
                  <p
                    onClick={() => setShowBtn(true)}
                    className="text-center text-red-500 font-bold cursor-pointer mt-4 border-2 border-blue-300 shadow-md p-2 rounded-md"
                  >
                    زباله‌دانی خالی است. 👍
                  </p>
                ) : (
                  trashedProducts.map((product: any) => (
                    <div
                      key={product.id}
                      className="bg-gray-100 border h-full border-gray-300 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-full h-fit mb-4 overflow-hidden rounded-lg">
                        <img
                          src={getFirstImageUrl(product)}
                          alt={product.nameProduct || "Product Image"}
                          className="w-full h-[300px] object-cover transition-all duration-300 hover:opacity-75"
                        />
                      </div>
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {product.nameProduct || "بدون نام"}
                        </h3>
                      </div>
                      <div className="flex justify-center gap-6 mb-4">
                        <button
                          className="text-green-500 hover:text-green-700 transition-all duration-200"
                          onClick={() => handleToggle(product.id)}
                        >
                          <AiOutlineUndo size={24} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition-all duration-200"
                          onClick={() => handleDeletePermanently(product.id)}
                        >
                          <AiOutlineDelete size={24} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </React.Fragment>
        )}

        {/* Pagination Controls */}
        {activeProducts.length > productsPerPage && (
          <div className="flex justify-center mt-4">
            <button
              className="px-6 py-2 mx-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition-all duration-200"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              قبلی
            </button>
            <button
              className="px-6 py-2 mx-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition-all duration-200"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage * productsPerPage >= activeProducts.length}
            >
              بعدی
            </button>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default ShowAllProducts;
