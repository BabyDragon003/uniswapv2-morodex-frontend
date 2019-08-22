import styled from "styled-components";
import { Box, Flex } from "../Box";

export const InlineMenuContainer = styled(Box)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.tooltip};
`;

export const SubMenuContainer = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  min-width: 136px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.default};
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.inputSecondary};
    text-decoration: none;
  }
`;
