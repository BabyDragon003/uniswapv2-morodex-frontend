import { Obj } from 'itty-router'
import { error } from 'itty-router-extras'
import { createFarmFetcher } from '@pancakeswap/farms'
import { createMulticall } from '@pancakeswap/multicall'
import { bscProvider, bscTestnetProvider, goerliProvider } from './provider'

export const getProvider = ({ chainId }: { chainId?: number }) => {
  switch (chainId) {
    case 56:
      return bscProvider
    case 97:
      return bscTestnetProvider
    case 5:
      return goerliProvider
    default:
      return null
  }
}

const multicall = createMulticall(getProvider)
