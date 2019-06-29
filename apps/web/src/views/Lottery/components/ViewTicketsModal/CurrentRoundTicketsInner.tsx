import styled from 'styled-components'
import { Flex, Box, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LotteryStatus } from 'config/constants/types'
import { useLottery } from 'state/lottery/hooks'
import useTheme from 'hooks/useTheme'
import TicketNumber from '../TicketNumber'
import BuyTicketsButton from '../BuyTicketsButton'

const ScrollBox = styled(Box)`
  max-height: 300px;
  overflow-y: scroll;
  margin-left: -24px;
  margin-right: -24px;
  padding-left: 24px;
  padding-right: 20px;
`

const CurrentRoundTicketsInner = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const {
    isTransitioning,
    currentRound: { status, userTickets },
  } = useLottery()
  )
}

export default CurrentRoundTicketsInner
