import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import SubMenuItems from "./SubMenuItems";
import SubMenuItemsMock from "./mock";
import { SubMenuItemsProps } from "./types";
import { Box } from "../Box";

export default {
  title: "Components/Menu/SubMenuItems",
  component: SubMenuItems,
};

const Template: React.FC<React.PropsWithChildren<SubMenuItemsProps>> = (args) => {
  return (
