import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../icon/ArrowLeftSvg";
import Image from "next/image";

function FooterComponents() {
  return (
    <div className="w-full sm:grid-cols-2 md:grid-cols-4 justify-items-start md:justify-items-start grid lg:grid-cols-6 custom:grid-cols-4 pt-10 pb-2">
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

      <section className="flex flex-col gap-[15px] mb-[3.135rem] items-center mr-4 sm:mr-0">
        <h5 className="text-[16px] text-[#333333] font-bold">لینک های مهم</h5>
        <ul className="flex flex-col md:ml-4 gap-3 ">
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ArrowLeftSvg width="11.26px" height="11.26px" />
            </div>
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">ثبت شکایت</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ArrowLeftSvg width="11.26px" height="11.26px" />
            </div>
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">ثبت سفارش قطعه</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <div className="hidden md:block">
                <ArrowLeftSvg width="11.26px" height="11.26px" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <ArrowLeftSvg width="11.26px" height="11.26px" />
              </div>
              <Link href={"#"}>
                <li className="text-[14px] text-[#777777]">تماس با ما</li>
              </Link>
            </div>
          </div>
        </ul>
      </section>

      <section className="flex flex-col gap-[15px] mb-[3.135rem] items-center mr-[1rem] md:mr-0">
        <h5 className="text-[16px] text-[#333333] font-bold">
          حریم شخصی و قوانین
        </h5>
        <ul className="flex flex-col ml-16 gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ArrowLeftSvg width="11.26px" height="11.26px" />
            </div>
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">قوانین سایت</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ArrowLeftSvg width="11.26px" height="11.26px" />
            </div>
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">نحوه ارسال</li>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ArrowLeftSvg width="11.26px" height="11.26px" />
            </div>
            <Link href={"#"}>
              <li className="text-[14px] text-[#777777]">شرایط گارانتی</li>
            </Link>
          </div>
        </ul>
      </section>

      <section className="mb-[3.135rem] mr-4 sm:mr-0">
        <h5 className="text-[16px] text-[#333333] font-bold">
          اعتماد شما افتخار ماست
        </h5>
        <div className="flex items-center mt-[10px]">
          <Image
            src={"/images/imagesFooter/2.png"}
            width={83}
            height={83}
            alt="نماد اعتماد فروشگاه الکاس"
          />
          <Image
            src={"/images/imagesFooter/logo.png"}
            width={84}
            height={92}
            alt="نماد اعتماد فروشگاه الکاس"
          />
        </div>
      </section>

      <section className="mb-[1.135rem] mr-[20px] lg:mr-0 custom:mr-4">
        <h5 className="text-[16px] text-[#333333] font-bold mb-[20px]">
          تماس با ما
        </h5>
        <p className="text-[14px] text-[#777777] w-[370px] lg:w-[470px] sm:w-[590px] mb-[20px]">
          آدرس : تهران – جنت اباد جنوبی – بلوار لاله شرقی – نبش کوچه نسترن –
          مجتمع تجاری لاله – فروشگاه الماس
        </p>
        <p className="text-[14px] text-[#777777] w-[370px] sm:w-[378px] mb-[20px]">
          تلفن های تماس : ۰۲۱۴۶۱۳۸۵۱۸ – ۰۲۱۴۶۱۳۸۵۱۷ – ۰۹۱۲۸۳۳۱۶۰۱
        </p>
        {/* <p className="text-[14px] hidden sm:block text-[#777777] w-[360px] mb-[20px]">
          تلفن های تماس : ۰۲۱۴۶۱۳۸۵۱۸ – ۰۲۱۴۶۱۳۸۵۱۷ – شنبه تا چهارشنبه از ساعت
          10 الی 18 و پنج شنبه ها از ساعت 10 الی 14
        </p> */}
        <p className="text-[14px] text-[#777777] w-[360px] mb-[20px]">
          ساعات پاسخگویی فروشگاه الماس ویستا:
        </p>
        <p className="text-[14px] text-[#777777] w-[360px] sm:w-[390px] mb-[20px]">
          شنبه تا چهارشنبه از ساعت 10 الی 18 و پنج شنبه ها از ساعت 10 الی 14
        </p>
      </section>
    </div>
  );
}

export default FooterComponents;
