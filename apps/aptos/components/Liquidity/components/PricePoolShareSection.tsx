import { RowBetween, Text } from '@pancakeswap/uikit'
import { LightCard } from 'components/Card'
import { useTranslation } from '@pancakeswap/localization'

export default function PricePoolShareSection({ farmPriceBar, noLiquidity }) {
      </RowBetween>{' '}
      <LightCard padding="1rem" borderRadius="20px">
        {farmPriceBar}
      </LightCard>
    </LightCard>
  )
}
