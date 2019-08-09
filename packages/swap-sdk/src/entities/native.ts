import invariant from 'tiny-invariant'
import { Currency, Token, NativeCurrency } from '@pancakeswap/swap-sdk-core'
import { WNATIVE, NATIVE } from '../constants'

/**
 *
 * Native is the main usage of a 'native' currency, i.e. for BSC mainnet and all testnets
 */
export class Native extends NativeCurrency {
  protected constructor({
    chainId,
    decimals,
    name,
    symbol,
  }: {
    chainId: number
    decimals: number
    symbol: string
    name: string
  }) {
    return other.isNative && other.chainId === this.chainId
  }
}
