"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetCompare } from "@/featcher/compareSlice";
import useLocalStorage from "@/hooks/useLocalStorage"; // مسیر هوک

function CompareComponent() {
  const [compareList, setCompareList] = useLocalStorage("compareList", []);
  const dispatch = useDispatch();

  // اگر محصولات برای مقایسه وجود ندارند
  if (compareList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-2xl font-bold text-black mb-4">
          محصولی برای مقایسه وجود ندارد
        </h1>
        <Link
          className="bg-[#D60644] text-white py-3 px-8 rounded-full hover:bg-[#b30536] transition-all duration-300 mb-4 shadow-lg transform hover:scale-105"
          href="/"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  const renderComparisonTable = () => {
    return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {compareList.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={product.image || "/default-image.png"}
              alt={product.nameProduct}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-center text-gray-900 mb-2">
                {product.nameProduct}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">قیمت:</span>
                  <span className="text-gray-900">
                    {product.price ? `${product.price} تومان` : "نامشخص"}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">دسته‌بندی اول:</span>
                  <span>{product.category1 || "نامشخص"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">دسته‌بندی:</span>
                  <span>{product.category || "نامشخص"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">توضیحات:</span>
                  <span>{product.description || "نامشخص"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">تخفیف:</span>
                  <span>
                    {product.discount ? `${product.discount}%` : "ندارد"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-center text-[#333] mb-6">
        مقایسه محصولات
      </h1>
      {renderComparisonTable()}
      <div className="mt-8 flex justify-center gap-6">
        <button
          onClick={() => {
            dispatch(resetCompare()); // ریست کردن مقایسه در Redux
            setCompareList([]); // پاک کردن لیست مقایسه از localStorage
          }}
          className=" text-white py-3 px-8 rounded-full bg-[#b30536] transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          پاک کردن مقایسه
        </button>
        <Link
          href="/"
          className="bg-gray-200 text-black py-3 px-8 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    </div>
  );
}

export default CompareComponent;
