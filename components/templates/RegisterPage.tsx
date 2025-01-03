"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import PasswordSvg from "@/components/icon/PasswordSvg";
import HidePassword from "@/components/icon/HidePassword";

interface LoginFormData {
  usernameOrEmail: string;
  password: string;
  captcha: string;
}

interface RegisterFormData {
  email: string;
  password: string;
  captcha: string;
}

function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Login form
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>();

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login Form Data:", data);
  };

  // Register form
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormData>();

  const onRegisterSubmit = (data: RegisterFormData) => {
    console.log("Register Form Data:", data);
  };

  return (
    <div className="max-w-full h-fit bg-white flex flex-col md:flex-row justify-center items-center md:items-start gap-3 px-4">
      <div className="max-w-full gap-9 flex flex-col md:flex-row justify-center items-center md:items-start lg:gap-[43px] w-full">
        {/* Login Form */}
        <form
          className="mt-[76px] w-full max-w-[420px] md:max-w-[461px] mb-[27px] md:ml-0 flex flex-col"
          onSubmit={handleLoginSubmit(onLoginSubmit)}
        >
          <h2 className="text-[22px] text-[#242424] font-bold">ورود</h2>
          <div className="flex flex-col mt-[27px]">
            <label className="after:content-['*'] text-[14px] text-[#242424]">
              نام کاربری یا آدرس ایمیل
            </label>
            <input
              type="text"
              {...loginRegister("usernameOrEmail", {
                required: "نام کاربری یا ایمیل اجباری است.",
              })}
              className={`w-full h-[41px] mt-2 pr-2 border-[2px] rounded-md focus:outline-none ${
                loginErrors.usernameOrEmail
                  ? "border-red-500"
                  : "border-[#E5E5E5]"
              }`}
            />
            {loginErrors.usernameOrEmail && (
              <p className="text-red-500 text-sm">
                {loginErrors.usernameOrEmail.message}
              </p>
            )}
          </div>

          <div className="mt-[1.5rem]">
            <label className="after:content-['*'] text-[14px] text-[#242424]">
              رمز عبور
            </label>
            <div className="border-[2px] w-full rounded-md flex items-center justify-between pl-2">
              <input
                type={showPassword ? "text" : "password"}
                {...loginRegister("password", {
                  required: "رمز عبور اجباری است.",
                })}
                className={`w-full text-[13px] pr-2 h-[41px] rounded-md focus:outline-none ${
                  loginErrors.password ? "border-red-500" : ""
                }`}
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
            {loginErrors.password && (
              <p className="text-red-500 text-sm">
                {loginErrors.password.message}
              </p>
            )}
          </div>

          <div className="mt-[1.5rem] flex flex-col">
            <label className="text-[14px] text-[#242424]">
              لطفا یک پاسخ را با ارقام وارد کنید:
            </label>
            <label className="text-[14px] text-[#777777]">پنج x پنج=</label>
            <input
              type="text"
              {...loginRegister("captcha", {
                required: "پاسخ کپچا اجباری است.",
                validate: (value) => value === "25" || "پاسخ صحیح نیست.",
              })}
              className={`w-full mt-2 p-2 border-[2px] rounded-md focus:outline-none ${
                loginErrors.captcha ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {loginErrors.captcha && (
              <p className="text-red-500 text-sm">
                {loginErrors.captcha.message}
              </p>
            )}
          </div>

          <div className="flex justify-start lg:justify-center items-center">
            <button className="w-full h-[41px] bg-[#D60444] text-white text-[13px] rounded-md mt-[1.5rem]">
              ورود
            </button>
          </div>

          <div className="flex items-center lg:justify-between justify-around mt-[27px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[14px] text-[#242424]">مرا بخاطر بسپار</p>
            </div>
            <p className="text-[14px] text-[#D60644]">
              رمز عبور را فراموش کرده اید؟
            </p>
          </div>
        </form>

        <div className="border-l-[1px] mt-[2.5rem] md:hidden block"></div>

        {/* Register Form */}
        <form
          className="md:mt-[74px] w-full max-w-[420px] md:max-w-[461px] flex flex-col"
          onSubmit={handleRegisterSubmit(onRegisterSubmit)}
        >
          <h2 className="text-[22px] text-[#242424] font-bold">عضویت</h2>
          <div className="flex flex-col mt-[27px]">
            <label className="after:content-['*'] text-[14px] text-[#242424]">
              آدرس ایمیل
            </label>
            <input
              type="text"
              {...registerRegister("email", {
                required: "ایمیل اجباری است.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "ایمیل معتبر وارد کنید.",
                },
              })}
              className={`w-full h-[41px] mt-2 pr-2 border-[2px] rounded-md focus:outline-none ${
                registerErrors.email ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {registerErrors.email && (
              <p className="text-red-500 text-sm">
                {registerErrors.email.message}
              </p>
            )}
          </div>

          <div className="mt-[1.5rem]">
            <label className="after:content-['*'] text-[14px] text-[#242424]">
              گذر واژه
            </label>
            <div className="border-[2px] rounded-md w-full flex items-center justify-between pl-2">
              <input
                type={showPassword ? "text" : "password"}
                {...registerRegister("password", {
                  required: "گذر واژه اجباری است.",
                  minLength: {
                    value: 6,
                    message: "گذر واژه باید حداقل 6 کاراکتر باشد.",
                  },
                })}
                className={`w-full text-[13px] pr-2 h-[41px] rounded-md focus:outline-none ${
                  registerErrors.password ? "border-red-500" : ""
                }`}
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
            {registerErrors.password && (
              <p className="text-red-500 text-sm">
                {registerErrors.password.message}
              </p>
            )}
          </div>

          <div className="mt-[1.5rem] flex flex-col">
            <label className="text-[14px] text-[#242424]">
              لطفا یک پاسخ را با ارقام وارد کنید:
            </label>
            <label className="text-[14px] text-[#777777]">ده + 16=</label>
            <input
              type="text"
              {...registerRegister("captcha", {
                required: "پاسخ کپچا اجباری است.",
                validate: (value) => value === "26" || "پاسخ صحیح نیست.",
              })}
              className={`w-full mt-2 p-2 border-[2px] rounded-md focus:outline-none ${
                registerErrors.captcha ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {registerErrors.captcha && (
              <p className="text-red-500 text-sm">
                {registerErrors.captcha.message}
              </p>
            )}
          </div>

          <div className="flex justify-start lg:justify-center items-center">
            <button className="w-full h-[41px] bg-[#D60444] text-white text-[13px] rounded-md mt-[1.5rem]">
              عضویت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
