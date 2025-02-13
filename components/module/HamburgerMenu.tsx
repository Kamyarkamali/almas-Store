import { OpenBlur } from "@/types/interFace";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import menuData from "@/public/json/Menu.json";
import ArrowDown from "../icon/ArrowDown";

interface MenuItem {
  id: string | number;
  title: string;
  href?: string;
  submenu?: MenuItem[];
}

const HamburgerMenu: FC<OpenBlur> = ({ openBlur, setOpenBlur }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openMenus, setOpenMenus] = useState<Record<string | number, boolean>>(
    {}
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenBlur(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // باز و بسته کردن زیرمنوها
  const toggleSubmenu = (id: string | number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className="w-[300px] h-screen bg-white overflow-y-auto flex flex-col"
      ref={menuRef}
    >
      {/* ُرچ بار همبرگرمنو */}
      <div className="flex shadow-md items-center justify-between p-5">
        <input
          type="text"
          placeholder="جستوجوی محصولات"
          className="placeholder:text-sm w-full font-bold outline-none p-1 text-gray-500 text-sm"
        />
        <IoSearchOutline size={22} color="gray" />
      </div>

      <div>
        <ul className="flex flex-col p-4 space-y-2 text-[13px] font-bold">
          {menuData.map((item: any) => (
            <li
              key={item.id}
              className="relative border-b-[1px] border-gray-300 pt-3 w-full"
            >
              {item.href ? (
                <Link href={item.href} className="block p-2 font-bold">
                  {item.title}
                </Link>
              ) : (
                <button
                  className="w-full text-left p-2 text-gray-800 flex justify-between"
                  onClick={() => toggleSubmenu(item.id)}
                >
                  {item.title} {item.submenu?.length > 0 && <ArrowDown />}
                </button>
              )}

              {/* زیرمنو */}
              {item.submenu?.length > 0 && openMenus[item.id] && (
                <ul className="ml-4 mt-2 font-bold text-[13px] border-b-[1px]">
                  {item.submenu.map((sub: any) => (
                    <li key={sub.id} className="py-1 pt-4">
                      {sub.href ? (
                        <Link href={sub.href} className="text-gray-600">
                          {sub.title}
                        </Link>
                      ) : (
                        <button
                          className="w-full text-left text-gray-600 flex justify-between"
                          onClick={() => toggleSubmenu(sub.id)}
                        >
                          {sub.title} {sub.submenu?.length > 0 && <ArrowDown />}
                        </button>
                      )}

                      {/* زیرمنوی سطح بعدی */}
                      {sub.submenu?.length > 0 && openMenus[sub.id] && (
                        <ul className="ml-4 mt-1 border-l-2 border-gray-200 pl-2">
                          {sub.submenu.map((subItem: any) => (
                            <li key={subItem.id} className="py-1">
                              <Link
                                href={subItem.href}
                                className="text-gray-500"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
