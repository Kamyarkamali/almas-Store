import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PriceComponent from "./PriceComponent";
import { Props } from "@/types/interFace";

interface FormValues {
  name: string;
  email: string;
  comment: string;
}

const Comments: FC<Props> = ({ Inventory, category, nameProduct, price }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert("فرم با موفقیت ارسال شد!");
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <p className="text-[14px] font-bold">نقد و بررسی</p>
        <p className="text-[14px] text-[#777777]">
          هنوز بررسی‌ای ثبت نشده است.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full max-w-[500px]"
      >
        <p className="text-[14px] font-bold text-[#242424]">
          اولین کسی باشید که دیدگاهی می نویسد “دی وی دی رایتر لپ تاپ Toshiba مدل
          Satellite L850”
        </p>
        <p className="text-[14px] text-[#777777]">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          *
        </p>
        <p className="text-[14px]">امتیاز شما*</p>

        {/* Comment Field */}
        <div className="flex flex-col">
          <textarea
            {...register("comment", {
              required: "لطفاً نقد خود را وارد کنید.",
              minLength: {
                value: 10,
                message: "نقد شما باید حداقل 10 کاراکتر باشد.",
              },
            })}
            className={`border-[1px] p-3 rounded-md text-[#777777] outline-none border-gray-300 resize-none w-[473px] bg-transparent h-[189px] ${
              errors.comment ? "border-red-500" : ""
            }`}
          />
          {errors.comment && (
            <span className="text-red-500 text-sm">
              {errors.comment.message}
            </span>
          )}
        </div>

        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] after:content-['*']">نام</label>
          <input
            {...register("name", {
              required: "لطفاً نام خود را وارد کنید.",
              minLength: {
                value: 3,
                message: "نام باید حداقل 3 کاراکتر باشد.",
              },
            })}
            className={`w-[500px] rounded-md pr-3 outline-none h-[43px] border-[2px] border-[#7777] bg-transparent ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] after:content-['*']">ایمیل</label>
          <input
            {...register("email", {
              required: "لطفاً ایمیل خود را وارد کنید.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "ایمیل وارد شده معتبر نیست.",
              },
            })}
            className={`w-[500px] rounded-md pr-3 outline-none h-[43px] border-[2px] border-[#7777] bg-transparent ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#D60644] hover:bg-[#ab0637] transition-all duration-200 text-[14px] text-white w-full px-4 py-2 rounded mt-4"
        >
          ثبت نظر
        </button>
      </form>

      <div>
        <PriceComponent
          price={price}
          Inventory={Inventory}
          nameProduct={nameProduct}
          category={category}
        />
      </div>
    </div>
  );
};

export default Comments;
