import styled from "styled-components";
import { Card } from "../../components";

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  min-width: 280px;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? "textDisabled" : "secondary"]};

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
