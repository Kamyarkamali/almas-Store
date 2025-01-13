import DetailseCategory from "@/components/templates/DetailseCategory";
import { Product } from "@/types/interFace";
import data from "@/public/json/endproduct.json";

function page({ params }: { params: { product: string } }) {
  const productId = parseInt(params.product, 10);

  // محصول اصلی
  const products: Product | undefined = data.find(
    (item) => parseInt(item.id, 10) === productId
  );

  // محصولات دسته‌بندی "لپ تاپ"
  const productLaptop: Product[] = data.filter(
    (item) => item.category1 === "لپ تاپ"
  );

  if (!products) {
    return <div>محصولی یافت نشد</div>;
  }

  return (
    <div>
      <DetailseCategory product={products} productLaptop={productLaptop} />
    </div>
  );
}

export default page;
