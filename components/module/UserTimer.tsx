"use client";
import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    { label: "تعداد مشتریان", value: 1500, color: "text-[#4C00A5]" },
    { label: "فروش موفق", value: 8500, color: "text-[#00922F]" },
    { label: "تعداد محصولات", value: 25000, color: "text-[#2749B4]" },
    { label: "برگشت از خرید", value: 12, color: "text-[#920000]" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4"
        >
          <CountUp
            end={stat.value}
            duration={4}
            separator=","
            suffix={stat.label === "برگشت از خرید" ? undefined : "+"}
            className={`text-[48px] sm:text-[60px] lg:text-[77px] font-bold ${stat.color}`}
          />
          <p
            className={`mt-2 text-[18px] sm:text-[22px] lg:text-[25px] font-medium ${stat.color}`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
