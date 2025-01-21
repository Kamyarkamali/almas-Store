"use client";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, LoginForm } from "@/types/interFace";
import Image from "next/image";
import Link from "next/link";
import CloseSvg from "../icon/CloseSvg";
import { Toaster, toast } from "react-hot-toast";
import { Altet } from "@/types/enums";

const LoginFormDeckstop: FC<LoginForm> = ({ setOpenLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpDelete = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const isValidMobile = (value: string) => {
    return /^(09)[0-9]{9}$/.test(value);
  };

  const isValidEmail = (value: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  };

  const handleFormSubmit = (data: FormData) => {
    // ارسال کد تایید به ایمیل یا شماره موبایل معتبر
    if (isValidEmail(data.username) || isValidMobile(data.username)) {
      setIsOtpVisible(true); // نمایش فرم OTP

      toast.success(Altet.SENDOTPCODE);
    } else {
      toast.error(Altet.ERROROTP);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="pt-5 px-4 pb-[15px] bg-white max-w-md mx-auto z-50"
      >
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold">ورود</p>
          <div
            onClick={() => setOpenLogin(false)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <CloseSvg width="14px" height="13px" />
            <p className="text-[16px] font-bold">بستن</p>
          </div>
        </div>

        {/* Username or Email */}
        <div className="mt-4">
          <label className="after:content-['*'] text-[14px] text-[#242424]">
            شماره موبایل یا آدرس ایمیل
          </label>
          <input
            type="text"
            {...register("username", {
              required: "نام کاربری یا ایمیل الزامی است",
              validate: {
                isEmailOrMobile: (value) => {
                  if (!isValidEmail(value) && !isValidMobile(value)) {
                    return "باید ایمیل یا شماره موبایل معتبر وارد کنید";
                  }
                  return true;
                },
              },
            })}
            className="border-[2px] border-[#e4e1e1] text-[13px] pr-2 rounded-md w-full h-[42px] focus:outline-none mt-[5px]"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* OTP Form */}
        {isOtpVisible && (
          <div className="mt-4">
            <label className="text-[14px] text-[#242424]">کد تایید (OTP)</label>
            <div className="flex gap-2 mt-2" dir="ltr">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleOtpDelete(e, index)}
                  maxLength={1}
                  className="w-10 h-10 text-center border-[2px] border-[#e4e1e1] rounded-md"
                  dir="ltr"
                />
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-[1.1875rem]">
          <button
            type="submit"
            className="w-full h-[2.5625rem] bg-[#C40545] text-white px-4 py-2 rounded-md"
          >
            ورود
          </button>

          <div className="flex items-center gap-2 mt-[1rem]">
            <input type="checkbox" />
            <label className="text-[14px] text-[#333333]">
              مرا به خاطر بسپار
            </label>
          </div>
          <div className="border-b-[1px] border-[#afa8a8] p-1 w-full"></div>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-4">
          <Image
            src={"/images/imagesHomePage/userbgLogin.png"}
            width={100}
            height={54}
            alt="صفحه ورود"
          />
        </div>

        {/* Register Link */}
        <div className="flex flex-col items-center mt-3">
          <p className="text-[14px] text-[#242424] font-bold">
            هنوز حساب کاربری ندارید؟
          </p>
          <div className="group">
            <Link href={"/register"}>
              <p
                onClick={() => setOpenLogin(false)}
                className="text-[12px] group-hover:text-[#6f6d6d] group-hover:border-[#6f6d6d] transition-all duration-300 font-bold border-b-[2px] p-[4px] border-[#323232] text-[#242424] mt-[14px]"
              >
                ایجاد حساب کاربری
              </p>
            </Link>
          </div>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default LoginFormDeckstop;
