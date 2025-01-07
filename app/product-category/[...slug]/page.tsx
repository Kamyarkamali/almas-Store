import SaidbarMobile from "@/components/module/SaidbarMobile";
import MainProducts from "@/components/templates/MainProducts";
import data from "@/public/json/endproduct.json";
import { Product } from "@/types/interFace";
import Link from "next/link";

async function page({ params }: { params: { slug: string[] } }) {
  const slug = "/" + params.slug.join("/");

  // فیلتر محصولات بر اساس slug
  const filteredProducts: Product[] = data.filter(
    (item: any) => item.slug === slug
  );

  // گرفتن دسته‌بندی مرتبط با این slug
  const category =
    filteredProducts.length > 0 ? filteredProducts[0].category1 : "";

  return (
    <div className="mt-[2.3rem]">
      <div className="flex  items-center *:lg:text-[14px] *:text-[12px] mb-2 gap-2 *:cursor-pointer justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <p className="text-[#777777]">خانه</p>
          </Link>
          <p className="text-[#777777]">/</p>
          <p className="text-[#777777]">{category}</p>
          <p className="text-[#777777]">/</p>
          <p
            className={`text-[#111111] font-bold block ${
              filteredProducts.length > 0 && filteredProducts[0].category
                ? "block"
                : "hidden"
            }`}
          >
            {filteredProducts.length > 0 && filteredProducts[0].category}
          </p>
          <p className="text-[#777777] lg:block hidden">/</p>
          <p className="text-[13px] font-bold hidden lg:block">
            {filteredProducts.length > 0 && filteredProducts[0].nameProduct}
          </p>
        </div>

        <div>22</div>
      </div>

      <div className="lg:hidden">
        <SaidbarMobile />
      </div>
      <MainProducts products={filteredProducts} />
    </div>
  );
}

export default page;
