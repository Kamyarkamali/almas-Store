import HeroSlider from "@/components/module/HeroSlider";
import Section1 from "../module/Section1";
import ProductEndSlider from "../module/ProductEndSlider";
import UserTime from "../module/UserTimer";
import SectionLaptop from "../module/SectionLaptop";
import SectionMotherBoard from "../module/SectionMotherBoard";
import SectionLabale from "../module/SectionLabale";
import SectionGrapgic from "../module/SectionGraphic";
import Pardazandeh from "../module/Pardazandeh";
import RamSection from "../module/RamSection";
import PowerSection from "../module/PowerCompiuter";

function HomePage() {
  return (
    <div className="bg-[#F6F6F6] w-full">
      <HeroSlider />
      <Section1 />
      <ProductEndSlider />
      <UserTime />
      <SectionLaptop />
      <SectionMotherBoard />
      <SectionLabale />
      <SectionGrapgic />
      <Pardazandeh />
      <SectionLabale />
      <RamSection />
      <PowerSection />
    </div>
  );
}

export default HomePage;
