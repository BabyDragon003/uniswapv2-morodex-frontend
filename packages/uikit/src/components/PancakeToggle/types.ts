import { InputHTMLAttributes } from "react";

export type PancakeToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  pancakeSize: "pancakeSize",
  travelDistance: "travelDistance",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
  pancakeThickness: "pancakeThickness",
  pancakeTwoOffset: "pancakeTwoOffset",
  pancakeThreeOffset: "pancakeThreeOffset",
  butterTop: "butterTop",
  butterLeft: "butterLeft",
  butterWidth: "butterWidth",
  butterHeight: "butterHeight",
  butterThickness: "butterThickness",
  butterRadius: "butterRadius",
  butterSmearOneTop: "butterSmearOneTop",
  butterSmearOneLeft: "butterSmearOneLeft",
  butterSmearTwoTop: "butterSmearTwoTop",
  butterSmearTwoRight: "butterSmearTwoRight",
} as const;

export type ScaleKeys = (typeof scaleKeys)[keyof typeof scaleKeys];
