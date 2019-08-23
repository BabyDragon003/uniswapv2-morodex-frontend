import { LotteryTicket } from 'config/constants/types'
import random from 'lodash/random'

/**
 * Generate a specific number of unique, randomised 7-digit lottery numbers between 1000000 & 1999999
 */
const generateTicketNumbers = (
  numberOfTickets: number,
  userCurrentTickets?: LotteryTicket[],
  minNumber = 1000000,
  maxNumber = 1999999,
): number[] => {
  // Populate array with existing tickets (if they have them) to ensure no duplicates when generating new numbers
  const existingTicketNumbers =
    userCurrentTickets?.length > 0
      ? userCurrentTickets.map((ticket) => {
          return parseInt(ticket?.number)
        })
      : []
  const generatedTicketNumbers = [...existingTicketNumbers]
export default generateTicketNumbers
