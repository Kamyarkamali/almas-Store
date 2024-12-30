import React, { useEffect, useState } from "react";
import Upbutton from "../icon/UpButto";

function ScrollTop() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-5 flex justify-center items-center w-[40px] h-[40px] cursor-pointer shadow-md shadow-gray-400 rounded-full bg-white text-white
        transition-all duration-500 ease-in-out ${
          show ? "left-5 opacity-100" : "left-[-60px] opacity-0"
        }`}
    >
      <Upbutton />
    </button>
  );
}

export default ScrollTop;
