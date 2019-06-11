import { Fraction } from '@pancakeswap/aptos-swap-sdk'

export default function formatAmountDisplay(amount: Fraction | undefined): string {
  if (!amount) return ''

  if (!parseFloat(trimDecimal)) {
    return intNumber
  }

  return `${intNumber}.${decimalNumber.substring(0, 8)}`
}
