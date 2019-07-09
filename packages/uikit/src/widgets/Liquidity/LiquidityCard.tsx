import { AtomBox, AtomBoxProps } from "@pancakeswap/ui";
import styled from "styled-components";

import { Card, CardBody, CardFooter } from "../../components/Card";
import LiquidityCardHeader from "./LiquidityCardHeader";
  width: 100%;
  z-index: 1;
`;

export const LiquidityCard = ({ children, ...props }: LiquidityCardProps) => (
  <>
    <AtomBox width="full" display="flex" flexDirection="column" alignItems="center" {...props}>
      <CardWrapper>{children}</CardWrapper>
    </AtomBox>
  </>
);

const ListBody = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`;

LiquidityCard.ListBody = ListBody;
LiquidityCard.Header = LiquidityCardHeader;
LiquidityCard.Footer = CardFooter;
