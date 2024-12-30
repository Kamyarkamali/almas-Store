// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const UserSvg: FC<IconsType> = ({
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
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"
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

export default UserSvg;