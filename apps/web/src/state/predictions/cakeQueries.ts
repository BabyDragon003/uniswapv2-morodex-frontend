import { UserResponse, BetResponse, RoundResponse } from './responseType'

export interface UserResponseCAKE extends UserResponse<BetResponseCAKE> {
  totalCAKE: string
  totalCAKEBull: string
  totalCAKEBear: string
  averageCAKE: string
  totalCAKEClaimed: string
  netCAKE: string
}

export interface BetResponseCAKE extends BetResponse {
  claimedCAKE: string
  claimedNetCAKE: string
  user?: UserResponseCAKE
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedCAKE
 claimedNetCAKE
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalCAKE
  totalCAKEBull
  totalCAKEBear
  totalBetsClaimed
  totalCAKEClaimed
  winRate
  averageCAKE
  netCAKE
`
