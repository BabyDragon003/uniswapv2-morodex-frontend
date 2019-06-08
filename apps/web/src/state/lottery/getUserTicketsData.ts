import { LotteryV2 } from 'config/abi/types'
import { TICKET_LIMIT_PER_REQUEST } from 'config/constants/lottery'
import { LotteryTicket } from 'config/constants/types'
import { getLotteryV2Contract } from 'utils/contractHelpers'

const lotteryContract = getLotteryV2Contract()

export const processRawTicketsResponse = (
  ticketsResponse: Awaited<ReturnType<LotteryV2['viewUserInfoForLotteryId']>>,
): LotteryTicket[] => {
  const [ticketIds, ticketNumbers, ticketStatuses] = ticketsResponse

  if (ticketIds?.length > 0) {
    return ticketIds.map((ticketId, index) => {
      return {
        id: ticketId.toString(),
        number: ticketNumbers[index].toString(),
        status: ticketStatuses[index],
      }
    })
  }
  return []
}

export const viewUserInfoForLotteryId = async (

  return ticketData
}

export const fetchUserTicketsForMultipleRounds = async (
  idsToCheck: string[],
  account: string,
): Promise<{ roundId: string; userTickets: LotteryTicket[] }[]> => {
  const results = await Promise.all(
    idsToCheck.map((roundId) => Promise.all([Promise.resolve(roundId), fetchUserTicketsForOneRound(account, roundId)])),
  )

  return results.map((result) => {
    const [roundId, ticketsForRound] = result
    return {
      roundId,
      userTickets: ticketsForRound,
    }
  })
}
