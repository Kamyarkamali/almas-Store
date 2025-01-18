import Image from "next/image";
import Link from "next/link";
import CloseSvg from "../icon/CloseSvg";
import { FC } from "react";
import { OpenBasket2 } from "@/types/interFace";
import { useCart } from "@/hooks/useCart";
import { Toaster, toast } from "react-hot-toast";
import { Altet } from "@/types/enums";
import formatNumber from "@/helpers/replaceNumber";
import DeleteSvg from "../icon/DeleteSvg";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "@/featcher/crtSlice";
import NavarForm from "../element/NavarForm";

const BasketDeckstop: FC<OpenBasket2> = ({ openBasket, setOpenBasket }) => {
  // ترکیب ریداس و کاستوم هوک برای نمایش مقادیر سبد خرید
  const { cart, removeProduct, updateProductQuantity } = useCart();

  // قیمت کل سبد خرید
  const totalPrice = useSelector((state: any) => selectCartTotalPrice(state));

  // تابع پاک کردن ممحصول از سبد خرید و لوکال استوریج
  const removeProductToBasket = (id: string) => {
    removeProduct(id);
    toast.error(Altet.REMOVEPRODUCTS);
  };

  // تابع اضافه کردن مقدار quantity
  const handleQuantityChange = (productId: string, quantity: number) => {
    updateProductQuantity(productId, quantity);
  };

  // تابع کم کردن quantity
  const decrementQuantity = (productId: string, quantity: number) => {
    handleQuantityChange(productId, quantity);
  };

  return (
    <>
      <div
        className={`${
          openBasket ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-40 transition-all duration-300`}
        onClick={() => setOpenBasket(false)}
      ></div>

      <div
        className={`w-[340px] h-screen overflow-y-auto bg-white fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
          openBasket ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="p-5 pl-4 pr-3 border-b-[0.1px] border-[#bcb8b8]">
          <div className="flex justify-between items-center">
            <p className="text-[18px] text-[#333333] font-bold">سبد خرید</p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpenBasket(false)}
            >
              <CloseSvg width="14px" height="13px" />
              <button className="text-[14px] font-bold text-[#333333]">
                بستن
              </button>
            </div>
          </div>
        </div>
        {!cart.length && (
          <section className="flex justify-center items-center mt-[2rem]">
            <Image
              src={"/images/imagesBasketShop/shopBasket.jpg"}
              width={90}
              height={90}
              alt="سبد خرید"
            />
          </section>
        )}
        {!cart.length && (
          <div className="flex flex-col items-center pt-2">
            <p className="text-[14px] font-bold">
              هیچ محصولی در سبد خرید نیست.
            </p>
            <Link href={"/"}>
              <button className="w-[126px] h-[36px] bg-[#D60444] text-[12px] mt-[1.3rem] font-bold rounded-md text-[#FFFF]">
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        )}
        {cart.map(({ id, nameProduct, image, price, quantity }) => (
          <div
            key={id}
            className="flex justify-between items-center p-5 border-b-[0.1px] border-[#bcb8b8]"
          >
            <div className="flex items-center gap-2">
              <Image
                src={image}
                width={50}
                height={50}
                alt="محصولات"
                className="w-[50px] h-[50px]"
              />
              <div className="flex flex-col gap-2">
                <p className="text-[12px] font-bold text-[#333333]">
                  {nameProduct}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 border-[1px] border-[#bcb8b8] w-[100px] justify-around rounded-md">
                    <button
                      onClick={() => handleQuantityChange(id, quantity + 1)}
                      className="border-l-[1px] border-[#bcb8b8] text-sm hover:text-white hover:rounded-md hover:rounded-l-none  transition-all duration-300 hover:bg-red-600 w-full h-full"
                    >
                      +
                    </button>
                    <span className="text-sm text-[#777777]">
                      {quantity ? quantity : 1}
                    </span>
                    {quantity > 1 ? (
                      <button
                        onClick={() => decrementQuantity(id, quantity - 1)}
                        className="border-r-[1px] border-[#bcb8b8] text-sm hover:text-white hover:rounded-md hover:rounded-r-none transition-all duration-300 hover:bg-red-600 w-full h-full"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => removeProductToBasket(id)}
                        className="border-r-[1px] border-[#bcb8b8] flex justify-center items-center text-sm hover:text-white hover:rounded-md hover:rounded-r-none transition-all duration-300 hover:bg-red-600 w-full h-full"
                      >
                        <DeleteSvg fill="red" width="15px" height="15px" />
                      </button>
                    )}
                  </div>
                  <p className="text-[12px] font-bold text-red-600">
                    {formatNumber(price)} تومان
                  </p>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => removeProductToBasket(id)}
            >
              <CloseSvg width="12" fill="#000000" color="#000000" height="12" />
            </div>
          </div>
        ))}

        {/* نمایش قیما کل و جزئیات سبد خرید */}
        <div className="mt-[7rem] border-t-[1px] border-[#bcb8b8] p-2">
          <section className="border-b-[1px] border-[#bcb8b8] w-full p-2">
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-bold">جمع کل:</p>
              <p className="text-[18px] text-[#D60644] font-bold">
                {formatNumber(totalPrice)} تومان
              </p>
            </div>
          </section>

          {/* شرط  رایگان شدن  ارسال */}
          <section className="flex flex-col">
            <p className="text-[14px] text-[#777777] p-2 font-semibold">
              در صورت رسیدن مبلغ خرید به 10.000.000 تومان مبلغ ارسال رایگان می
              شود
            </p>
            <NavarForm totalPrice={totalPrice} />

            <div className="flex flex-col gap-2 items-center mt-4">
              <Link onClick={() => setOpenBasket(false)} href={"/cart"}>
                <button className="w-[310px] h-[41px] rounded-sm text-[13px] font-bold text-[#333333] bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                  مشاهده سبد خرید
                </button>
              </Link>
              <button className="text-[13px] w-[310px] h-[41px] rounded-md transition-all duration-300 hover:bg-[#ab0637] font-bold text-white bg-[#D60644]">
                تسویه حساب
              </button>
            </div>
          </section>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default BasketDeckstop;
