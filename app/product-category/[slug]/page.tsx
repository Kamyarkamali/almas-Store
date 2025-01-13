import React from "react";
import data from "@/public/json/endproduct.json";
import DaynamicProductCategory from "@/components/templates/DaynamicProductCategory";
import Link from "next/link";

function DaynamicRoute({ params }: { params: { slug: string } }) {
  const filteredProducts = data.filter(
    (item) => item.category3 === params.slug
  );

  return (
    <div>
      <nav className="flex items-center gap-2 lg:*:text-[14px] text-[12px] mt-10">
        <Link className="text-[#777777]" href={"/"}>
          خانه
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#777777]" href={"/"}>
          {filteredProducts[0]?.category1}
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#000000] font-bold" href={"/"}>
          {filteredProducts[0]?.category}
        </Link>
      </nav>

      <DaynamicProductCategory filteredProducts={filteredProducts} />
    </div>
  );
}

export default DaynamicRoute;
