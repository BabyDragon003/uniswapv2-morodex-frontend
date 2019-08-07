import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme/types";

export interface CardRibbonProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  variantColor?: keyof Colors;
  text: string;
  ribbonPosition?: "right" | "left";
}

  };
  dropShadow: string;
};

export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  ribbon?: React.ReactNode;
  borderBackground?: string;
  background?: string;
}
