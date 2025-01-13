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
      className={`fixed lg:bottom-5 z-20 bottom-16 flex justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] cursor-pointer shadow-md shadow-gray-300 rounded-full bg-white text-white
        transition-all duration-500 ease-in-out ${
          show ? "left-3 opacity-100" : "left-[-60px] opacity-0"
        }`}
    >
      <Upbutton width="15px" height="26px" />
    </button>
  );
}

export default ScrollTop;
