import { useState, useRef } from "react";
import ArrowDown from "../icon/ArrowDown";
import data from "@/public/json/Menu.json";

function MegaMenus() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null); // ref برای ناحیه منو
  const submenuRef = useRef<HTMLDivElement | null>(null); // ref برای زیرمنو

  const handleMouseEnter = (id: number) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // زمانی که موس از کل ناحیه منو و زیرمنو خارج می‌شود
    if (
      menuRef.current &&
      !menuRef.current.contains(e.relatedTarget as Node) &&
      submenuRef.current &&
      !submenuRef.current.contains(e.relatedTarget as Node)
    ) {
      setActiveMenu(null); // منو بسته می‌شود
    }
  };

  return (
    <div className="w-full border-[1px] border-gray-300 h-[50px] mt-1">
      <div className="flex items-center h-full">
        <ul className="flex gap-6 items-center duration-300 z-50 transition-all ease-in mr-3 cursor-pointer text-[#333333] text-[13px]">
          {data.map((item: any, index: number) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              ref={menuRef}
            >
              <li className="flex items-center text-[13px]">
                {item.title}
                {item.submenu.length > 0 && <ArrowDown />}
              </li>

              {/* نمایش زیرمنوها فقط در صورت هاور روی آیتم */}
              {item.submenu.length > 0 && activeMenu === item.id && (
                <div
                  onMouseLeave={handleMouseLeave}
                  ref={submenuRef}
                  className="absolute left-[-90px] top-[100%] bg-white border border-gray-300 shadow-lg p-2 mt-1 rounded-md w-[200px] transition-all duration-300 ease-in-out"
                >
                  <ul>
                    {item.submenu.map((subItem: any) => (
                      <li
                        key={subItem.id}
                        className="p-2 text-[13px] hover:bg-gray-100 cursor-pointer"
                      >
                        {subItem.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MegaMenus;
