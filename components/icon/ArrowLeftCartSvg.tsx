// LikeSvg.js
import { IconsType } from "@/types/interFace";
import React, { FC } from "react";

const ArrowLeftCartSvg: FC<IconsType> = ({
  width = "21px",
  height = "21px",
  color = "currentColor",
  strokeWidth = "1.5px",
  fill = "none",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="arrow-left">
          <g>
            <polyline
              data-name="Right"
              fill="none"
              id="Right-2"
              points="7.6 7 2.5 12 7.6 17"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />

            <line
              fill="none"
              stroke="#777777"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21.5"
              x2="4.8"
              y1="12"
              y2="12"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowLeftCartSvg;
