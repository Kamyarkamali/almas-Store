import CompareComponent from "@/components/module/CompareComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    " مقایسه محصولات-فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
  description: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
  icons: "/images/section1/logo.png",
};

function page() {
  return (
    <div>
      <CompareComponent />
    </div>
  );
}

export default page;
