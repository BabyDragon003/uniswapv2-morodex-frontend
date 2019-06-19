import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuItemsMock from "./mock";
import { MenuItemsProps } from "./types";

export default {
  title: "Components/Menu/MenuItems",
  component: MenuItems,
Default.args = {
  items: MenuItemsMock,
  activeItem: "Trade",
};
