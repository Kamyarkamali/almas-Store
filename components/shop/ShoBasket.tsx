import { useCart } from "@/hooks/useCart";
import ShopBasketComponent from "../templates/ShopBasketComponent";
import FormNavarSending from "../templates/FormNavarSending";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "@/featcher/crtSlice";
import formatNumber from "@/helpers/replaceNumber";
import CloseSvg from "../icon/CloseSvg";

function ShoBasket() {
  const { cart, updateProductQuantity, removeProduct } = useCart();
  const totalPrice = useSelector((state: any) => selectCartTotalPrice(state));

  // تابع اضافه کردن مقدار quantity
  const handleQuantityChange = (productId: string, quantity: number) => {
    updateProductQuantity(productId, quantity);
  };

  // تابع کم کردن quantity
  const decrementQuantity = (productId: string, quantity: number) => {
    handleQuantityChange(productId, quantity);
  };

  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-4 lg:px-8 mt-8">
      <div className="flex flex-col w-full lg:w-2/3">
        <FormNavarSending />
        <div className="containe  pt-4">
          <div className="table-container bg-white rounded-lg shadow-lg overflow-auto">
            {/* جدول برای نمایش در سایزهای بزرگ */}
            <table className="hidden md:table table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 text-[14px] py-2 border border-gray-200">
                    محصول
                  </th>
                  <th className="px-4 text-[14px] py-2 border border-gray-200">
                    تصویر
                  </th>
                  <th className="px-4 text-[14px] py-2 border border-gray-200">
                    قیمت
                  </th>
                  <th className="px-4 text-[14px] py-2 border border-gray-200">
                    تعداد
                  </th>
                  <th className="px-4 text-[14px] py-2 border border-gray-200">
                    جمع کل
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {cart.map(({ id, image, nameProduct, price, quantity }) => (
                  <tr
                    key={id}
                    className="bg-white even:bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="px-4 text-[14px] py-2 border flex gap-2 items-center">
                      <div
                        onClick={() => removeProduct(id)}
                        className="cursor-pointer"
                      >
                        <CloseSvg width="13px" height="13px" />
                      </div>
                      {nameProduct}
                    </td>
                    <td className="px-4 py-2 border">
                      <img
                        src={image}
                        alt={nameProduct}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border text-[14px]">
                      {price.toLocaleString()} تومان
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => decrementQuantity(id, quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-2 text-[14px]">{quantity}</span>
                        <button
                          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => handleQuantityChange(id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 border text-[14px]">
                      {(price * quantity).toLocaleString()} تومان
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 text-[14px] py-2 border font-bold text-right"
                  >
                    مجموع:
                  </td>
                  <td className="px-4 text-[14px] py-2 border font-bold">
                    {formatNumber(totalPrice)} تومان
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* نمایش کارت‌ها برای سایزهای کوچک */}
            <div className="block md:hidden">
              {cart.map(({ id, image, nameProduct, price, quantity }) => (
                <div
                  key={id}
                  className="bg-white relative rounded-lg shadow p-4 mb-4 border"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={image}
                      alt={nameProduct}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <p className="font-bold text-[12px]">{nameProduct}</p>
                      <p className="text-[12px]">
                        {price.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px]">تعداد:</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 text-[12px] py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => decrementQuantity(id, quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-[12px]">{quantity}</span>
                      <button
                        className="px-2 text-[12px] py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => handleQuantityChange(id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 font-bold text-[12px]">
                    جمع کل: {(price * quantity).toLocaleString()} تومان
                  </p>
                  <div
                    className="absolute top-3 left-3 cursor-pointer"
                    onClick={() => removeProduct(id)}
                  >
                    <CloseSvg width="13" height="13" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full xl:mr-3 mt-4 flex border-[2px] lg:border-none border-gray-300 border-dashed p-3 mb-9">
          <div className="flex w-full flex-col xl:flex-row items-center gap-3">
            <input
              className="w-full xl:w-[229px] h-[41px] rounded-md border-2 border-gray-300 outline-none p-2 placeholder:text-[14px] "
              type="text"
              placeholder="کد تخفیف"
            />
            <button className="w-full bg-[#D60644] text-white xl:w-[125px] h-[41px] rounded-md text-[14px]">
              اعمال کد تخفیف
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <ShopBasketComponent />
      </div>
    </div>
  );
}

export default ShoBasket;
