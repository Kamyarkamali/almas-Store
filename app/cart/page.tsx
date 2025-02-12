import CartComponent from "@/components/templates/CartComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "سبد خرید -  فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر",
  description: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
  icons: "/images/section1/logo.png",
};

function page() {
  return (
    <div>
      <CartComponent />
    </div>
  );
}

export default page;
