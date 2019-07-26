import { BIG_ZERO } from "@pancakeswap/utils/bigNumber";
import { Text, useMatchBreakpoints, Pool } from "@pancakeswap/uikit";
import BigNumber from "bignumber.js";
import { useTranslation } from "@pancakeswap/localization";
import { createElement, FunctionComponent } from "react";

interface AprCellProps<T> {
  pool: Pool.DeserializedPool<T>;
  aprComp: FunctionComponent<{
    pool: Pool.DeserializedPool<T>;
    stakedBalance: BigNumber;
    showIcon: boolean;
  }>;
}

export function AprCell<T>({ pool, aprComp }: AprCellProps<T>) {
  const { t } = useTranslation();
  const { isMobile } = useMatchBreakpoints();
  const { userData } = pool;
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO;
