import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import ScoreHeader from '../../../components/YourScore/ScoreHeader'
import RibbonWithImage from '../../../components/RibbonWithImage'
import { YourScoreProps } from '../../../types'
import FlippersShare from '../../../pngs/easter-flippers-share.png'
import StormShare from '../../../pngs/easter-storm-share.png'
import CakersShare from '../../../pngs/easter-cakers-share.png'
import ScoreCard from '../../../components/YourScore/ScoreCard'
import EasterUserPrizeGrid from './EasterUserPrizeGrid'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 24px auto 0;
  max-width: 768px;
`

const EasterYourScore: React.FC<React.PropsWithChildren<YourScoreProps>> = ({
  hasRegistered = false,
        >
          {t('Your Score')}
        </RibbonWithImage>
      )}
      <ScoreCard
        userPrizeGrid={<EasterUserPrizeGrid userTradingInformation={userTradingInformation} />}
        flippersShareImage={FlippersShare}
        cakersShareImage={CakersShare}
        stormShareImage={StormShare}
        hasRegistered={hasRegistered}
        account={account}
        userTradingInformation={userTradingInformation}
        profile={profile}
        isLoading={isLoading}
        userLeaderboardInformation={userLeaderboardInformation}
        currentPhase={currentPhase}
        userCanClaimPrizes={userCanClaimPrizes}
        finishedAndPrizesClaimed={finishedAndPrizesClaimed}
        finishedAndNothingToClaim={finishedAndNothingToClaim}
        onClaimSuccess={onClaimSuccess}
      />
    </Wrapper>
  )
}

export default EasterYourScore
