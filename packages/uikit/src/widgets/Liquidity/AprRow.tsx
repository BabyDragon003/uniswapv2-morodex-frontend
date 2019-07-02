import { useTranslation } from "@pancakeswap/localization";
import { RowBetween, TooltipText, Text, useTooltip } from "@pancakeswap/uikit";
import { formatAmount } from "@pancakeswap/utils/formatInfoNumbers";

export default function AprRow({ lpApr7d }: { lpApr7d: number }) {
    }
  );

  return (
    <RowBetween>
      <TooltipText ref={targetRef} bold fontSize="12px" color="secondary">
        {t("LP reward APR")}
      </TooltipText>
      {tooltipVisible && tooltip}
      <Text bold color="primary">
        {formatAmount(lpApr7d)}%
      </Text>
    </RowBetween>
  );
}
