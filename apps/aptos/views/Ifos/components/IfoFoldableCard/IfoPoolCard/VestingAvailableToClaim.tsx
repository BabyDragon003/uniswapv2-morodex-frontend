import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'

interface VestingAvailableToClaimProps {
  amountToReceive: BigNumber
  percentage: number
  decimals: number
    const total = new BigNumber(amountToReceive).times(vestingaPercentage)
    return getFullDisplayBalance(total, decimals, decimals)
  }, [amountToReceive, percentage, decimals])

  return (
    <Text fontSize="14px" color="textSubtle">
      {t('~%num% available to claim at sales end', { num })}
    </Text>
  )
}

export default VestingAvailableToClaim
