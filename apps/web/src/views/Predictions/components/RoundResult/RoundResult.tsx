import { BoxProps, Text } from '@pancakeswap/uikit'
import { NodeRound } from 'state/types'
import { useTranslation } from '@pancakeswap/localization'
import { getRoundPosition } from '../../helpers'
import { LockPriceRow, PrizePoolRow, RoundPrice, RoundResultBox } from './styles'

interface RoundResultProps extends BoxProps {
  round: NodeRound
  hasFailed?: boolean
}

const RoundResult: React.FC<React.PropsWithChildren<RoundResultProps>> = ({
  round,
  hasFailed = false,
  children,
  ...props
}) => {
  const { lockPrice, closePrice, totalAmount } = round
  const betPosition = getRoundPosition(lockPrice, closePrice)
  const { t } = useTranslation()
