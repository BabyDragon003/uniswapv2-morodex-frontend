/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from "react";
import { FlexProps } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";

export type SubMenuItemsType = {
  label: string;
  href: string;
  itemProps?: any;
  icon?: ElementType<any>;
