import { Currency, CurrencyAmount, Pair, Trade, TradeType, isTradeBetter } from '@pancakeswap/sdk'

import { BETTER_TRADE_LESS_HOPS_THRESHOLD } from './constants'
import { getAllCommonPairs as defaultGetAllCommonPairs } from './getAllCommonPairs'
import { BestTradeOptions } from './types'

export const getBestTradeFromV2ExactIn = createGetBestTradeFromV2(TradeType.EXACT_INPUT)

export const getBestTradeFromV2ExactOut = createGetBestTradeFromV2(TradeType.EXACT_OUTPUT)

export async function getBestTradeFromV2<
  TInput extends Currency,
  TOutput extends Currency,
  TTradeType extends TradeType,
>(amountIn: CurrencyAmount<TInput>, output: TOutput, tradeType: TTradeType, options: BestTradeOptions) {
  const getBestTrade = tradeType === TradeType.EXACT_INPUT ? getBestTradeFromV2ExactIn : getBestTradeFromV2ExactOut

  return getBestTrade(amountIn, output, options)
}

      if (Array.isArray(allCommonPairs)) {
        return allCommonPairs
      }
      if (allCommonPairs) {
        return allCommonPairs(amountIn.currency, output)
      }
      return defaultGetAllCommonPairs(amountIn.currency, output, { provider })
    }
    const allowedPairs = await getAllowedPairs()

    if (!allowedPairs.length) {
      return null
    }

    if (maxHops === 1) {
      return getBestTrade(allowedPairs, amountIn, output, restOptions)[0] ?? null
    }

    // search through trades with varying hops, find best trade out of them
    let bestTradeSoFar: ReturnType<typeof getBestTrade<In, Out>>[number] | null = null
    for (let i = 1; i <= maxHops; i++) {
      const currentTrade: ReturnType<typeof getBestTrade<In, Out>>[number] | null =
        getBestTrade(allowedPairs, amountIn, output, {
          ...restOptions,
          maxHops: i,
          maxNumResults: 1,
        })[0] ?? null
      // if current trade is best yet, save it
      if (isTradeBetter(bestTradeSoFar, currentTrade, BETTER_TRADE_LESS_HOPS_THRESHOLD)) {
        bestTradeSoFar = currentTrade
      }
    }
    return bestTradeSoFar
  }
}
