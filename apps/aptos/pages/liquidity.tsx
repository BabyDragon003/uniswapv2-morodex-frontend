import { useTranslation } from '@pancakeswap/localization'
import { Liquidity as LiquidityUI } from '@pancakeswap/uikit'
import HasAccount from 'components/HasAccount'
import { ExchangeLayout } from 'components/Layout/ExchangeLayout'
import { PageMeta } from 'components/Layout/Page'
import LiquidityList from 'components/Liquidity/components/LiquidityList'
import { SettingsButton } from 'components/Menu/Settings/SettingsButton'

const { LiquidityCard, GotoAddLiquidityButton, LiquidityNotConnect } = LiquidityUI

const LiquidityPage = () => {
  const { t } = useTranslation()

  return (
    <>
    </>
  )
}

LiquidityPage.Layout = ExchangeLayout

export default LiquidityPage
