import JSBI from 'jsbi'
import invariant from 'tiny-invariant'
import { ZERO, ONE, TWO, THREE, VMType, VM_TYPE_MAXIMA } from './constants'
import { Currency } from './currency'
import { CurrencyAmount, Percent, Price } from './fractions'
import { Token } from './token'

export function validateVMTypeInstance(value: JSBI, vmType: VMType): void {
  invariant(JSBI.greaterThanOrEqual(value, ZERO), `${value} is not a ${vmType}.`)
  invariant(JSBI.lessThanOrEqual(value, VM_TYPE_MAXIMA[vmType]), `${value} is not a ${vmType}.`)
}

// mock the on-chain sqrt function
export function sqrt(y: JSBI): JSBI {
  validateVMTypeInstance(y, VMType.uint256)
  let z: JSBI = ZERO
  let x: JSBI
  if (JSBI.greaterThan(y, THREE)) {
    z = y
    x = JSBI.add(JSBI.divide(y, TWO), ONE)
    return null
  } else {
    const isFull = items.length === maxSize
    // short circuit if full and the additional item does not come before the last item
    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add
    }

    let lo = 0,
      hi = items.length

    while (lo < hi) {
      const mid = (lo + hi) >>> 1
      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    items.splice(lo, 0, add)
    return isFull ? items.pop()! : null
  }
}
/* eslint-enable */

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */
export function computePriceImpact<TBase extends Currency, TQuote extends Currency>(
  midPrice: Price<TBase, TQuote>,
  inputAmount: CurrencyAmount<TBase>,
  outputAmount: CurrencyAmount<TQuote>
): Percent {
  const quotedOutputAmount = midPrice.quote(inputAmount)
  // calculate price impact := (exactQuote - outputAmount) / exactQuote
  const priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount)
  return new Percent(priceImpact.numerator, priceImpact.denominator)
}

// compare two token amounts with highest one coming first
function balanceComparator(balanceA?: CurrencyAmount<Token>, balanceB?: CurrencyAmount<Token>) {
  if (balanceA && balanceB) {
    return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1
  }
  if (balanceA && balanceA.greaterThan('0')) {
    return -1
  }
  if (balanceB && balanceB.greaterThan('0')) {
    return 1
  }
  return 0
}

export function getTokenComparator(balances: {
  [tokenAddress: string]: CurrencyAmount<Token> | undefined
}): (tokenA: Token, tokenB: Token) => number {
  return function sortTokens(tokenA: Token, tokenB: Token): number {
    // -1 = a is first
    // 1 = b is first

    // sort by balances
    const balanceA = balances[tokenA.address]
    const balanceB = balances[tokenB.address]

    const balanceComp = balanceComparator(balanceA, balanceB)
    if (balanceComp !== 0) return balanceComp

    if (tokenA.symbol && tokenB.symbol) {
      // sort by symbol
      return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1
    }
    return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0
  }
}
