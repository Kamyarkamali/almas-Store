"use client";
import Loader from "@/ui/Loader";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface BlogFormData {
  title: string;
  category: string;
  tags?: string;
  content: string;
  mainImage: FileList | null;
  extraImages: FileList | null;
}

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BlogFormData>();

  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [extraImagesPreview, setExtraImagesPreview] = useState<string[]>([]);
  const [extraImageInputs, setExtraImageInputs] = useState<number[]>([0]);

  const [loading, setLoadin] = useState<boolean>(false);

  const handleAddInputImage = () => {
    setExtraImageInputs((prev) => [...prev, prev.length]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadin(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onSubmit = (data: BlogFormData) => {
    console.log(data);
  };

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMainImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleExtraImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setExtraImagesPreview(files);
    }
  };

  return (
    <>
      {loading ? (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            ایجاد بلاگ جدید
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("title", { required: "عنوان مقاله الزامی است" })}
              type="text"
              placeholder="عنوان مقاله"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}

            <select
              {...register("category", {
                required: "دسته‌بندی را انتخاب کنید",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">انتخاب دسته‌بندی</option>
              <option value="technology">تکنولوژی</option>
              <option value="health">سلامت</option>
              <option value="business">کسب‌وکار</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}

            <input
              {...register("tags")}
              type="text"
              placeholder="برچسب‌ها (مثلاً: تکنولوژی, لپ تاپ, کامپیوتر)"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Controller
              name="content"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ReactQuill {...field} className="bg-white" />
              )}
            />

            <div className="space-y-2">
              <label className="block text-gray-700">تصویر اصلی</label>
              <input
                {...register("mainImage")}
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
                className="w-full p-2 border rounded-lg"
              />
              {mainImagePreview && (
                <img
                  src={mainImagePreview}
                  alt="Main Preview"
                  className="w-full h-48 object-cover rounded-lg mt-2"
                />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <label className="block text-gray-700">تصاویر اضافی</label>
                <button
                  type="button"
                  onClick={handleAddInputImage}
                  className="bg-blue-500 text-white p-2 rounded w-fit hover:bg-blue-600 transition-colors duration-200"
                >
                  +
                </button>
              </div>

              {extraImageInputs.map((index) => (
                <input
                  key={index}
                  // @ts-ignore
                  {...register(`extraImages.${index}`)}
                  type="file"
                  accept="image/*"
                  className="w-full p-2 border rounded-lg"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              انتشار بلاگ
            </button>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
