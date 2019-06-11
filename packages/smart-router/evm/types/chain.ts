import { ChainId, Token } from '@pancakeswap/sdk'

// a list of tokens by chain
export type ChainMap<T> = {
  readonly [chainId in ChainId]: T
