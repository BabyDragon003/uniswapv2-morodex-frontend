import { parseUnits } from '@ethersproject/units'
import { Currency, CurrencyAmount, JSBI } from '@pancakeswap/swap-sdk-core'

// try to parse a user entered amount for a given token
function tryParseAmount<T extends Currency>(value?: string, currency?: T): CurrencyAmount<T> | undefined {
  if (!value || !currency) {
    return undefined
  }
  try {
    const typedValueParsed = parseUnits(value, currency.decimals).toString()

    if (typedValueParsed !== '0') {
      return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed))
    }
  } catch (error) {
