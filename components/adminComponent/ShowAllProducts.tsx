"use client";
import { useSelector, useDispatch } from "react-redux";
import { updateProductStatus, moveToTrash } from "@/featcher/createProducts";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

function ShowAllProducts() {
  const state = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();

  const handleStatusChange = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    dispatch(updateProductStatus({ id, status: newStatus }));
  };

  const handleMoveToTrash = (id: string) => {
    dispatch(moveToTrash(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {state.map((product: any) => (
        <div
          key={product.id}
          className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
        >
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={
                product.images.length > 0
                  ? URL.createObjectURL(product.images[0])
                  : ""
              } // استفاده از Blob URL
              alt={product.nameProduct}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold">{product.nameProduct}</h3>
            <p className="text-gray-600 mt-2">
              {product.description.slice(0, 100)}...
            </p>
            <span className="text-lg font-bold mt-2 block">
              {product.price} تومان
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => handleStatusChange(product.id, product.status)}
            >
              {product.status === "active" ? (
                <AiOutlineEyeInvisible size={24} />
              ) : (
                <AiOutlineEye size={24} />
              )}
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleMoveToTrash(product.id)}
            >
              <AiOutlineDelete size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowAllProducts;
