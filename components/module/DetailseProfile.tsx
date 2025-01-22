"use client";
import React, { useState, ChangeEvent } from "react";
import Wallet1Svg from "../icon/Wallet1Svg";
import Wallet2Svg from "../icon/Wallet2Svg";

// تعریف نوع Props در صورت نیاز
interface DetailseProfileProps {
  initialProfileImage?: string; // آدرس تصویر اولیه (اختیاری)
}

const DetailseProfile: React.FC<DetailseProfileProps> = ({
  initialProfileImage = "/images/dasboard/profile.png",
}) => {
  const [profileImage, setProfileImage] = useState<string>(initialProfileImage);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // فایل انتخاب شده

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // فایل انتخاب شده
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  // تابع ارسال تصویر به API
  const uploadToAPI = async () => {
    if (!selectedFile) return;

    // برای اضافه کردن api
    // const formData = new FormData();
    // formData.append("file", selectedFile);
    // await fetch("API_URL", { method: "POST", body: formData });

    console.log("فایل آماده ارسال:", selectedFile);
  };

  return (
    <div className="relative h-[200px] rounded-xl shadow-lg overflow-hidden">
      {/* پس‌زمینه موج‌دار متحرک */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 animate-bg-wave">
        <svg
          className="absolute w-full h-full top-0 left-0 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.4"
            d="M0,96L40,101.3C80,107,160,117,240,138.7C320,160,400,192,480,181.3C560,171,640,117,720,96C800,75,880,85,960,106.7C1040,128,1120,160,1200,154.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* عکس پروفایل */}
      <section
        className="absolute left-1/2 top-1 transform -translate-x-1/2 border-[1px] border-white rounded-full bg-white shadow-md z-10 cursor-pointer"
        onClick={handleProfileClick}
      >
        <img
          className="w-[70px] h-[70px] rounded-full object-cover"
          src={profileImage}
          alt="profile image"
        />
      </section>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      {/* نام کاربر */}
      <div className="absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-white text-[14px] font-semibold tracking-wide">
          کوروش تهرانی
        </p>
      </div>

      {/* خط جداکننده */}
      <div className="absolute bottom-[4rem] w-[80%] left-1/2 transform -translate-x-1/2 border-b border-gray-300 opacity-50 z-10"></div>

      {/* wallet 1 and wallet 2 */}
      <div className="absolute bottom-[1rem] left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-center z-10">
        <Wallet2Svg width="40px" height="40px" />
        <p className="text-[13px] text-white">
          موجودی کیف پول: <b>0 تومان</b>
        </p>
        <Wallet1Svg width="40px" height="40px" />
      </div>

      <div className="absolute bottom-[0.5rem] right-[0.5rem] z-10">
        {/* <button
          onClick={uploadToAPI}
          className="px-4 py-2 bg-white text-purple-700 rounded shadow-md hover:bg-purple-50"
        >
          ارسال
        </button> */}
      </div>
    </div>
  );
};

export default DetailseProfile;
