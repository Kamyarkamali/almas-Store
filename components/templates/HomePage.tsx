import HeroSlider from "@/components/module/HeroSlider";
import Section1 from "../module/Section1";
import ProductEndSlider from "../module/ProductEndSlider";
import UserTime from "../module/UserTimer";

function HomePage() {
  return (
    <div className="bg-[#F6F6F6] w-full">
      <HeroSlider />
      <Section1 />
      <ProductEndSlider />
      <UserTime />
    </div>
  );
}

export default HomePage;
