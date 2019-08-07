import { useTranslation } from '@pancakeswap/localization'
import { Liquidity as LiquidityUI } from '@pancakeswap/uikit'
import HasAccount from 'components/HasAccount'
import { ExchangeLayout } from 'components/Layout/ExchangeLayout'
import { PageMeta } from 'components/Layout/Page'
import LiquidityList from 'components/Liquidity/components/LiquidityList'
import { SettingsButton } from 'components/Menu/Settings/SettingsButton'

const { LiquidityCard, GotoAddLiquidityButton, LiquidityNotConnect } = LiquidityUI

        />
        <LiquidityCard.ListBody>
          <HasAccount fallbackComp={<LiquidityNotConnect />}>
            <LiquidityList />
          </HasAccount>
        </LiquidityCard.ListBody>
        <LiquidityCard.Footer>
          <GotoAddLiquidityButton />
        </LiquidityCard.Footer>
      </LiquidityCard>
    </>
  )
}

LiquidityPage.Layout = ExchangeLayout

export default LiquidityPage
