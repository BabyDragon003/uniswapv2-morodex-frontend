import styled from "styled-components";
import { Flex, FlexProps } from "../Box";

export interface FlexGapProps extends FlexProps {
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

const FlexGap = styled(Flex)<FlexGapProps>`
