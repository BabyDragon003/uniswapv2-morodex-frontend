import { useMemo } from 'react'
import { Flex, Box, Text } from '@pancakeswap/uikit'
import { TokenImage } from 'components/TokenImage'
import { LightGreyCard } from 'components/Card'
import { useTranslation } from '@pancakeswap/localization'
import { Ifo } from 'config/constants/types'
import { getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'
import BigNumber from 'bignumber.js'

interface TotalAvailableClaimProps {
  ifo: Ifo
  amountAvailableToClaim: BigNumber
}

const TotalAvailableClaim: React.FC<React.PropsWithChildren<TotalAvailableClaimProps>> = ({
  ifo,
  amountAvailableToClaim,
}) => {
  const { t } = useTranslation()
  const { token } = ifo

  const amountAvailable = useMemo(
    () =>
      amountAvailableToClaim.gt(0)
        ? getFullDisplayBalance(amountAvailableToClaim, token.decimals, token.decimals)
