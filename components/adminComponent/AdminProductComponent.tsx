"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/featcher/createProducts";
import { toast, Toaster } from "react-hot-toast";
import { Altet } from "@/types/enums";

const AdminProductComponent = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      nameProduct: "",
      category: "",
      description: "",
      price: "",
      discountedPrice: "",
      activePrice: "price",
      status: "active",
      thumbnail: null,
    },
  });

  const [images, setImages] = useState<File[]>([]);

  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.product.products);
  console.log(state);

  const addProducts = (product: any) => {
    dispatch(addProduct(product));
    toast.success(Altet.ADDPRODUCTS);
  };

  const onSubmit = (data: any) => {
    const product = {
      ...data,
      id: nanoid(),
      thumbnail: data.thumbnail ? URL.createObjectURL(data.thumbnail) : null,
      images,
    };

    // console.log("ارسال محصول به Redux و API:", product);

    // ارسال محصول به Redux
    addProducts(product);

    reset();
    setImages([]);
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("thumbnail", file);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        افزودن محصول جدید
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-gray-700"
      >
        {/* نام محصول */}
        <input
          type="text"
          placeholder="نام محصول"
          {...register("nameProduct", { required: "نام محصول الزامی است" })}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
        />

        {/* دسته‌بندی */}
        <input
          type="text"
          placeholder="دسته‌بندی"
          {...register("category", { required: "دسته‌بندی الزامی است" })}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
        />

        {/* توضیحات */}
        <textarea
          placeholder="توضیحات محصول"
          {...register("description")}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
          rows={4}
        />

        {/* قیمت‌ها */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="قیمت عادی (تومان)"
              {...register("price", { required: "قیمت عادی الزامی است" })}
              className="border p-3 rounded-lg w-full focus:outline-blue-500"
            />
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="price"
                {...register("activePrice")}
                defaultChecked
              />
              قیمت عادی
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="قیمت تخفیف‌خورده (تومان)"
              {...register("discountedPrice")}
              className="border p-3 rounded-lg w-full focus:outline-blue-500"
            />
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="discountedPrice"
                {...register("activePrice")}
              />
              قیمت تخفیف‌خورده
            </label>
          </div>
        </div>

        {/* وضعیت نمایش */}
        <select
          {...register("status")}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
        >
          <option value="active">فعال</option>
          <option value="inactive">غیرفعال</option>
        </select>

        {/* آپلود عکس شاخص */}
        <Controller
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block mb-2 text-sm font-medium">
                عکس شاخص محصول:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  field.onChange(e.target.files?.[0] || null);
                  handleThumbnailUpload(e);
                }}
                className="border p-3 rounded-lg w-full"
              />
            </div>
          )}
        />

        {/* آپلود عکس‌های محصول */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            عکس‌های محصول:
          </label>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("upload-images")?.click()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-max"
            >
              + افزودن عکس
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAddImage}
              id="upload-images"
              className="hidden"
            />
            <div className="grid grid-cols-3 gap-3 mt-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`عکس ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setImages(images.filter((_, i) => i !== index))
                    }
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs p-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600 transition"
        >
          ذخیره محصول
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AdminProductComponent;
