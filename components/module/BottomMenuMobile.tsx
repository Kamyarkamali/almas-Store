import React from "react";
import ItemBottomMenu from "./ItemBottomMenu";

function BottomMenuMobile() {
  return (
    <div className="fixed bottom-0 w-full h-[3.5rem] bg-white lg:hidden shadow-lg shadow-gray-500">
      <div className="flex items-center h-full justify-center">
        <ItemBottomMenu />
      </div>
    </div>
  );
}

export default BottomMenuMobile;
