import React from "react";
import Myorders from "./Myorders";

function Dashboard() {
  return (
    <div className="w-full px-4 flex flex-col gap-4">
      {/* جعبه خوش‌آمدگویی */}
      <div className="bg-[#FDD64E] w-full rounded-lg p-4 md:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* پیام اول */}
          <div className="flex items-center gap-4 text-center md:text-left animate-slideIn">
            <img
              src="/images/dasboard/card2.svg"
              alt="card"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="font-bold text-blue-600">کوروش تهرانی</span> عزیز
              به فروشگاه الماس استور خوش آمدید!
            </p>
          </div>

          {/* پیام دوم */}
          <div className="flex items-center gap-4 text-center md:text-left animate-slideInDelay">
            <img
              src="/images/dasboard/card1.svg"
              alt="card"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
              با خیال راحت از فروشگاه{" "}
              <span className="font-bold text-blue-600">الماس استور</span> خرید
              کنید
            </p>
          </div>
        </div>
      </div>
      {/* جعبه سفارشات */}
      <div className="bg-[#ffffff] w-full rounded-lg p-4 md:p-9 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          {/* سفارش اول */}
          <div className="flex items-center border-b-2 lg:border-none pb-3 lg:pb-0 border-[#FDD64E] gap-4 w-full md:w-auto">
            <img
              src="/images/dasboard/1.svg"
              alt="dashboard"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-row items-center gap-3 lg:flex-col">
              <p className="font-bold text-[14px] md:text-xl">0 سفارش</p>
              <button className="border-[1px] border-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200 text-blue-500 font-bold px-4 py-2 text-[12px] md:text-[14px]">
                پیگیری سفارش
              </button>
            </div>
          </div>

          {/* سفارش دوم */}
          <div className="flex items-center gap-4 w-full md:w-auto border-b-2 lg:border-none pb-3 lg:pb-0 border-[#FDD64E]">
            <img
              src="/images/dasboard/2.svg"
              alt="dashboard"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-col">
              <p className="font-bold text-[14px] md:text-xl">0 سفارش</p>
              <p className="font-bold text-[14px] md:text-xl">تحویل داده شده</p>
            </div>
          </div>

          {/* سفارش سوم */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <img
              src="/images/dasboard/3.svg"
              alt="dashboard"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-col">
              <p className="font-bold text-[14px] md:text-xl">0 سفارش</p>
              <p className="font-bold text-[14px] md:text-xl">مرجوع شده</p>
            </div>
          </div>
        </div>
      </div>
      <Myorders />
    </div>
  );
}

export default Dashboard;
