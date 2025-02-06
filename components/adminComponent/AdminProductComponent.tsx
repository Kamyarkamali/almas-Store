"use client";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addProduct } from "@/featcher/createProducts";
import { toast, Toaster } from "react-hot-toast";
import { Altet } from "@/types/enums";
import Select from "react-select";
import { useState } from "react";

// تعریف نوع داده فرم
interface ProductFormData {
  id: string;
  nameProduct: string;
  image: string;
  image2: string;
  image3: string;
  category1: string;
  description: string;
  price: string;
  trashed: boolean;
  discountPrice: string;
  discount: boolean;
  activePrice: string;
  status: string;
  thumbnail: File | null;
  Inventory: string;
  maunimages: { file: File | null }[];
}

const categoryOptions: { value: string; label: string }[] = [
  { value: "لپ‌تاپ", label: "لپ‌تاپ" },
  { value: "گوشی", label: "گوشی" },
  { value: "لوازم جانبی", label: "لوازم جانبی" },
  { value: "کنسول بازی", label: "کنسول بازی" },
];

const AdminProductComponent = () => {
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);

  const { register, handleSubmit, control, reset, setValue } =
    useForm<ProductFormData>({
      defaultValues: {
        id: nanoid(),
        nameProduct: "",
        maunimages: [{ file: null }],
        image: "",
        category1: "",
        description: "",
        price: "",
        trashed: false,
        discountPrice: "",
        discount: false,
        activePrice: "price",
        status: "active",
        thumbnail: null,
        Inventory: "",
      },
    });

  // Move this inside the component, after defining `control`
  const { fields, append, remove } = useFieldArray({
    control,
    name: "maunimages",
  });

  const dispatch = useDispatch();

  const addProducts = (product: any) => {
    dispatch(addProduct(product));
    toast.success(Altet.ADDPRODUCTS);
  };

  const onSubmit = (data: ProductFormData) => {
    const product: ProductFormData = {
      ...data,
      id: nanoid(),
      category1: categories.map((cat) => cat.value).join(", "),
      thumbnail: data.thumbnail ? data.thumbnail : null,
    };

    addProducts(product);
    reset();
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] || null;
    if (file) {
      setValue("thumbnail", file);
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl text-white bg-blue-500 p-2 font-bold mb-6 text-center">
        افزودن محصول جدید
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-gray-700"
      >
        {/* دسته‌بندی اول */}
        <div className="p-6 w-full mx-auto bg-white shadow-lg rounded-lg">
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
            <h1 className="text-xl font-bold mb-6 text-center text-green-500">
              افزودن دسته بندی محصول
            </h1>

            {/* دسته‌بندی‌ها */}
            <Controller
              name="category1"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categoryOptions}
                  isMulti
                  placeholder="دسته‌بندی‌ها را انتخاب کنید..."
                  className="border p-3 rounded-lg w-full"
                  value={categories}
                  onChange={(selectedOptions) => {
                    setCategories(
                      selectedOptions as { value: string; label: string }[]
                    );
                    field.onChange(selectedOptions);
                  }}
                />
              )}
            />
          </form>
        </div>

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
          type="text"
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
                className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-pink-700 duration-200 cursor-pointer
        hover:file:bg-pink-100"
              />
              {/* <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  field.onChange(e.target.files?.[0] || null);
                  handleThumbnailUpload(e);
                }}
                className="border p-3 rounded-lg w-full"
              /> */}
            </div>
          )}
        />

        {/* آپلود عکس‌های اضافی */}
        <div className="grid grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <div key={field.id} className="relative">
              <Controller
                name={`maunimages.${index}.file`}
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      عکس محصول {index + 1}:
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0] || null)
                      }
                      className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-md
                      file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100 duration-200 cursor-pointer"
                    />
                  </div>
                )}
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute top-0 right-[-1.5rem] bg-red-500 text-[12px] text-white p-1 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => append({ file: null })}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          + افزودن عکس
        </button>
        <button
          type="submit"
          className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          ذحیره محصول
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AdminProductComponent;
