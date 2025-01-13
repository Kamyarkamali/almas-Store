import { Product } from "@/types/interFace";
import LaptoppartComponent from "@/components/templates/laptoppartComponent";
import data from "@/public/json/endproduct.json";
import SectionLaptop from "@/components/module/SectionLaptop";

const LaptoppartPage = async (): Promise<JSX.Element> => {
  const filteredProducts: Product[] = data.filter(
    (item) => item.slug2 === "/laptoppart"
  );

  return (
    <div>
      <LaptoppartComponent
        initialProducts={filteredProducts.slice(0, 8)}
        totalProducts={filteredProducts}
      />
    </div>
  );
};

export default LaptoppartPage;
