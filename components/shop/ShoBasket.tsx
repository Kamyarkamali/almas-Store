import { useCart } from "@/hooks/useCart";
import ShopBasketComponent from "../templates/ShopBasketComponent";
import FormNavarSending from "../templates/FormNavarSending";

function ShoBasket() {
  const { cart } = useCart();

  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between pr-[19px] pl-[19px]  mt-[3.37rem]">
      <div className="flex flex-col">
        <FormNavarSending />
        <div>2</div>
        <div>3</div>
      </div>

      <div className="w-full">
        <ShopBasketComponent />
      </div>
    </div>
  );
}

export default ShoBasket;
