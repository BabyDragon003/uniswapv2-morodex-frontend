import { Token } from '@pancakeswap/swap-sdk-core'
import { validateAndParseAddress } from '../utils'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol: string
  name?: string
  projectLink?: string
    name?: string,
    projectLink?: string
  ) {
    super(chainId, validateAndParseAddress(address), decimals, symbol, name, projectLink)
  }
}
