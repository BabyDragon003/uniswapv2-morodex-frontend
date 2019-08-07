import { LayoutProps, SpaceProps, BorderRadiusProps } from "styled-system";

export const animation = {
  WAVES: "waves",
  PULSE: "pulse",
} as const;

export const variant = {
  RECT: "rect",
  ROUND: "round",
export interface SkeletonV2Props extends SpaceProps, LayoutProps, BorderRadiusProps {
  animation?: Animation;
  variant?: Variant;
  isDataReady?: boolean;
  wrapperProps?: SpaceProps & LayoutProps;
  skeletonTop?: string;
  skeletonLeft?: string;
}
