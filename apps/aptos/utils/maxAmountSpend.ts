import { Currency, CurrencyAmount, JSBI } from '@pancakeswap/aptos-swap-sdk'
import { BIG_INT_ZERO, MIN_APT } from 'config/constants/exchange'
import { APTOS_COIN } from '@pancakeswap/awgmi'

/**
  if (currencyAmount.currency?.isNative || currencyAmount.currency?.address === APTOS_COIN) {
    if (JSBI.greaterThan(currencyAmount.quotient, MIN_APT)) {
      return CurrencyAmount.fromRawAmount(currencyAmount.currency, JSBI.subtract(currencyAmount.quotient, MIN_APT))
    }
    return CurrencyAmount.fromRawAmount(currencyAmount.currency, BIG_INT_ZERO)
  }
  return currencyAmount
}
