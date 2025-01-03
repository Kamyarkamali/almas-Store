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
    <div className="w-full h-[500px] bg-white flex justify-center  gap-3">
      <div className="flex justify-center gap-[43px]">
        {/* Login Form */}
        <form
          className="mt-[74px] mx-auto w-[461px]"
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
            <div className="border-[2px] w-[460px] rounded-md flex items-center justify-between pl-2">
              <input
                type={showPassword ? "text" : "password"}
                {...loginRegister("password", {
                  required: "رمز عبور اجباری است.",
                })}
                className={`w-full text-[13px] pr-2 h-[41px] rounded-md  focus:outline-none ${
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

          <div className="mt-[1.5rem]">
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
              className={`w-[459px] mt-2 p-2 border-[2px] rounded-md focus:outline-none ${
                loginErrors.captcha ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {loginErrors.captcha && (
              <p className="text-red-500 text-sm">
                {loginErrors.captcha.message}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button className="w-[460px] h-[41px] bg-[#D60444] text-white text-[13px] hover:bg-red-700 duration-300 hover:shadow-md  rounded-md mt-[1.5rem]">
              ورود
            </button>
          </div>
        </form>

        <div className="border-l-[1px] mt-[2.5rem]"></div>

        {/* Register Form */}
        <form
          className="mt-[74px] mx-auto w-[461px]"
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
              className={`w-[461px] h-[42px] mt-2 p-2 border-[2px] rounded-md focus:outline-none ${
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
            <div className="border-[2px] rounded-md w-[459px] flex items-center justify-between pl-2">
              <input
                type={showPassword ? "text" : "password"}
                {...registerRegister("password", {
                  required: "گذر واژه اجباری است.",
                  minLength: {
                    value: 6,
                    message: "گذر واژه باید حداقل 6 کاراکتر باشد.",
                  },
                })}
                className={`w-full text-[13px] pr-2 h-[38px] rounded-md  focus:outline-none mt-[5px] ${
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

          <div className="mt-[1.5rem]">
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
              className={`w-[461px] mt-2 p-2 border-[2px] rounded-md focus:outline-none ${
                registerErrors.captcha ? "border-red-500" : "border-[#E5E5E5]"
              }`}
            />
            {registerErrors.captcha && (
              <p className="text-red-500 text-sm">
                {registerErrors.captcha.message}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button className="w-[460px] h-[41px] bg-[#D60444] hover:bg-red-700 duration-300 hover:shadow-md text-white text-[13px] rounded-md mt-[1.5rem]">
              عضویت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
