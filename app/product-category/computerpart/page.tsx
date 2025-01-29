"use client";
import LaptoppartComponent from "@/components/templates/laptoppartComponent";
import data from "@/public/json/endproduct.json";
import Link from "next/link";
import { useSelector } from "react-redux";

const Computerpart = (): JSX.Element => {
  const filteredProducts: any = data.filter(
    (item) => item.category === "کامپیوتر اسمبل شده"
  );

  // گرفتن دیتای ساخته شده از ریداکس // موقت
  const state = useSelector((state: any) => state.product.products);

  return (
    <div>
      <nav className="flex items-center gap-2 mt-9 *:text-[14px]">
        <Link className="text-[#777777]" href={"/"}>
          خانه
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#777777]" href={"/product-category/laptoppart"}>
          {filteredProducts[0].category1}
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#000000]" href={"/product-category/laptoppart"}>
          {filteredProducts[0]?.category}
        </Link>
      </nav>
      <LaptoppartComponent
        state={state}
        initialProducts={filteredProducts.slice(0, 8)}
        totalProducts={filteredProducts}
      />
    </div>
  );
};

export default Computerpart;
