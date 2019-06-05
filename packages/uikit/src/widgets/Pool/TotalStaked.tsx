import BigNumber from "bignumber.js";
import { getBalanceNumber } from "@pancakeswap/utils/formatBalance";
import { useTranslation } from "@pancakeswap/localization";
import { useTooltip } from "../../hooks";
import { TooltipText, Balance, Skeleton } from "../../components";
import { StatWrapper } from "./StatWrapper";

export const TotalToken = ({
  total,
  tokenDecimals,
    );
  }
  return <Skeleton width="90px" height="21px" />;
};

export const TotalStaked: React.FC<
  React.PropsWithChildren<{ totalStaked: BigNumber; tokenDecimals: number; decimalsToShow: number; symbol: string }>
> = ({ totalStaked, tokenDecimals, decimalsToShow, symbol }) => {
  const { t } = useTranslation();

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t("Total amount of %symbol% staked in this pool", { symbol }),
    {
      placement: "bottom",
    }
  );

  return (
    <StatWrapper
      label={
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
