import { SpaceProps } from "styled-system";

export type RadioTheme = {
  handleBackground: string;
};
export type Scales = (typeof scales)[keyof typeof scales];

export interface RadioProps extends SpaceProps {
  scale?: Scales;
}
