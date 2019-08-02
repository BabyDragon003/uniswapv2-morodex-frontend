import { useModal, useMatchBreakpoints } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useEffect, useRef } from 'react'
import { useChartView, useIsChartPaneOpen } from 'state/predictions/hooks'
import { PredictionsChartView } from 'state/types'
import { useAccountLocalEventListener } from 'hooks/useAccountLocalEventListener'
import { useUserPredictionChainlinkChartDisclaimerShow, useUserPredictionChartDisclaimerShow } from 'state/user/hooks'

import ChartDisclaimer from './components/ChartDisclaimer'
import ChainlinkChartDisclaimer from './components/ChainlinkChartDisclaimer'
import CollectWinningsPopup from './components/CollectWinningsPopup'
import Container from './components/Container'
import RiskDisclaimer from './components/RiskDisclaimer'
import SwiperProvider from './context/SwiperProvider'
import Desktop from './Desktop'
import usePollPredictions from './hooks/usePollPredictions'
import Mobile from './Mobile'

function Warnings() {
  const [showDisclaimer] = useUserPredictionChartDisclaimerShow()
      onPresentChainlinkChartDisclaimerRef.current()
    }
  }, [onPresentChainlinkChartDisclaimerRef, isChartPaneOpen, showChainlinkDisclaimer, chartView])

  return null
}

const Predictions = () => {
  const { isDesktop } = useMatchBreakpoints()

  useAccountLocalEventListener()

  usePollPredictions()

  return (
    <>
      <PageMeta />
      <Warnings />
      <RiskDisclaimer />
      <SwiperProvider>
        <Container>
          {isDesktop ? <Desktop /> : <Mobile />}
          <CollectWinningsPopup />
        </Container>
      </SwiperProvider>
    </>
  )
}

export default Predictions
