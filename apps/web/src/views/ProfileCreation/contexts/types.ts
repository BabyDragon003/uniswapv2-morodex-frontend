import { BigNumber } from '@ethersproject/bignumber'

export type Actions =
  | { type: 'next_step' }
  | { type: 'set_team'; teamId: number }
  currentStep: number
  teamId: number
  selectedNft: {
    tokenId: string
    collectionAddress: string
  }
  userName: string
  minimumCakeRequired: BigNumber
  allowance: BigNumber
}

export interface ContextType extends State {
  actions: {
    nextStep: () => void
    setTeamId: (teamId: number) => void
    setSelectedNft: (tokenId: string, collectionAddress: string) => void
    setUserName: (userName: string) => void
  }
}
