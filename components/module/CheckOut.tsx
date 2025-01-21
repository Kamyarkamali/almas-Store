"use client";
import { selectCartTotalPrice } from "@/featcher/crtSlice";
import Link from "next/link";
import { useSelector } from "react-redux";
import FormNavarSending from "../templates/FormNavarSending";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import formatNumber from "@/helpers/replaceNumber";
import { useCart } from "@/hooks/useCart";

interface FormData {
  companyName?: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  mobile: string;
  email: string;
  createAccount: boolean;
  differentShippingAddress: boolean;
  orderDescription: string;
}

// Yup validation schema
const validationSchema = yup.object({
  firstName: yup.string().required("نام الزامی است"),
  lastName: yup.string().required("نام خانوادگی الزامی است"),
  companyName: yup.string(),
  streetAddress: yup.string().required("آدرس خیابان الزامی است"),
  mobile: yup
    .string()
    .matches(/^09\d{9}$/, "لطفا یک شماره موبایل معتبر وارد کنید")
    .required("شماره موبایل الزامی است"),
  email: yup
    .string()
    .email("لطفا یک ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
});

function CheckOut() {
  const totalPrice = useSelector((state: any) => selectCartTotalPrice(state));
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isCityOpen, setIsCityOpen] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("zarinpal");
  const [sentMotor, setSendMotor] = useState<string>("motor");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSend = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSendMotor(event.target.value);
  };

  const { cart } = useCart();

  const cities: string[] = [
    "آبسرد",
    "آبعلی",
    "احمد آباد مسفوفی",
    "ارجمند",
    "اسلامشهر",
    "باغستان",
    "باقرشهر",
    "بومهن",
    "پاکدشت",
    "پردیس (شهر)",
    "پرند",
    "تجریش",
    "تهران",
    "دماوند",
    "رباط کریم",
  ];

  const filteredCities = cities.filter((city) => city.includes(searchTerm));

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    /* @ts-ignore */
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="mt-[1.85rem] pr-3 items-center xl:items-start flex xl:flex-row flex-col justify-between">
      <div className="lg:*:text-[14px] text-[12px] flex flex-col gap-8">
        <div className="flex items-center gap-1">
          <p>قبلا ثبت نام کرده اید؟</p>
          <Link
            href={"/"}
            className="text-[#D60644] border-b-[1px] border-[#D60644]"
          >
            برای ورود اینجا کلیک کنید
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <p>کد تخفیف دارید؟</p>
          <Link
            href={"/"}
            className="text-[#D60644] border-b-[1px] border-[#D60644]"
          >
            برای نوشتن اینجا کلیک کنید
          </Link>
        </div>
        <section className="w-[678px] hidden lg:block">
          <FormNavarSending />
        </section>

        <section>
          <h3 className="text-[22px] font-bold">جزئیات صورتحساب</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="flex flex-col lg:flex-row lg:gap-7">
              <div className="flex flex-col mb-4 w-full lg:w-[48%]">
                <label className="mb-2 after:content-['*'] text-[14px]">
                  نام
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
                />
                <p className="text-red-500 text-xs">
                  {errors.firstName?.message}
                </p>
              </div>
              <div className="flex flex-col mb-4 w-full lg:w-[48%]">
                <label className="mb-2 after:content-['*'] text-[14px]">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
                />
                <p className="text-red-500 text-xs">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-4 w-full">
              <label className="mb-2 after:content-['(اختیاری)']">
                نام شرکت
              </label>
              <input
                type="text"
                {...register("companyName")}
                className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 w-full">
              <p className="text-[14px]">کشور / منطقه*</p>
              <p className="text-[14px] text-[#777777] font-bold">ایران</p>
            </div>

            <div className="flex flex-col w-full mt-4">
              <label className="mb-2 after:content-['*'] text-[14px]">
                شهر
              </label>
              <div className="relative">
                <div
                  className="border-2 border-gray-300 p-2 rounded-md cursor-pointer"
                  onClick={() => setIsCityOpen(!isCityOpen)}
                >
                  {selectedCity || "لطفا شهر خود را انتخاب کنید"}
                </div>
                {isCityOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="جستجو..."
                      className="w-full border-b-2 border-gray-300 p-2 outline-none"
                    />
                    <ul className="list-none p-2">
                      {filteredCities.map((city, index) => (
                        <li
                          key={index}
                          onClick={() => handleCitySelect(city)}
                          className="p-2 cursor-pointer hover:bg-[#D60644] transition-colors duration-200 hover:text-white"
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-4 w-full">
              <label className="mb-2 after:content-['*']">آدرس خیابان</label>
              <input
                placeholder="نام خیابان و پلاک و خانه"
                type="text"
                {...register("streetAddress")}
                className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
              />
              <p className="text-red-500 text-xs">
                {errors.streetAddress?.message}
              </p>
            </div>

            <div className="flex flex-col mt-4 w-full">
              <label className="mb-2 after:content-['*']">تلفن همراه</label>
              <input
                type="text"
                {...register("mobile")}
                className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
              />
              <p className="text-red-500 text-xs">{errors.mobile?.message}</p>
            </div>

            <div className="flex flex-col mt-4 w-full">
              <label className="mb-2 after:content-['*']">آدرس ایمیل</label>
              <input
                type="text"
                {...register("email")}
                className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[41px]"
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            </div>

            <div className="flex flex-col gap-3 mt-4 w-full">
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register("createAccount")} />
                <p>میخواهید یک حساب کاربری ایجاد کنید؟</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("differentShippingAddress")}
                />
                <p>حمل و نقل به یک آدرس متفاوت؟</p>
              </div>
              <div className="flex flex-col mt-4 w-full">
                <label className="mb-2 after:content-['(اختیاری)']">
                  توضیحات سفارش
                </label>
                <textarea
                  {...register("orderDescription")}
                  className="border-[2px] bg-transparent outline-none p-2 rounded-md border-[#e1dfdf] w-full h-[189px]"
                />
              </div>
            </div>

            <div className="mt-4 flex gap-2 w-full">
              <input type="checkbox" />
              <label>
                میخواهم از وضعیت سفارش از طریق پیامک آگاه شوم. (اختیاری)
              </label>
            </div>
          </form>
        </section>
      </div>

      <div className="w-full  max-w-[678px] h-auto bg-[#f5f2f2] mx-auto mt-[7rem] flex flex-col items-center px-4">
        <div className="flex justify-center items-center h-[100px] w-full">
          <h4 className="lg:text-[22px] text-[17px] font-bold text-[#242424]">
            سفارش شما
          </h4>
        </div>
        <div className="w-full max-w-[618px] p-4 h-auto bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center p-4">
            <p className="lg:text-[16px] text-[14px] font-bold">محصول</p>
            <p className="lg:text-[16px] text-[14px] font-bold">قیمت محصول</p>
          </div>
          <div className="border-[1px]"></div>
          <div className="p-4">
            {cart.map((item) => (
              <div className="flex lg:text-[14px] *:text-[#777777] text-[12px] justify-between items-center w-full">
                <p className="mt-5">{item.nameProduct}</p>
                <p className="mt-5">{formatNumber(item.price)} تومان</p>
              </div>
            ))}
          </div>
          <div className="border-[1px]"></div>
          <div className="flex justify-between items-center p-4">
            <div className="flex lg:text-[14px] text-[12px] justify-between items-center w-full">
              <div className="flex  justify-between items-center w-full gap-2">
                <p className="text-[#242424] font-bold">جمع جزء</p>
                <p className="font-bold text-[#D60644]">
                  {formatNumber(totalPrice)} تومان
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px]"></div>
          <div className="flex justify-between items-center p-4">
            <div className="flex lg:text-[14px] text-[12px] justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <p className="text-[#242424] font-bold">حمل و نقل</p>
                <div className="flex flex-col gap-2">
                  <p className="text-[13px] mr-4">
                    پیک موتوری{" "}
                    <span className="text-[#D60644] font-bold">
                      {" "}
                      140,000 تومن
                    </span>
                  </p>
                  <p className="text-[13px] mr-4">
                    تحویل به صورت حضوری در محل فروشگاه
                  </p>
                </div>
              </div>
            </div>

            <div>
              <input
                type="radio"
                name="delivery"
                value="motor"
                checked={sentMotor === "motor"}
                onChange={handleSend}
              />
              <input
                type="radio"
                name="delivery"
                value="sendbank"
                checked={sentMotor === "sendbank"}
                onChange={handleSend}
              />
            </div>
          </div>
          <div className="border-[1px]"></div>
          <div className="flex justify-between items-center p-4">
            <div className="flex justify-between items-center w-full">
              <p className="text-[#242424] lg:text-[18px] text-[15px] font-bold">
                مجموع
              </p>
              <p className="font-bold lg:text-[22px] text-[15px] text-[#D60644]">
                {formatNumber(totalPrice)} تومان
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="payment"
                value="zarinpal"
                checked={paymentMethod === "zarinpal"}
                onChange={handlePaymentChange}
              />
              <p className="lg:text-[14px] text-[12px]">پرداخت امن زرین پال</p>
              <img src="images/pardakht/logo.png" alt="zarinpal" />
            </div>
            <div className="bg-white mt-5 w-full h-fit p-3 flex items-center px-4">
              <p className="lg:text-[14px] text-[12px] text-[#777777]">
                {paymentMethod === "zarinpal"
                  ? "پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه زرین پال"
                  : "پرداخت خود را مستقیما به حساب بانکی ما واریز کنید.خواهشمندیم شماره سفارش خود را بعنوان کد ارجاع پرداخت استفاده کنید.سفارش شما تا زمانی که وجوه به حساب ما وارد نشود ارسال نخواهد شد.لطفا رسید پرداخت بانکی را حتما ارسال نمایید."}
              </p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <input
                type="radio"
                name="payment"
                value="bankTransfer"
                checked={paymentMethod === "bankTransfer"}
                onChange={handlePaymentChange}
              />
              <p className="lg:text-[14px] text-[12px]">
                کارت به کارت یا واریز به حساب
              </p>
            </div>
          </div>
          <div className="border-[1px] mt-4"></div>

          <div>
            <button className="bg-[#D60644] text-white text-[14px] font-bold w-full lg:h-[52px] h-[42px] rounded-md">
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
