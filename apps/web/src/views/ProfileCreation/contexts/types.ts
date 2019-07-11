import { BigNumber } from '@ethersproject/bignumber'

export type Actions =
  | { type: 'next_step' }
  | { type: 'set_team'; teamId: number }
  | { type: 'set_selected_nft'; collectionAddress: string; tokenId: string }
  | { type: 'set_username'; userName: string | null }
  | { type: 'initialize'; step: number }

export interface State {
  isInitialized: boolean
  currentStep: number
  teamId: number
  selectedNft: {
    tokenId: string
