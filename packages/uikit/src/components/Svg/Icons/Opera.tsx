import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 1000 1000" {...props}>
      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1={416.6229} y1={16.304} x2={416.6229} y2={985.446}>
        <stop offset={0.3} stopColor="#ff1b2d" />
        <stop offset={0.4381} stopColor="#fa1a2c" />
        <stop offset={0.7} stopColor="#ff4b4b" />
      </linearGradient>
      <path
        d="M335.4 218.2c45.9-54.2 105.1-86.8 169.9-86.8 145.6 0 263.5 165 263.5 368.6s-118 368.6-263.5 368.6c-64.7 0-124-32.7-169.9-86.8C407.2 874.9 513.8 934 632.8 934c73.2 0 141.8-22.4 200.4-61.2C935.6 781.2 1000 648.1 1000 500c0-148.1-64.4-281.2-166.8-372.7C774.6 88.4 706.1 66 632.8 66c-119 0-225.6 59.1-297.4 152.2z"
        fill="url(#b)"
      />
    </Svg>
  );
};

export default Icon;
