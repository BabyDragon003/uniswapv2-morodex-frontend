import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";
import BscScanIcon from "../Svg/Icons/BscScan";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, isBscScan = false, ...props }) => {
  return (
    <Link external {...props}>
      {children}
