import { DefaultTheme } from "styled-components";

export interface ThemedProps {
  theme: DefaultTheme;
}

export type Status = "past" | "current" | "future";

export interface StatusProps extends ThemedProps {
  theme: DefaultTheme;
}
