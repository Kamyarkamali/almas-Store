import DetailseCategory from "@/components/templates/DetailseCategory";
import data from "@/public/json/endproduct.json";

function page({ params }: { params: { product: string } }) {
  const productId = parseInt(params.product, 10);

  // محصول اصلی
  const products: any = data.find(
    (item) => parseInt(item.id, 10) === productId
  );

  // محصولات دسته‌بندی "لپ تاپ"
  const productLaptop: any = data.filter((item) => item.category1 === "لپ تاپ");

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
