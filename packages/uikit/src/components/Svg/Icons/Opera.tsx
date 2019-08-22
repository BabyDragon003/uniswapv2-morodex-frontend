import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 1000 1000" {...props}>
      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1={416.6229} y1={16.304} x2={416.6229} y2={985.446}>
        <stop offset={0.3} stopColor="#ff1b2d" />
        <stop offset={0.4381} stopColor="#fa1a2c" />
        <stop offset={0.5939} stopColor="#ed1528" />
        <stop offset={0.7581} stopColor="#d60e21" />
        <stop offset={0.9272} stopColor="#b70519" />
        <stop offset={1} stopColor="#a70014" />
      </linearGradient>
export default Icon;
