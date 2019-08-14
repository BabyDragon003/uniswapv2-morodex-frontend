import { Fraction } from '@pancakeswap/aptos-swap-sdk'

export default function formatAmountDisplay(amount: Fraction | undefined): string {
  if (!amount) return ''

  const number = amount.toSignificant(18) || '0'

  const [intNumber, decimalNumber] = number.split('.')

  const trimDecimal = decimalNumber?.substring(0, 8)
