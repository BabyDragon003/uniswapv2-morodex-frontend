import { BigintIsh, CurrencyAmount, Currency, JSBI, ZERO, Percent } from '@pancakeswap/sdk'
import invariant from 'tiny-invariant'

import { getD } from './amm'

export interface GetLPOutputParams {
  amplifier: BigintIsh
  // Token balances of the stable pool
  balances: CurrencyAmount<Currency>[]
  // User input amounts
  amounts: CurrencyAmount<Currency>[]
  // Total supply of LP token
  totalSupply: CurrencyAmount<Currency>
  // Fee of adding liquidity
  fee: Percent
}

export function getLPOutput({
  amplifier,
  balances,
  totalSupply,
  amounts,
  fee,
}: GetLPOutputParams): CurrencyAmount<Currency> {
  const lpToken = totalSupply.currency
  }

  const n = currentBalances.length
  const eachTokenFee = fee.multiply(n).divide(4 * (n - 1))

  let d2 = d1
  for (const [i, b] of currentBalances.entries()) {
    const idealBalance = JSBI.divide(JSBI.multiply(d1, b), d0)
    let diff = ZERO
    if (JSBI.greaterThan(idealBalance, newBalances[i])) {
      diff = JSBI.subtract(idealBalance, newBalances[i])
    } else {
      diff = JSBI.subtract(newBalances[i], idealBalance)
    }
    const feeAmount = eachTokenFee.multiply(diff).quotient
    newBalances[i] = JSBI.subtract(newBalances[i], feeAmount)
  }
  d2 = getD({ amplifier, balances: newBalances })

  const expectedMintLP = JSBI.divide(JSBI.multiply(lpTotalSupply, JSBI.subtract(d2, d0)), d0)
  return CurrencyAmount.fromRawAmount(totalSupply.currency, expectedMintLP)
}
