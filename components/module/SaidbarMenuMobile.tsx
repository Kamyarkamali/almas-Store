"use client";
import { FC, useState } from "react";
import CloseSvg from "../icon/CloseSvg";
import { Opens } from "@/types/interFace";
import { Range } from "react-range";
import ArrowDown from "../icon/ArrowDown";
import menu from "@/public/json/Menu.json";
import { useFavorites } from "@/context/FavoritesProvider";
import Link from "next/link";

const SaidbarMenuMobile: FC<Opens> = ({ open, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [values, setValues] = useState<[number, number]>([20, 80]);
  const { toggleCheckbox, toggleChebox2 } = useFavorites();

  const min = 0;
  const max = 100;

  // برای باز و بسته کردن منوها
  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("backdrop")) {
      setOpen(false);
    }
  };

  // تابع واسطه برای مدیریت تغییرات مقدار Range
  const handleRangeChange = (newValues: number[]) => {
    setValues([newValues[0], newValues[1]] as [number, number]);
  };

  const clickTitle = (title: string) => {
    if (title === "صفحه نخست") {
      setOpen(false);
    }
  };

  return (
    <div
      className={`fixed z-50 top-0 left-0 right-0 bottom-0 transition-all duration-300 ${
        open
          ? "backdrop-blur-md bg-black bg-opacity-30 visible opacity-100"
          : "invisible opacity-0"
      } backdrop`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white w-[300px] transition-transform duration-300 h-screen absolute overflow-y-auto ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="flex justify-end pt-4 pl-4">
          <div
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <CloseSvg width="13px" height="13px" />
            <p className="text-[14px] font-bold">بستن</p>
          </div>
        </div>

        {/* بخش فیلتر موجودی و حراج */}
        <div className="border-[2px] w-full h-[159px] p-5 mt-[30px]">
          <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
            <h2 className="font-bold">فیلتر موجودی و حراج</h2>
          </div>
          <div className="flex flex-col h-full mt-[23px]">
            <div className="flex items-center gap-2">
              <input onChange={toggleCheckbox} type="checkbox" />
              <p className="text-[14px] text-[#777777]">فروش ویژه</p>
            </div>
            <div className="flex items-center gap-2 mt-[22px]">
              <input type="checkbox" onChange={toggleChebox2} />
              <p className="text-[14px] text-[#777777]">موجود در انبار</p>
            </div>
          </div>
        </div>

        <div className="border-[2px] w-full h-[200px] p-5 mt-[30px]">
          <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
            <h2 className="font-bold">فیلتر قیمت</h2>
          </div>
          <div className="flex flex-col h-full mt-[23px]">
            <div className="flex flex-col items-center gap-4">
              <Range
                min={min}
                max={max}
                step={1}
                values={values}
                onChange={handleRangeChange}
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

          <div className="border-[2px] w-full h-fit overflow-y-auto p-5 flex  flex-col">
            <div className="bg-[#ECECEC] h-[40px] flex items-center justify-start p-4">
              <h2 className="font-bold">دسته های محصولات</h2>
            </div>

            {menu.map((item) => (
              <div key={item.id} className="mt-[22px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMenu(item.id)}
                >
                  <Link
                    onClick={() => clickTitle(item.title)}
                    href={item.title === "صفحه نخست" ? "/" : "#"}
                    className="text-[14px] text-[#777777]"
                  >
                    {item.title}
                  </Link>
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
                  {item?.submenu?.map((subitem: any) => (
                    <p
                      key={subitem?.id}
                      className="text-[14px] text-[#777777] mt-2 pl-4"
                    >
                      <Link href={subitem?.href || "#"}>{subitem?.title}</Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaidbarMenuMobile;
