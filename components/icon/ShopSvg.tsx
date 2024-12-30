// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const ShopSvg: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
  strokeWidth = "1.5px",
  fill = "none",
}) => {
  return (
    <svg
      fill={fill}
      widths={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      viewBox="0 0 208.955 208.955"
    >
      <g>
        <path
          d="M190.85 200.227 178.135 58.626a7.5 7.5 0 0 0-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 0 0-7.47 6.829L18.035 200.784a7.5 7.5 0 0 0 7.47 8.17h157.946a7.5 7.5 0 0 0 7.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5V66.797h49.936v13.412a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5V66.797h19.364l11.418 127.158H33.709z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
      </g>
    </svg>
  );
};

export default ShopSvg;