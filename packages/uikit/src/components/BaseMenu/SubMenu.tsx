import React from "react";
import { FlexProps } from "../Box";
import BaseMenu from "./BaseMenu";
import { SubMenuContainer } from "./styles";
import { BaseMenuProps } from "./types";

const SubMenu: React.FC<React.PropsWithChildren<BaseMenuProps & FlexProps>> = ({
  children,
  component,
  options,
