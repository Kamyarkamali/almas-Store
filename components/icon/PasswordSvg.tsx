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
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        color={color}
        strokeWidth={strokeWidth}
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
          stroke="#B1B1B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
          stroke="#B1B1B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="#B1B1B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></circle>{" "}
      </g>
    </svg>
  );
};

export default LikeSvg;
