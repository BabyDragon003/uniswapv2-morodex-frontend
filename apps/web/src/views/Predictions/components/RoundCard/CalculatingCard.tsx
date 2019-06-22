import { Card, CardBody, Flex, Spinner, WaitIcon, TooltipText, useTooltip, InfoIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { NodeRound, BetPosition } from 'state/types'
import useTheme from 'hooks/useTheme'
import { RoundResultBox } from '../RoundResult'
import MultiplierArrow from './MultiplierArrow'
import CardHeader, { getBorderBackground } from './CardHeader'

interface CalculatingCardProps {
  round: NodeRound
  hasEnteredUp: boolean
  hasEnteredDown: boolean
}

const CalculatingCard: React.FC<React.PropsWithChildren<CalculatingCardProps>> = ({
  round,
  hasEnteredUp,
  hasEnteredDown,
}) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('This round’s closing transaction has been submitted to the blockchain, and is awaiting confirmation.'),
    { placement: 'bottom' },
  )
  )
}

export default CalculatingCard
