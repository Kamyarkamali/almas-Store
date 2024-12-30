// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const Upbutton: FC<IconsType> = ({
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
      viewBox="0 0 2000 2000"
    >
      <g>
        <path
          d="M1744 1436c-16.4 0-32.8-6.2-45.3-18.7L1000 718.5l-698.7 698.7c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l744-744c25-25 65.5-25 90.5 0l744 744c25 25 25 65.5 0 90.5-12.5 12.6-28.9 18.8-45.3 18.8z"
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

export default Upbutton;
