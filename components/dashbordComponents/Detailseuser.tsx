"use client";
import { FormInputs } from "@/types/interFace";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const DetailseUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // ارسال داده‌ها به سرور
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                عکس پروفایل
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            نام
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: "نام اجباری است" })}
            className={`w-full mt-1 p-2 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            نام خانوادگی
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: "نام خانوادگی اجباری است" })}
            className={`w-full mt-1 p-2 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="displayName"
            className="block text-sm font-medium text-gray-700"
          >
            نام نمایشی
          </label>
          <input
            id="displayName"
            type="text"
            {...register("displayName", { required: "نام نمایشی اجباری است" })}
            className={`w-full mt-1 p-2 border ${
              errors.displayName ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.displayName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.displayName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            ایمیل (اختیاری)
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            شماره موبایل
          </label>
          <input
            id="phoneNumber"
            type="text"
            {...register("phoneNumber", {
              required: "شماره موبایل اجباری است",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "شماره موبایل معتبر نیست",
              },
            })}
            className={`w-full mt-1 p-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          ذخیره تغییرات
        </button>
      </form>
    </div>
  );
};

export default DetailseUser;
