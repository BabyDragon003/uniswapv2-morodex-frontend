import { ReactElement } from "react";
import { SpaceProps } from "styled-system";

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = (typeof scales)[keyof typeof scales];
  children: JSX.Element;
}
