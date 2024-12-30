import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/woff2/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
