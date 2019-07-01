
export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
