import { AtomBox, AtomBoxProps } from "@pancakeswap/ui";
import styled from "styled-components";

import { Card, CardBody, CardFooter } from "../../components/Card";
import LiquidityCardHeader from "./LiquidityCardHeader";

type LiquidityCardProps = AtomBoxProps;

export const CardWrapper = styled(Card)`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
`;

