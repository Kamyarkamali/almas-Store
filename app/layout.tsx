import type { Metadata } from "next";
import "./globals.css";
// فانکشن فونت
import { myFont } from "@/utils/Fonts";
import Layouts from "@/components/layouts/Layouts";
import { FavoritesProvider } from "@/context/FavoritesProvider";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر",
  description: "فروشگاه اینترنتی الماس- مرجع تخصصی قطعات لپ تاپ و کامپیوتر ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <FavoritesProvider>
          <Layouts>{children}</Layouts>
        </FavoritesProvider>
      </body>
    </html>
  );
}
