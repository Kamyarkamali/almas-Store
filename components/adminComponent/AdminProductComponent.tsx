"use client";

import { useForm, Controller } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addProduct } from "@/featcher/createProducts";
import { toast, Toaster } from "react-hot-toast";
import { Altet } from "@/types/enums";

const AdminProductComponent = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      id: nanoid(),
      nameProduct: "",
      image: "",
      image2: "",
      image3: "",
      category1: "",
      category: "",
      description: "",
      price: "",
      trashed: false,
      discountPrice: "",
      discount: false,
      activePrice: "price",
      status: "active",
      thumbnail: null,
      Inventory: 0,
    },
  });

  const dispatch = useDispatch();

  const addProducts = (product: any) => {
    dispatch(addProduct(product));
    toast.success(Altet.ADDPRODUCTS);
  };

  const onSubmit = (data: any) => {
    const product = {
      ...data,
      id: nanoid(),
      thumbnail: data.thumbnail ? URL.createObjectURL(data.thumbnail) : null,
    };

    addProducts(product);
    reset();
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];
    if (file) {
      setValue("image", file);
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

        {/* دسته‌بندی اول */}
        <input
          type="text"
          placeholder="دسته‌بندی اصلی (مثلاً قطعات لپ تاپ)"
          {...register("category1", { required: "دسته‌بندی اصلی الزامی است" })}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
        />

        {/* دسته‌بندی دوم */}
        <input
          type="text"
          placeholder="دسته‌بندی فرعی (مثلاً پردازنده)"
          {...register("category", { required: "دسته‌بندی فرعی الزامی است" })}
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
            <label className="text-sm text-gray-500">قیمت عادی</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="قیمت تخفیف‌خورده (تومان)"
              {...register("discountPrice")}
              className="border p-3 rounded-lg w-full focus:outline-blue-500"
            />
            <label className="text-sm text-gray-500">قیمت تخفیف‌خورده</label>
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

        {/* موجودی انبار */}
        <input
          type="number"
          placeholder="موجودی انبار"
          {...register("Inventory", { required: "موجودی انبار الزامی است" })}
          className="border p-3 rounded-lg w-full focus:outline-blue-500"
        />

        {/* آپلود عکس شاخص */}
        <Controller
          name="image"
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

        {/* آپلود عکس‌های اضافی */}
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="image2"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block mb-2 text-sm font-medium">
                  عکس محصول ۲:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                  className="border p-3 rounded-lg w-full"
                />
              </div>
            )}
          />
          <Controller
            name="image3"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block mb-2 text-sm font-medium">
                  عکس محصول ۳:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                  className="border p-3 rounded-lg w-full"
                />
              </div>
            )}
          />
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
