// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const MarketSvg: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>.cls-1</style>
      </defs>

      <title />

      <g id="Card">
        <path
          d="M3,13H3v8a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V13h0a1,1,0,0,0,.89-1.45L19,5.77,19,3a1,1,0,0,0-1-1H6A1,1,0,0,0,5,3V5.8L2.11,11.55A1,1,0,0,0,3,13Zm10,7H11V17a1,1,0,0,1,2,0Zm6,0H15V17a3,3,0,1,0-6,0v3H5V13H19ZM17,4V5H7V4ZM6.64,7H17.36l2,4H4.62Z"
          fill="#333333"
        />
      </g>
    </svg>
  );
};

export default MarketSvg;
