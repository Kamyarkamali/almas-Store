import HeroSlider from "@/components/module/HeroSlider";
import React from "react";

async function page() {
  const res = await fetch("http://localhost:3000/json/hero.json");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <HeroSlider data={data} />
    </div>
  );
}

export default page;
