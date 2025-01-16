import { filterProducts } from "@/app/utility/flterProducts ";
import Breadcrumbs from "@/app/ui/BreadcrumbProps";
import SaidbarMobile from "@/components/module/SaidbarMobile";
import MainProducts from "@/components/templates/MainProducts";

async function page({ params }: { params: { slug: string[] } }) {
  const slug = "/" + params.slug.join("/");
  const mainCategory = params.slug[1];
  const subCategory = params.slug[2];

  // فیلتر محصولات
  const filteredProducts = filterProducts(slug, mainCategory, subCategory);

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

  const categorys = filteredProducts.map((product) => ({
    category1: product.category1,
    category3: product.category3,
    category4: product.category4,
    category: product.category,
  }));

  return (
    <div className="mt-[2.3rem]">
      <div className="flex items-center lg:text-[14px] text-[12px] mb-2 gap-2 cursor-pointer justify-between">
        <Breadcrumbs categories={categorys} />
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
