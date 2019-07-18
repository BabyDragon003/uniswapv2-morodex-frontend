import { Token } from '@pancakeswap/swap-sdk-core'
import { HexString } from 'aptos'
import { Currency } from './currency'

export class Coin extends Token {
  public constructor(
    chainId: number,
    address: string,
    decimals: number,
    symbol: string,
    name?: string,
    projectLink?: string
  ) {
    super(chainId, new HexString(address).toShortString(), decimals, symbol, name, projectLink)
  }
