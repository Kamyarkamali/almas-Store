"use client";

import menu from "@/public/json/Menu.json";
import { useState } from "react";
import { Range } from "react-range";
import ArrowDown from "../icon/ArrowDown";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [values, setValues] = useState<[number, number]>([20, 80]);

  const pathname = usePathname();

  const isDynamicRoute = /^\/product-category\/\d+$/.test(pathname);

  //  مخفی کردن سایدبار در بخش داینامیک
  if (isDynamicRoute) {
    return null;
  }

  const min = 0;
  const max = 100;

  // برای باز و بسته کردن منوها
  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-[400px] mt-[42px] bg-gray-100 p-4 border-l-[1px] h-full">
      <div className="flex flex-col items-center">
        {/* بخش فیلتر موجودی و حراج */}
        <div className="border-[2px] w-[362px] h-[159px] p-5">
          <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
            <h2 className="font-bold">فیلتر موجودی و حراج</h2>
          </div>
          <div className="flex flex-col h-full mt-[23px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[14px] text-[#777777]">فروش ویژه</p>
            </div>
            <div className="flex items-center gap-2 mt-[22px]">
              <input type="checkbox" />
              <p className="text-[14px] text-[#777777]">موجود در انبار</p>
            </div>
          </div>
        </div>

        {/* بخش فیلتر قیمت */}
        <div className="border-[2px] w-[362px] h-[200px] p-5 mt-[30px]">
          <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
            <h2 className="font-bold">فیلتر قیمت</h2>
          </div>
          <div className="flex flex-col h-full mt-[23px]">
            {/* اسلایدر */}
            <div className="flex flex-col items-center gap-4">
              <Range
                min={min}
                max={max}
                step={1}
                values={values}
                onChange={setValues}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "100%",
                      background: "#ddd",
                      position: "relative",
                      borderRadius: "4px",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      background: "#4CAF50",
                    }}
                  />
                )}
              />
              {/* مقادیر حداقل و حداکثر */}
              <div className="flex justify-between w-full">
                <span className="text-[14px] text-[#777777]">
                  حداقل: {values[0]}
                </span>
                <span className="text-[14px] text-[#777777]">
                  حداکثر: {values[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* بخش دسته بندی محصولات */}
        <div className="border-[2px] w-[362px] h-fit overflow-hidden mt-[30px] p-5">
          <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
            <h2 className="font-bold">دسته های محصولات</h2>
          </div>

          {menu.map((item) => (
            <div key={item.id} className="mt-[22px]">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu(item.id)}
              >
                <p className="text-[14px] text-[#777777]">{item.title}</p>
                {item.submenu.length > 0 && (
                  <ArrowDown
                    className={`transform transition-transform duration-300 ${
                      activeMenu === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  activeMenu === item.id ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                {item.submenu.map((subitem) => (
                  <p
                    key={subitem.id}
                    className="text-[14px] text-[#777777] mt-2 pl-4"
                  >
                    {subitem.title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
