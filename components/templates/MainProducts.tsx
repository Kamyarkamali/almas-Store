import { Product } from "@/types/interFace";

const MainProducts = ({ products }: { products: Product }) => {
  if (!products) {
    return <p>محصولی برای نمایش وجود ندارد.</p>;
  }

  console.log(products);

  return <div>MainProducts</div>;
};

export default MainProducts;
