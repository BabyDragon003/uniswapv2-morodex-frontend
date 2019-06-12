import { BigNumber } from '@ethersproject/bignumber'

export enum SaleStatusEnum {
  Pending, // Contract is deployed
  Premint, // Tickets are preminted by owner
  Presale, // Tickets are preminted by Gen0 users
  Sale, // Tickets are for sold in general sale
  DrawingRandomness, // Randomness has been drawn
  Claim, // Tickets can be claimed for the token
}
  maxPerTransaction: number
  pricePerTicket: BigNumber
  totalTicketsDistributed: number
  saleStatus: SaleStatusEnum
  totalSupplyMinted: number
  startTimestamp: number
}

export type UserInfos = {
  canClaimForGen0: boolean
  numberTicketsForGen0: number
  numberTicketsUsedForGen0: number
  numberTicketsOfUser: number
  ticketsOfUser: BigNumber[]
  numberTokensOfUser: number
}
