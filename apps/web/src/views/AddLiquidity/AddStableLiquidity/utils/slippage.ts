import { JSBI, Percent } from '@pancakeswap/sdk'

import { BIPS_BASE } from 'config/constants/exchange'

export const ALLOWED_SLIPPAGE_LOW: Percent = new Percent(JSBI.BigInt(9), BIPS_BASE) // 0.09%
  if (!slippage?.lessThan(ALLOWED_SLIPPAGE_HIGH)) return 3
  if (!slippage?.lessThan(ALLOWED_SLIPPAGE_MEDIUM)) return 2
  if (!slippage?.lessThan(ALLOWED_SLIPPAGE_LOW)) return 1
  return 0
}
