import { ElementType } from "react";

export interface BottomNavItemProps {
  label: string;
  href: string;
  disabled?: boolean;
  icon?: ElementType<any>;
  fillIcon?: ElementType<any>;
  isActive?: boolean;
  showItemsOnMobile?: boolean;
}
