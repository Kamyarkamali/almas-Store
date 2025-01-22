import React from "react";
import OrdersSteps from "./OrdersSteps";
import dataTabale from "@/public/json/orders.json";

function OrderComponent() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <p className="text-xl font-bold text-blue-600 border-b-2 border-blue-600 pb-3 mb-6 text-center">
          پی‌گیری سفارش
        </p>
        <OrdersSteps />
      </div>

      {/* اضافه کردن overflow-x-auto به‌منظور جلوگیری از اسکرول افقی */}
      <div className="overflow-x-auto max-w-full">
        <div className="table-auto text-sm text-gray-700 bg-white shadow-md rounded-lg mt-7">
          {/* هدر جدول */}
          <div className="grid grid-cols-5 gap-4 p-4 sm:grid-cols-5 sm:p-0">
            <div className="font-semibold">شماره</div>
            <div className="font-semibold">تاریخ</div>
            <div className="font-semibold">وضعیت</div>
            <div className="font-semibold">مبلغ</div>
            <div className="font-semibold">عملیات</div>
          </div>

          {/* ردیف‌های جدول */}
          {dataTabale.map((order) => (
            <div
              key={order.id}
              className="grid odd:bg-gray-200  grid-cols-5 gap-4 p-4 mt-9 border-b sm:grid-cols-5 transition-colors"
            >
              <div className="lg:text-[14px] text-[12px]">{order.number}</div>
              <div className="lg:text-[14px] text-[12px]">{order.date}</div>
              <div
                className={
                  order.Status === "لغو شده" || order.Status === "ناموفق"
                    ? "bg-red-500 w-fit p-3 py-1 text-[12px] h-fit rounded-full text-white"
                    : order.Status === "موفق"
                    ? "bg-green-500 w-fit p-3 py-1 lg:text-[14px] text-[12px] h-fit rounded-full text-white"
                    : order.Status === "درحال بررسی"
                    ? "bg-blue-400 w-fit text-center p-3 py-1 text-[12px] h-fit rounded-full text-white"
                    : ""
                }
              >
                {order.Status}
              </div>
              <div className="lg:text-[14px] text-[12px]">
                {order.Total} تومان
              </div>
              <div>
                <div className="flex lg:flex-row flex-col justify-start gap-2">
                  <button className="bg-blue-500 lg:text-[14px] text-white px-4 w-[70px] lg:w-fit rounded-lg text-[11px] py-1 hover:bg-blue-600 focus:outline-none transition-colors">
                    مشاهده فاکتور
                  </button>
                  {order.Status === "ناموفق" && (
                    <button className="bg-red-500 lg:text-[14px] text-white px-4 w-[70px] lg:w-fit rounded-lg text-[11px] py-1 hover:bg-red-600 focus:outline-none transition-colors">
                      پرداخت
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderComponent;
