import invariant from 'tiny-invariant'
import { Token, Currency, Price } from '@pancakeswap/swap-sdk-core'

import { Pair } from './pair'

export class Route<TInput extends Currency, TOutput extends Currency> {
  public readonly pairs: Pair[]
  public readonly path: Token[]
  public readonly input: TInput
  public readonly output: TOutput

  public constructor(pairs: Pair[], input: TInput, output: TOutput) {
    invariant(pairs.length > 0, 'PAIRS')
    const chainId: number = pairs[0].chainId
    invariant(
    this.pairs = pairs
    this.path = path
    this.input = input
    this.output = output
  }

  private _midPrice: Price<TInput, TOutput> | null = null

  public get midPrice(): Price<TInput, TOutput> {
    if (this._midPrice !== null) return this._midPrice
    const prices: Price<Currency, Currency>[] = []
    for (const [i, pair] of this.pairs.entries()) {
      prices.push(
        this.path[i].equals(pair.token0)
          ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient)
          : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient)
      )
    }
    const reduced = prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0])
    return (this._midPrice = new Price(this.input, this.output, reduced.denominator, reduced.numerator))
  }

  public get chainId(): number {
    return this.pairs[0].chainId
  }
}
