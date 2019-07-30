import { Colors } from "../../theme";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $isDisabled?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
};
