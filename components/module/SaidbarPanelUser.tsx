"use client";
import React, { useState } from "react";
import Link from "next/link";
import DetailseProfile from "./DetailseProfile";
import { dashboard } from "@/data/data";

const SaidbarPanelUser = () => {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  return (
    <div className="w-72 bg-gradient-to-b from-gray-100 to-gray-200 h-screen shadow-lg border-l border-gray-300 flex flex-col">
      <div className="mb-6 p-4">
        <DetailseProfile />
      </div>

      <nav className="flex-1 overflow-y-auto space-y-2 px-4">
        {dashboard.map((item: any) => (
          <Link
            href={item.href || "#"}
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer transition-all group ${
              activeItem === item.id
                ? "bg-purple-100 shadow-lg"
                : "hover:bg-purple-50"
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                activeItem === item.id
                  ? "bg-purple-600 text-white"
                  : "bg-purple-500 group-hover:bg-purple-600"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-6 h-6 text-white"
              />
            </div>

            <span
              className={`text-[13px] font-medium transition-all ${
                activeItem === item.id
                  ? "text-purple-700"
                  : "text-gray-700 group-hover:text-purple-700"
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-300">
        <p className="text-center text-gray-500 text-sm">
          &copy;2025 Almas Store
        </p>
      </div>
    </div>
  );
};

export default SaidbarPanelUser;
