import BigNumber from "bignumber.js";
import { getBalanceNumber } from "@pancakeswap/utils/formatBalance";
import { useTranslation } from "@pancakeswap/localization";
import { useTooltip } from "../../hooks";
import { TooltipText, Balance, Skeleton } from "../../components";
import { StatWrapper } from "./StatWrapper";

export const TotalToken = ({
  total,
  tokenDecimals,
  decimalsToShow,
  symbol,
}: {
  total: BigNumber;
  tokenDecimals: number;
  decimalsToShow: number;
  symbol: string;
}) => {
  if (total && total.gte(0)) {
    return (
        <TooltipText ref={targetRef} small>
          {t("Total staked")}:
        </TooltipText>
      }
    >
      {tooltipVisible && tooltip}
      <TotalToken total={totalStaked} tokenDecimals={tokenDecimals} decimalsToShow={decimalsToShow} symbol={symbol} />
    </StatWrapper>
  );
};
