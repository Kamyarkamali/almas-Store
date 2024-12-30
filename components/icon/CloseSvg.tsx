// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const CloseSvg: FC<IconsType> = ({
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
      viewBox="0 0 64 64"
    >
      <g>
        <path
          d="M4.59 59.41a2 2 0 0 0 2.83 0L32 34.83l24.59 24.58a2 2 0 0 0 2.83-2.83L34.83 32 59.41 7.41a2 2 0 0 0-2.83-2.83L32 29.17 7.41 4.59a2 2 0 0 0-2.82 2.82L29.17 32 4.59 56.59a2 2 0 0 0 0 2.82z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
          color={color}
          strokeWidth={strokeWidth}
        ></path>
      </g>
    </svg>
  );
};

export default CloseSvg;
