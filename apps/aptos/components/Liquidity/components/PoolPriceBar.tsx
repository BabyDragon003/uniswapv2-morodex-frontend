import { Currency, Percent, Price } from '@pancakeswap/aptos-swap-sdk'
import { AutoColumn, AutoRow, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { ONE_BIPS } from 'config/constants/exchange'
import formatAmountDisplay from 'utils/formatAmountDisplay'

export default function PoolPriceBar({
  currencyA,
  currencyB,
  noLiquidity,
  poolTokenPercentage,
  price,
}: {
  currencyA: Currency
  currencyB: Currency
  noLiquidity?: boolean
  poolTokenPercentage?: Percent
  price?: Price<Currency, Currency>
}) {
  const { t } = useTranslation()

  return (
    <AutoColumn gap="md">
      <AutoRow justifyContent="space-around" gap="4px">
        <AutoColumn justify="center">
          </Text>
        </AutoColumn>
      </AutoRow>
    </AutoColumn>
  )
}
