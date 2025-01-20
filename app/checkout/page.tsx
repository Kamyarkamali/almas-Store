import SettlementComponent from "@/components/shop/SettlementComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    " پرداخت -  فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر",
  description: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
  icons: "/images/section1/logo.png",
};

function page() {
  return (
    <div>
      <SettlementComponent />
    </div>
  );
}

export default page;
