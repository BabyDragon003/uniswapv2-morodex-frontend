import { useTranslation } from "@pancakeswap/localization";
import { RowBetween, TooltipText, Text, useTooltip } from "@pancakeswap/uikit";
import { formatAmount } from "@pancakeswap/utils/formatInfoNumbers";

export default function AprRow({ lpApr7d }: { lpApr7d: number }) {
  const { t } = useTranslation();

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(`Based on last 7 days' performance. Does not account for impermanent loss`),
    {
        {formatAmount(lpApr7d)}%
      </Text>
    </RowBetween>
  );
}
