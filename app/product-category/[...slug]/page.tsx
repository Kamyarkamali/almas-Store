import SaidbarMobile from "@/components/module/SaidbarMobile";
import MainProducts from "@/components/templates/MainProducts";
import data from "@/public/json/endproduct.json";
import { Product } from "@/types/interFace";
import Link from "next/link";

async function page({ params }: { params: { slug: string[] } }) {
  const slug = "/" + params.slug.join("/");

  // اگر مسیر برابر با /product-category/laptoppart بود، تمام داده‌ها را بدون فیلتر نمایش بده
  let filteredProducts: Product[] = [];

  if (slug === "/product-category/laptoppart") {
    // نمایش تمام داده‌ها در این مسیر
    filteredProducts = data;
    console.log("Filtered Products:", filteredProducts); // بررسی داده‌های فیلتر شده
  } else {
    // فیلتر محصولات با استفاده از slug دقیق در سایر مسیرها
    filteredProducts = data.filter((item: Product) => item.slug === slug);
    console.log("Filtered Products based on slug:", filteredProducts); // بررسی داده‌های فیلتر شده بر اساس slug
  }

  // گرفتن دسته‌بندی مرتبط
  const category =
    filteredProducts.length > 0 && filteredProducts[0]?.category1
      ? filteredProducts[0].category1
      : "نامشخص";

  if (filteredProducts.length === 0) {
    return (
      <div className="mt-[2.3rem]">
        <p className="text-red-500">محصولی یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="mt-[2.3rem]">
      <div className="flex items-center lg:text-[14px] text-[12px] mb-2 gap-2 cursor-pointer justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <p className="text-[#777777]">خانه</p>
          </Link>
          <p className="text-[#777777]">/</p>
          <p className="text-[#777777]">{category}</p>
        </div>
        <div>{filteredProducts.length}</div>
      </div>

      <div className="lg:hidden">
        <SaidbarMobile />
      </div>
      <MainProducts products={filteredProducts} />
    </div>
  );
}

export default page;
