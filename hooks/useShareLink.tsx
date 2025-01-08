// useShareLink.ts
import { useCallback } from "react";

const useShareLink = () => {
  const shareLink = useCallback((platform: string) => {
    const currentUrl = window.location.href; // لینک صفحه فعلی
    const message = "لینک صفحه محصول: " + currentUrl; // پیامی که قرار است به اشتراک گذاشته شود

    if (platform === "telegram") {
      // لینک اشتراک‌گذاری تلگرام
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else if (platform === "whatsapp") {
      // لینک اشتراک‌گذاری واتساپ
      window.open(
        `https://wa.me/?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  }, []);

  return { shareLink };
};

export default useShareLink;
