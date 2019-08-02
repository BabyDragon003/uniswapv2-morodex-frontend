import { Currency, Percent, TradeType } from '@pancakeswap/swap-sdk-core'
import { Trade } from 'entities'
import { ONE_HUNDRED_PERCENT, ZERO_PERCENT } from './constants'

// returns whether tradeB is better than tradeA by at least a threshold percentage amount
export function isTradeBetter(
  tradeA: Trade<Currency, Currency, TradeType> | undefined | null,
  tradeB: Trade<Currency, Currency, TradeType> | undefined | null,
  minimumDelta: Percent = ZERO_PERCENT
): boolean | undefined {
  if (tradeA && !tradeB) return false
  if (tradeB && !tradeA) return true
  if (!tradeA || !tradeB) return undefined

  if (
    tradeA.tradeType !== tradeB.tradeType ||
    !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) ||
    !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency)
  ) {
    throw new Error('Trades are not comparable')
