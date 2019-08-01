import { Flex, Text, TooltipText, useTooltip, BalanceWithLoading } from '@pancakeswap/uikit'
import { useVaultApy } from 'hooks/useVaultApy'
import { useTranslation } from '@pancakeswap/localization'

const YieldBoostRow = ({ secondDuration }) => {
  const { boostFactor } = useVaultApy({ duration: secondDuration })
  const { t } = useTranslation()

  const tooltipContent = t(
    'Your yield will be boosted based on the total lock duration of your current fixed term staking position.',
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  return (
  )
}

export default YieldBoostRow
