import data from "@/public/json/sectionone.json";
import Image from "next/image";
import Link from "next/link";

function Section1() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 justify-items-center gap-[29px] mt-[63px] pr-[39px] pl-[39px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="shadow-lg flex justify-center items-center shadow-gray-400 rounded-md"
        >
          <Link href={`/product-category/${item.paths}`}>
            <Image
              className=" rounded-lg md:h-full md:w-full sm:w-[532px] w-[315px]"
              src={item.image}
              width={325}
              height={235}
              key={item.id}
              alt="محصولات"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Section1;
