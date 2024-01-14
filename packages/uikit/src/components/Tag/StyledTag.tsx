import styled, { DefaultTheme } from "styled-components";
import { space, variant, typography } from "styled-system";
import { Colors } from "../../theme/types";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors;
    const color = theme.colors[themeColorKey];

    return `
      color: ${color};
      background: ${theme.colors.background};
      border: 2px solid ${color};
    `;
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}
  ${typography}

  ${getOutlineStyles}
`;

export default null;
