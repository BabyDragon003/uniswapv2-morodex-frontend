import { ChainId, Currency, CurrencyAmount, Native, Token, WNATIVE } from '@pancakeswap/sdk'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId): Token | undefined {
  return currency?.isNative ? WNATIVE[chainId] : currency?.isToken ? currency : undefined
}
  return token && currencyAmount ? CurrencyAmount.fromRawAmount(token, currencyAmount.quotient) : undefined
}

export function unwrappedToken(token: Currency): Currency {
  if (token.isNative) {
    return token
  }

  if (token.equals(WNATIVE[token.chainId])) return Native.onChain(token.chainId)
  return token
}
