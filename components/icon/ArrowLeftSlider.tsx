// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const ArrowLeftSlider: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
  strokeWidth = "1.5px",
  fill = "none",
}) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 128 128"
    >
      <g>
        <path
          d="M84 108a3.988 3.988 0 0 1-2.828-1.172l-40-40a3.997 3.997 0 0 1 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656L49.656 64l37.172 37.172a3.997 3.997 0 0 1 0 5.656A3.988 3.988 0 0 1 84 108z"
          fill="#ffffff"
          opacity="1"
          data-original="#ffffff"
          color={color}
          strokeWidth={strokeWidth}
        ></path>
      </g>
    </svg>
  );
};

export default ArrowLeftSlider;
