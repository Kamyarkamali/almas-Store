// کامپوننت های آیکون
import Link from "next/link";
import ShopSvg from "../icon/ShopSvg";
import ShuffileSvg from "../icon/ShuffileSvg";
import UserSvg from "../icon/UserSvg";

function TopMenuSection() {
  return (
    <section className="flex items-center gap-2">
      <div className="flex items-center group border-l-[1px] border-[#D9D9D9] pl-[15px]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShopSvg width="21px" height="21px" color="#B6B6B6" />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </div>
          <p className="text-[13px] text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
            0 تومان
          </p>
        </div>
      </div>

      <div className="flex items-center group border-l-[1px] border-[#D9D9D9] pl-[15px]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-[20px] h-[20px]"
              src="/svgs/like.svg"
              alt="faiverite"
            />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </div>
          <Link href={"/wishlist"}>
            <p className="text-[13px] text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
              علاقه مندی ها
            </p>
          </Link>
        </div>
      </div>

      <div className="flex items-center group border-l-[1px] border-[#D9D9D9] pl-[15px]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShuffileSvg width="21px" height="21px" color="#B6B6B6" />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </div>
          <p className="text-[13px] text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
            مقایسه
          </p>
        </div>
      </div>

      <div className="flex items-center group pl-[15px]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <UserSvg width="21px" height="21px" color="#B6B6B6" />
            <div className="absolute bg-[#d60644] flex justify-center items-center text-white rounded-[100%] w-[15px] h-[15px] top-[-4px] left-[-0.5rem]">
              <span className="text-[9px]">0</span>
            </div>
          </div>
          <Link href={"/register"}>
            <p className="text-[13px] text-[#333333] group-hover:text-[#453939be] transition-colors cursor-pointer">
              ورود / ثبت نام
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopMenuSection;
