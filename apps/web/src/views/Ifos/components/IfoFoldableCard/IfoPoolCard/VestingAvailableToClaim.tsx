import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { BIG_ONE_HUNDRED } from '@pancakeswap/utils/bigNumber'
import { Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'

interface VestingAvailableToClaimProps {
  amountToReceive: BigNumber
  percentage: number
  decimals: number
}

const VestingAvailableToClaim: React.FC<React.PropsWithChildren<VestingAvailableToClaimProps>> = ({
  amountToReceive,
}

export default VestingAvailableToClaim
