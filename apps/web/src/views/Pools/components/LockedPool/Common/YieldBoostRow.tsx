import { Flex, Text, TooltipText, useTooltip, BalanceWithLoading } from '@pancakeswap/uikit'
import { useVaultApy } from 'hooks/useVaultApy'
import { useTranslation } from '@pancakeswap/localization'

const YieldBoostRow = ({ secondDuration }) => {

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, { placement: 'bottom-start' })

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText>
        <Text ref={targetRef} color="textSubtle" textTransform="uppercase" bold fontSize="12px">
          {t('Yield boost')}
        </Text>
      </TooltipText>
      <BalanceWithLoading
        color="text"
        bold
        fontSize="16px"
        value={boostFactor ? boostFactor?.toString() : '0'}
        decimals={2}
        unit="x"
      />
    </Flex>
  )
}

export default YieldBoostRow
