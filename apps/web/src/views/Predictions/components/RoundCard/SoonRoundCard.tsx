import { Card, CardBody, Text, WaitIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { NodeRound, BetPosition } from 'state/types'
import useTheme from 'hooks/useTheme'
import { formatRoundTime } from '../../helpers'
import useCountdown from '../../hooks/useCountdown'
import { RoundResultBox } from '../RoundResult'
import MultiplierArrow from './MultiplierArrow'
import CardHeader, { getBorderBackground } from './CardHeader'

interface SoonRoundCardProps {
  round: NodeRound
}

const SoonRoundCard: React.FC<React.PropsWithChildren<SoonRoundCardProps>> = ({ round }) => {
          </Text>
        </RoundResultBox>
        <MultiplierArrow betPosition={BetPosition.BEAR} isDisabled />
      </CardBody>
    </Card>
  )
}

export default SoonRoundCard
