import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "@/utils/Fonts";
import Layouts from "@/components/layouts/Layouts";
import { ClientProviders } from "@/utils/ClientProviders";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر",
  description: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
  icons: "/images/section1/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <ClientProviders>
          <Layouts>{children}</Layouts>
        </ClientProviders>
      </body>
    </html>
  );
}
