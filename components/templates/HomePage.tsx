import HeroSlider from "@/components/module/HeroSlider";
import Section1 from "../module/Section1";
import EndProject from "../module/EndProject";

function HomePage() {
  return (
    <div className="bg-[#F6F6F6] w-full">
      <HeroSlider />
      <Section1 />
      <EndProject />
    </div>
  );
}

export default HomePage;
