import { Product } from "@/types/interFace";
import LaptoppartComponent from "@/components/templates/laptoppartComponent";
import data from "@/public/json/endproduct.json";
import Link from "next/link";

const LaptoppartPage = async (): Promise<JSX.Element> => {
  const filteredProducts: Product[] = data.filter(
    (item) => item.slug2 === "/laptoppart"
  );

  return (
    <div>
      <nav className="flex items-center gap-2 mt-9 *:text-[14px]">
        <Link className="text-[#777777]" href={"/"}>
          خانه
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#777777]" href={"/product-category/laptoppart"}>
          {filteredProducts[1]?.category1}
        </Link>
        <p className="text-[#777777]">/</p>
        <Link className="text-[#000000]" href={"/product-category/laptoppart"}>
          {filteredProducts[0]?.category}
        </Link>
      </nav>
      <LaptoppartComponent
        initialProducts={filteredProducts.slice(0, 8)}
        totalProducts={filteredProducts}
      />
    </div>
  );
};

export default LaptoppartPage;
