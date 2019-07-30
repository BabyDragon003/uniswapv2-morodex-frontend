import { Currency, CurrencyAmount, JSBI } from '@pancakeswap/sdk'
import { BIG_INT_ZERO, MIN_BNB } from 'config/constants/exchange'

/**
 * Given some token amount, return the max that can be spent of it
      return CurrencyAmount.fromRawAmount(currencyAmount.currency, JSBI.subtract(currencyAmount.quotient, MIN_BNB))
    }
    return CurrencyAmount.fromRawAmount(currencyAmount.currency, BIG_INT_ZERO)
  }
  return currencyAmount
}
