import { Percent, TradeType } from '@pancakeswap/swap-sdk-core'
import {
  routerSwapExactInput,
  routerAddLiquidity,
  routerRemoveLiquidity,
  routerSwapExactInputDoublehop,
  routerSwapExactInputTriplehop,
  routerSwapExactOutput,
  routerSwapExactOutputDoublehop,
  routerSwapExactOutputTriplehop,
  routerSwapExactInputQuadruplehop,
  routerSwapExactOutputQuadruplehop,
} from './generated/swap'
import { Trade } from './trade'
import { Currency } from './currency'

export interface TradeOptions {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   */
            trade.route.path[0].address,
            trade.route.path[1].address,
            trade.route.path[2].address,
            trade.route.path[3].address,
          ])
        case 5:
          return routerSwapExactInputQuadruplehop(args, [
            trade.route.path[0].address,
            trade.route.path[1].address,
            trade.route.path[2].address,
            trade.route.path[3].address,
            trade.route.path[4].address,
          ])
        default:
          return undefined
      }
    } else if (trade.tradeType === TradeType.EXACT_OUTPUT) {
      const args: [string, string] = [amountOut, amountIn]
      switch (trade.route.path.length) {
        case 2:
          return routerSwapExactOutput(args, [trade.route.input.wrapped.address, trade.route.output.wrapped.address])
        case 3:
          return routerSwapExactOutputDoublehop(args, [
            trade.route.path[0].address,
            trade.route.path[1].address,
            trade.route.path[2].address,
          ])
        case 4:
          return routerSwapExactOutputTriplehop(args, [
            trade.route.path[0].address,
            trade.route.path[1].address,
            trade.route.path[2].address,
            trade.route.path[3].address,
          ])
        case 5:
          return routerSwapExactOutputQuadruplehop(args, [
            trade.route.path[0].address,
            trade.route.path[1].address,
            trade.route.path[2].address,
            trade.route.path[3].address,
            trade.route.path[4].address,
          ])
        default:
          return undefined
      }
    }

    return undefined
  }

  public static addLiquidityParameters(
    amountX: string,
    amountY: string,
    amountXMin: string,
    amountYMin: string,
    addressX: string,
    addressY: string
  ) {
    return routerAddLiquidity([amountX, amountY, amountXMin, amountYMin], [addressX, addressY])
  }

  public static removeLiquidityParameters(
    liquidityAmount: string,
    minAmountX: string,
    minAmountY: string,
    addressX: string,
    addressY: string
  ) {
    return routerRemoveLiquidity([liquidityAmount, minAmountX, minAmountY], [addressX, addressY])
  }
}
