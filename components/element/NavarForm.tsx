"use client";
import { FC, useEffect, useState } from "react";

interface TotalPriceProps {
  totalPrice: number; // تعریف نوع پراپس
}

const NavarForm: FC<TotalPriceProps> = ({ totalPrice }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const maxPrice = 10000000; // حداکثر مقدار قیمت
    const calculatedProgress = Math.min((totalPrice / maxPrice) * 100, 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < calculatedProgress) {
          return Math.min(prev + 5, calculatedProgress);
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [totalPrice]);

  return (
    <div className="relative w-full mx-auto h-[6px] rounded-md bg-gray-300">
      <div
        className="absolute h-full bg-red-500 transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default NavarForm;
