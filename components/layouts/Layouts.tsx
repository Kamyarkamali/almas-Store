// compponents/layouts
import Footer from "./Footer";
import Header from "./Header";

import { FC } from "react";

// type intereface - children
import { Chidlren } from "@/types/interFace";

const Layouts: FC<Chidlren> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="h-fit">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layouts;
