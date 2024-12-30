"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import PasswordSvg from "@/components/icon/PasswordSvg";
import HidePassword from "@/components/icon/HidePassword";
import { FormData } from "@/types/interFace";
import Image from "next/image";
import Link from "next/link";

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-5 px-4 pb-[15px]">
      {/* Username or Email */}
      <div>
        <label className="after:content-['*'] text-[14px] text-[#242424]">
          نام کاربری یا آدرس ایمیل
        </label>
        <input
          type="text"
          {...register("username", {
            required: "نام کاربری یا ایمیل الزامی است",
            pattern: {
              value:
                /^(?:[a-zA-Z0-9_]{3,20}|[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4})$/,
              message: "باید نام کاربری یا ایمیل معتبر وارد کنید",
            },
          })}
          className="border-[2px] border-[#e4e1e1] text-[13px] pr-2 rounded-md w-[235px] h-[42px] focus:outline-none mt-[5px]"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
        )}
      </div>
      {/* Password */}
      <div className="mt-[1.5rem]">
        <label className="after:content-['*'] text-[14px] text-[#242424]">
          رمز عبور
        </label>
        <div className="border-[2px] rounded-md border-[#e4e1e1] flex items-center pl-2">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 6,
                message: "رمز عبور باید حداقل 6 کاراکتر باشد",
              },
            })}
            className="text-[13px] pr-2 h-[38px] rounded-md w-[254px] focus:outline-none mt-[5px]"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {showPassword ? (
              <PasswordSvg width="16px" height="16px" />
            ) : (
              <HidePassword width="16px" height="16px" />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      {/* Answer */}
      <div className="mt-[1.5rem]">
        <div className="flex flex-col gap-4">
          <label className="text-[14px] text-[#242424]">
            لطفا یک پاسخ را با ارقام وارد کنید:
          </label>
          <label className="text-[14px] text-[#777777]">13 + هجده=</label>
        </div>
        <input
          type="text"
          {...register("answer", {
            required: "پاسخ الزامی است",
            validate: (value) =>
              value === "31" || "پاسخ نادرست است، لطفا دوباره تلاش کنید",
          })}
          className="border-[2px] border-[#e4e1e1] text-[13px] pr-2 rounded-md w-[235px] h-[42px] focus:outline-none mt-[5px]"
        />
        {errors.answer && (
          <p className="text-red-500 text-xs mt-1">{errors.answer.message}</p>
        )}
      </div>
      {/* Submit Button */}
      <div className="mt-[1.1875rem]">
        <button
          type="submit"
          className="w-[235px] h-[2.5625rem] bg-[#C40545] text-white px-4 py-2 rounded-md"
        >
          ورود
        </button>

        <div className="flex items-center gap-2 mt-[1rem]">
          <input type="checkbox" />
          <label className="text-[14px] text-[#333333]">
            مرا به خاطر بسپار
          </label>
        </div>
        <p className="text-[14px] mt-[15px] text-[#D60644] hover:border-b-[0.5px] hover:text-[#a83356] transition-all duration-300 ease-linear border-[#D60644] w-fit">
          رمز عبور را فراموش کرده اید؟
        </p>
        <div className="border-b-[1px] border-[#afa8a8] p-1 w-full"></div>
      </div>

      <div className="flex justify-center">
        <Image
          src={"/images/imagesHomePage/userbgLogin.png"}
          width={100}
          height={54}
          alt="صفحه ورود"
        />
      </div>
      <div className="flex flex-col items-center mt-3">
        <p className="text-[14px] text-[#242424] font-bold">
          هنوز حساب کاربری ندارید؟
        </p>
        <div className="group">
          <Link href={"/register"}>
            <p className="text-[12px] group-hover:text-[#6f6d6d] group-hover:border-[#6f6d6d] transition-all duration-300 font-bold border-b-[2px] p-[4px] border-[#323232] text-[#242424] mt-[14px]">
              ایجاد حساب کاربری
            </p>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
