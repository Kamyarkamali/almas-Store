"use client";

import Link from "next/link";
import { useState } from "react";
import * as Icons from "lucide-react";
import { menuItems } from "@/data/data";
import { MenuItem } from "@/types/interFace";
import { useSelector } from "react-redux";

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // نمایش  زیر منوها-مقدار بلاگ ها
  const state = useSelector((state: any) => state.posts.posts);
  const state2 = useSelector((state: any) => state.product.products);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSubmenu = (menuTitle: string) => {
    setOpenMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  return (
    <div className="relative rtl">
      {/* دکمه باز و بسته شدن برای موبایل */}
      <button
        className="fixed top-4 right-4 z-50 bg-gray-900 text-white p-2 rounded md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </button>

      {/* سایدبار */}
      <aside
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <div className="p-4 text-center text-lg font-bold border-b border-gray-700">
          پنل مدیریت
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4 text-right">
            {menuItems.map((item: MenuItem) => {
              const Icon = Icons[item.icon];

              return (
                <li key={item.title} className="group">
                  <div
                    className="flex items-center justify-between gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <span>{item.title}</span>

                    {
                      // @ts-ignore
                      Icon && <Icon size={20} />
                    }
                  </div>

                  {item.submenu.length > 0 && (
                    <ul
                      className={`${
                        openMenu === item.title ? "block" : "hidden"
                      } mt-1 space-y-1 pr-8`}
                    >
                      {item?.submenu?.map((submenu) => (
                        <li key={submenu.title}>
                          <Link
                            href={submenu.path}
                            className="block p-2 hover:bg-gray-700 rounded"
                          >
                            {submenu.title === "همه نوشته‌ها" ? (
                              <div className="flex items-center gap-2">
                                <span>{submenu.title}</span>
                                <span className="text-sm text-gray-400">
                                  {`${
                                    state.length
                                      ? state.length + "عدد نوشته"
                                      : ""
                                  }`}
                                </span>
                              </div>
                            ) : (
                              <span>
                                {`${
                                  submenu.title === "همه محصولات"
                                    ? state2.length + " عدد محصول"
                                    : submenu.title
                                }`}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* محتوای اصلی */}
      <main
        className={`transition-all duration-300 md:mr-64 ${
          isOpen ? "mr-64" : "mr-0"
        }`}
      >
        {/* اینجا محتوای اصلی را قرار دهید */}
      </main>

      {/* Overlay برای موبایل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
