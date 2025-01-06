import Sidebar from "@/components/module/Saidbar";
import SaidbarMobile from "@/components/module/SaidbarMobile";
import { Chidlren } from "@/types/interFace";
import React, { FC } from "react";

const ProductCategoryLayout: FC<Chidlren> = ({ children }) => {
  return (
    <div className="flex">
      {/* سایدبار دکستاپ */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default ProductCategoryLayout;
