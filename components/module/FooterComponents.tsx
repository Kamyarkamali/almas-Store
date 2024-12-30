import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../icon/ArrowLeftSvg";

function FooterComponents() {
  return (
    <div className="w-full flex justify-between items-center pt-10 px-0 pb-2">
      <section className="flex flex-col gap-[15px] mr-4 mb-[3.135rem]">
        <h5 className="text-[16px] text-[#333333] font-bold">لینک های مفید</h5>
        <ul className="flex flex-col gap-3">
          <Link href={"#"}>
            <li className="text-[14px] text-[#777777]">صفحه اصلی</li>
          </Link>
          <Link href={"#"}>
            <li className="text-[14px] text-[#777777]">فروشگاه</li>
          </Link>
          <Link href={"#"}>
            <li className="text-[14px] text-[#777777]">درباره ما</li>
          </Link>
        </ul>
      </section>

      <section className="flex flex-col gap-[15px] mb-[3.135rem]  items-center">
        <h5 className="text-[16px] text-[#333333] font-bold">لینک های مهم</h5>
        <ul className="flex flex-col ml-4 gap-3">
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">ثبت شکایت</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">ثبت سفارش قطعه</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">تماس با ما</li>
            </Link>
          </div>
        </ul>
      </section>

      <section className="flex flex-col gap-[15px] mb-[3.135rem]  items-center">
        <h5 className="text-[16px] text-[#333333] font-bold">
          حریم شخصی و قوانین
        </h5>
        <ul className="flex flex-col ml-16 gap-3">
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">قوانین سایت</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">نحوه ارسال</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeftSvg width="11.26px" height="11.26px" />
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">شرایط گارانتی</li>
            </Link>
          </div>
        </ul>
      </section>

      <section className="mb-[3.135rem]">
        <h5 className="text-[16px] text-[#333333] font-bold">
          اعتماد شما افتخار ماست
        </h5>
      </section>

      <section className="mb-[3.135rem]">5</section>
    </div>
  );
}

export default FooterComponents;
