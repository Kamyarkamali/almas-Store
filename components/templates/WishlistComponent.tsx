import Image from "next/image";
import Link from "next/link";
import React from "react";

function WishlistComponent() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          className="bg-transparent w-[250px]"
          src={"/images/imageHero/heart.png"}
          width={200}
          height={200}
          alt="علاقه مندی ها"
        />
        <h3 className="text-5xl font-bold">لیست علاقه مندی ها خالی است .</h3>
        <Link href={"/"}>
          <button className="w-[145px] h-[41px] bg-[#D60644] text-white rounded-md mt-[20px]">
            بازگشت به فروشگاه
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WishlistComponent;
