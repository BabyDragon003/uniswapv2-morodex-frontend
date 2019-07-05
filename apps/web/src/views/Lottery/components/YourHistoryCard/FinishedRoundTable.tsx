import styled from 'styled-components'
import { Text, Box, Flex, Button } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LotteryStatus } from 'config/constants/types'
import { useGetUserLotteriesGraphData } from 'state/lottery/hooks'
import FinishedRoundRow from './FinishedRoundRow'

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
`

interface FinishedRoundTableProps {
  handleHistoryRowClick: (string) => void
  handleShowMoreClick: () => void
  numUserRoundsRequested: number
}

const FinishedRoundTable: React.FC<React.PropsWithChildren<FinishedRoundTableProps>> = ({
  handleShowMoreClick,
          {t('Date')}
        </Text>
        <Text bold fontSize="12px" color="secondary" textTransform="uppercase">
          {t('Your Tickets')}
        </Text>
        <Box width="20px" />
      </Grid>
      <Flex px="24px" pb="24px" flexDirection="column" overflowY="scroll" height="240px">
        {userLotteryData &&
          sortedByRoundId.map((finishedRound) => (
            <FinishedRoundRow
              key={finishedRound.lotteryId}
              roundId={finishedRound.lotteryId}
              hasWon={finishedRound.claimed}
              numberTickets={finishedRound.totalTickets}
              endTime={finishedRound.endTime}
              onClick={handleHistoryRowClick}
            />
          ))}
        {userLotteryData?.rounds?.length === numUserRoundsRequested && (
          <Flex justifyContent="center">
            <Button mt="12px" variant="text" width="fit-content" onClick={handleShowMoreClick}>
              {t('Show More')}
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  )
}

export default FinishedRoundTable
