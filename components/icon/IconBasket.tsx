// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const LikeSvg: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
  strokeWidth = "1.5px",
  fill = "none",
}) => {
  return (
    <svg
      fill={fill}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      widths={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="m403.042 325.8 22.744-123.474A85.3 85.3 0 1 0 298.667 128H117l-1.543-6.945A31.815 31.815 0 0 0 84.219 96H53.333a10.667 10.667 0 1 0 0 21.333h30.886a10.609 10.609 0 0 1 10.417 8.354l57.844 260.3a42.752 42.752 0 1 0 49.747 19.346H336.44A42.63 42.63 0 1 0 373.333 384H173.891l-7.111-32h204.793a32 32 0 0 0 31.469-26.2ZM384 64a64 64 0 1 1-64 64 64.072 64.072 0 0 1 64-64ZM186.667 426.667a21.333 21.333 0 1 1-21.333-21.333 21.354 21.354 0 0 1 21.333 21.333Zm208 0a21.333 21.333 0 1 1-21.333-21.333 21.354 21.354 0 0 1 21.333 21.333ZM121.742 149.333h179.733a84.984 84.984 0 0 0 100.971 61.936l-20.383 110.663a10.664 10.664 0 0 1-10.49 8.734H162.039Z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
        ></path>
        <path
          d="M352 138.667h21.333V160a10.667 10.667 0 0 0 21.333 0v-21.333H416a10.667 10.667 0 1 0 0-21.333h-21.333V96a10.667 10.667 0 0 0-21.333 0v21.333H352a10.667 10.667 0 0 0 0 21.333Z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default LikeSvg;
