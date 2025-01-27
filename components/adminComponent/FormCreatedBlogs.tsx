"use client";
import { Altet } from "@/types/enums";
import toast, { Toaster } from "react-hot-toast";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { addPost } from "@/featcher/blogsSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const FormCreatedBlogs = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.posts.posts);

  const { fields: imageFields, append: appendImage } = useFieldArray({
    control,
    name: "additionalImages",
  });

  const { fields: headingFields, append: appendHeading } = useFieldArray({
    control,
    name: "headings",
  });

  const onSubmit = (data: any) => {
    const newPost = {
      id: Date.now(),
      ...data,
      trashed: false,
      status: data.status || false,
      images: data.images || [],
      tags: data.tags.split(",").map((tag: string) => tag.trim()),
      createdAt: new Date().toISOString(),
    };

    dispatch(addPost(newPost));

    toast.success(Altet.ADDBLOGS);
    reset();
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: Function
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold border-b pb-4">ایجاد نوشته تازه</h1>
          {state.length > 0 && (
            <Link href="/posts">
              <p className="text-2xl text-red-600 cursor-pointer font-bold pb-1">
                دیدن همه نوشته‌ها
              </p>
            </Link>
          )}
        </div>

        {/* عنوان */}
        <div className="space-y-2">
          <label htmlFor="title" className="block font-medium">
            عنوان نوشته
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: "عنوان نوشته الزامی است." }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="title"
                className={`w-full border outline-none ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="عنوان نوشته را وارد کنید..."
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* تصویر شاخص */}
        <div className="space-y-2">
          <label className="block font-medium">تصویر شاخص</label>
          <Controller
            name="mainImage"
            control={control}
            render={({ field: { onChange } }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, onChange)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:border-gray-300 file:text-sm file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              />
            )}
          />
        </div>

        {/* متن نوشته */}
        <div className="space-y-2">
          <label htmlFor="content" className="block font-medium">
            متن نوشته
          </label>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            rules={{ required: "محتوا الزامی است." }}
            render={({ field }) => (
              <textarea
                {...field}
                id="content"
                className={`w-full border outline-none ${
                  errors.content ? "border-red-500" : "border-gray-300"
                } rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="محتوای نوشته را وارد کنید..."
                rows={6}
              ></textarea>
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* دکمه برای افزودن سرعنوان */}
        <div>
          <button
            type="button"
            onClick={() => appendHeading({ title: "", content: "" })}
            className="text-blue-500 hover:underline"
          >
            + اضافه کردن سرعنوان
          </button>
          {headingFields.map((field, index) => (
            <div key={field.id} className="space-y-4 mt-4">
              <div>
                <label className="block font-medium">سرعنوان {index + 1}</label>
                <Controller
                  name={`headings[${index}].title`}
                  control={control}
                  defaultValue={field.title}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full border outline-none border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`سرعنوان ${index + 1}`}
                    />
                  )}
                />
              </div>
              <div>
                <label className="block font-medium">
                  متن سرعنوان {index + 1}
                </label>
                <Controller
                  name={`headings[${index}].content`}
                  control={control}
                  defaultValue={field.content || ""}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="w-full border outline-none border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`متن مرتبط با سرعنوان ${index + 1}`}
                      rows={4}
                    ></textarea>
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* دکمه برای افزودن تصویر اضافی */}
        <div>
          <button
            type="button"
            onClick={() => appendImage({ url: "" })}
            className="text-blue-500 hover:underline"
          >
            + اضافه کردن تصویر اضافی
          </button>
          {imageFields.map((field, index) => (
            <div key={field.id} className="space-y-2 mt-4">
              <label className="block font-medium">
                تصویر اضافی {index + 1}
              </label>
              <Controller
                name={`additionalImages[${index}].url`}
                control={control}
                defaultValue={field.url}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, field.onChange)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:border-gray-300 file:text-sm file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                  />
                )}
              />
            </div>
          ))}
        </div>

        {/* دسته‌بندی */}
        <div className="space-y-2">
          <label htmlFor="categories" className="block font-medium">
            دسته‌بندی
          </label>
          <Controller
            name="categories"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="categories"
                className="w-full outline-none border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="دسته‌بندی را وارد کنید..."
              />
            )}
          />
        </div>

        {/* برچسب‌ها */}
        <div className="space-y-2">
          <label htmlFor="tags" className="block font-medium">
            برچسب‌ها (با کاما جدا کنید)
          </label>
          <Controller
            name="tags"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="tags"
                className="w-full outline-none border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="برچسب‌ها را وارد کنید..."
              />
            )}
          />
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          ذخیره نوشته
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default FormCreatedBlogs;
