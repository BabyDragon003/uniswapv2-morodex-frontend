import { Flex, Text, Button, Heading, Skeleton, Balance, useModal } from "@pancakeswap/uikit";
import BigNumber from "bignumber.js";
import { ReactElement } from "react";
import { useTranslation } from "@pancakeswap/localization";
import { getFullDisplayBalance, getBalanceNumber, formatNumber } from "@pancakeswap/utils/formatBalance";
import { CollectModalProps } from "./CollectModal";
import { HarvestAction as TableHarvestAction } from "./PoolsTable/HarvestAction";
import { HarvestActionsProps } from "./types";

const HarvestActions: React.FC<React.PropsWithChildren<HarvestActionsProps>> = ({
  earnings,
  isLoading,
  onPresentCollect,
  earningTokenPrice,
  earningTokenBalance,
  earningTokenDollarBalance,
}) => {
  const { t } = useTranslation();
  const hasEarnings = earnings.toNumber() > 0;

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="16px">
      <Flex flexDirection="column">
        {isLoading ? (
          <Skeleton width="80px" height="48px" />
        )}
      </Flex>
      <Button disabled={!hasEarnings} onClick={onPresentCollect}>
        {t("Harvest")}
      </Button>
    </Flex>
  );
};

interface WithHarvestActionsProps {
  earnings: BigNumber;
  earningTokenSymbol: string;
  sousId: number;
  isBnbPool: boolean;
  earningTokenPrice: number;
  isLoading?: boolean;
  earningTokenDecimals: number;
  earningTokenAddress?: string;
  poolAddress?: {
    [index: number]: string;
  };
}

const withCollectModalFactory =
  (ActionComp: any) =>
  (CollectModalComponent: (props: CollectModalProps) => ReactElement) =>
  ({
    earnings,
    earningTokenSymbol,
    earningTokenAddress,
    earningTokenDecimals,
    sousId,
    isBnbPool,
    earningTokenPrice,
    isLoading,
    poolAddress,
    ...props
  }: WithHarvestActionsProps) => {
    const earningTokenBalance: number = getBalanceNumber(earnings, earningTokenDecimals);

    const formattedBalance = formatNumber(earningTokenBalance, 5, 5);

    const fullBalance = getFullDisplayBalance(earnings, earningTokenDecimals);

    const earningTokenDollarBalance = earnings
      ? getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningTokenDecimals)
      : 0;

    const [onPresentCollect] = useModal(
      <CollectModalComponent
        formattedBalance={formattedBalance}
        fullBalance={fullBalance}
        earningTokenSymbol={earningTokenSymbol}
        earningsDollarValue={earningTokenDollarBalance}
        sousId={sousId}
        isBnbPool={isBnbPool}
        earningTokenAddress={earningTokenAddress}
        poolAddress={poolAddress}
      />
    );

    return (
      <ActionComp
        onPresentCollect={onPresentCollect}
        earnings={earnings}
        earningTokenPrice={earningTokenPrice}
        earningTokenDollarBalance={earningTokenDollarBalance}
        earningTokenBalance={earningTokenBalance}
        isLoading={isLoading}
        earningTokenSymbol={earningTokenSymbol}
        {...props}
      />
    );
  };

export const withCollectModalTableAction = withCollectModalFactory(TableHarvestAction);

export const withCollectModalCardAction = withCollectModalFactory(HarvestActions);
