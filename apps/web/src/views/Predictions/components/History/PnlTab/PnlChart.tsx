import { useTranslation } from '@pancakeswap/localization'
import { Text } from '@pancakeswap/uikit'
import { SVG, WonSlice, LostSlice, Wrapper, Info } from './PnlChartStyles'

/**
 * Bare minimum chart that doesn't require any external dependencies
 * For details read here - https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/
 */

interface PnlChartProps {
  won: number
  lost: number
}

// 2 * Pi * R
          {t('Won')}
        </Text>
        <Text bold fontSize="20px" lineHeight="1">
          {won}/{won + lost}
        </Text>
        <Text small lineHeight="1" color="textSubtle">
          {percentageWonDisplay}
        </Text>
      </Info>
    </Wrapper>
  )
}

export default PnlChart
