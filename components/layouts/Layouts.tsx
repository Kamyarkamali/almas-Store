"use client";
import Footer from "./Footer";
import Header from "./Header";
import { FC, useEffect, useState } from "react";

import { Chidlren } from "@/types/interFace";
import { usePathname } from "next/navigation";

const Layouts: FC<Chidlren> = ({ children }) => {
  const path = usePathname();
  const [hide, setHide] = useState<boolean>(false);

  // مخفی سازی هدر و فوتر در  پنل ادمین
  useEffect(() => {
    if (path && path.startsWith("/admin")) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [path]);

  return (
    <div>
      {!hide && (
        <header>
          <Header />
        </header>
      )}

      <main className="h-fit">{children}</main>

      {!hide && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layouts;
