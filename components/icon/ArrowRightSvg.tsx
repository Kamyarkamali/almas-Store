// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const ArrowRightSvg: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
  strokeWidth = "3.5px",
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill={fill}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 128 128"
    >
      <g>
        <path
          d="M44 108a3.988 3.988 0 0 1-2.828-1.172 3.997 3.997 0 0 1 0-5.656L78.344 64 41.172 26.828c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40a3.997 3.997 0 0 1 0 5.656l-40 40A3.988 3.988 0 0 1 44 108z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default ArrowRightSvg;
