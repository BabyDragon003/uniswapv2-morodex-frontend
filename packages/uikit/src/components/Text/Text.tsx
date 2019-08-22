import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const Text = styled.div<TextProps>`
  color: ${getColor};
Text.defaultProps = {
  color: "text",
  small: false,
  fontSize: "16px",
  ellipsis: false,
};

export default Text;
