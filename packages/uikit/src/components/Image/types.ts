import { HTMLAttributes, ImgHTMLAttributes, ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { BoxProps } from "../Box";

export interface WrapperProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, SpaceProps {
  width: number;
  height: number;
  wrapperProps?: WrapperProps;
  fallbackSrc?: string;
}

export interface BackgroundImageProps extends ImageProps {
  loadingPlaceholder?: ReactElement;
}

export const variants = {
  DEFAULT: "default",
  INVERTED: "inverted",
} as const;

