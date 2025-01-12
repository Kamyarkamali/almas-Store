import DetailseCategory from "@/components/templates/DetailseCategory";
import data from "@/public/json/endproduct.json";
import { Product } from "@/types/interFace";

function page({ params }: { params: { category: number } }) {
  const { category } = params;

  const product: Product = data[category - 1];

  return (
    <div>
      <DetailseCategory product={product} />
    </div>
  );
}

export default page;
