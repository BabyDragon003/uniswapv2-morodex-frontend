import { Flex, Skeleton, Text, Balance } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import BigNumber from "bignumber.js";
import { getBalanceNumber } from "@pancakeswap/utils/formatBalance";
import { BaseCell, CellContent } from "./BaseCell";

interface TotalStakedCellProps {
  stakingTokenDecimals: number;
  stakingTokenSymbol: string;
  totalStaked?: BigNumber;
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`;

export function TotalStakedCell({ stakingTokenSymbol, totalStaked, stakingTokenDecimals }: TotalStakedCellProps) {
  const { t } = useTranslation();

}
