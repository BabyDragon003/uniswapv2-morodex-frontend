import BigNumber from "bignumber.js";
import { useTranslation } from "@pancakeswap/localization";
import React, { useMemo, ReactNode } from "react";
import styled from "styled-components";
import { BIG_ZERO } from "@pancakeswap/utils/bigNumber";
import { DeserializedPool } from "../types";
import { BaseCell, CellContent } from "./BaseCell";
import { Text, Skeleton } from "../../../components";
import useMatchBreakpoints from "../../../contexts/MatchBreakpoints/useMatchBreakpoints";

interface NameCellProps<T> {
  pool: DeserializedPool<T>;
  userShares?: BigNumber;
  totalCakeInVault?: BigNumber;
  tokenPairImage: ReactNode;
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }

  return (
    <StyledCell role="cell">
      {isLoaded ? (
        <>
          {tokenPairImage}
          <CellContent>
            {showStakedTag && (
              <Text fontSize="12px" bold color={isFinished ? "failure" : "secondary"} textTransform="uppercase">
                {t("Staked")}
              </Text>
            )}
            <Text bold={!isMobile} small={isMobile}>
              {title}
            </Text>
            {showSubtitle && (
              <Text fontSize="12px" color="textSubtle">
                {subtitle}
              </Text>
            )}
          </CellContent>
        </>
      ) : (
        <>
          <Skeleton mr="8px" width={36} height={36} variant="circle" />
          <CellContent>
            <Skeleton width={30} height={12} mb="4px" />
            <Skeleton width={65} height={12} />
          </CellContent>
        </>
      )}
    </StyledCell>
  );
}
