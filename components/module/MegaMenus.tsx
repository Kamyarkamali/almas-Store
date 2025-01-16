import { useState, useRef } from "react";
import ArrowDown from "../icon/ArrowDown";
import data from "@/public/json/Menu.json";
import ArrowLeftSvg from "../icon/ArrowLeftSvg";
import Link from "next/link";

function MegaMenus() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubmenu(null);
    }, 300);
  };

  const handleSubmenuMouseEnter = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSubmenu(id);
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  return (
    <div className="w-full border-[1px] border-gray-300 h-[50px] mt-1">
      <div className="flex items-center h-full">
        <ul className="flex gap-6 items-center z-20 mr-3 cursor-pointer text-[#333333] text-[13px]">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <li className="flex items-center text-[13px]">
                <Link href={item.href ? item.href : "#"}>{item.title}</Link>
                {item.submenu.length > 0 && <ArrowDown />}
              </li>

              {item.submenu.length > 0 && activeMenu === item.id && (
                <div className="absolute left-[-80px] top-[100%] bg-white border border-gray-300 shadow-lg p-2 mt-1 rounded-md w-[200px]">
                  <ul>
                    {item.submenu.map((subItem: any) => (
                      <li
                        key={subItem.id}
                        className="p-2 text-[13px] hover:bg-gray-100 cursor-pointer relative"
                        onMouseEnter={() => handleSubmenuMouseEnter(subItem.id)}
                        onMouseLeave={handleSubmenuMouseLeave}
                      >
                        <div className="flex items-center justify-between">
                          <p
                            onMouseEnter={() =>
                              handleSubmenuMouseEnter(subItem.id)
                            }
                          >
                            <Link
                              onClick={() => setActiveMenu(null)}
                              href={subItem.href ? subItem.href : "#"}
                            >
                              {subItem?.title}
                            </Link>
                          </p>
                          {subItem?.submenu?.length > 1 && (
                            <ArrowLeftSvg width="13px" height="13px" />
                          )}
                        </div>

                        {subItem.submenu?.length > 1 &&
                          activeSubmenu === subItem.id && (
                            <div className="absolute left-[-307px] z-20 top-0 bg-white border border-gray-300 shadow-lg p-2 rounded-md w-[300px]">
                              {subItem.submenu.map((subSubItem: any) => (
                                <div
                                  onClick={() => setActiveMenu(null)}
                                  key={subSubItem.id}
                                  className="p-2 text-[13px] hover:bg-gray-100 cursor-pointer"
                                >
                                  <Link href={`${subSubItem.href}`}>
                                    {subSubItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
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
