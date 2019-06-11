import { ReactNode } from "react";
import { Placement, Padding } from "@popperjs/core";

export interface MenuOptions {
  placement?: Placement;
  options?: MenuOptions;
  isOpen?: boolean;
}
