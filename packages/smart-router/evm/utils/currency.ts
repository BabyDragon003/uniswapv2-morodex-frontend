import { ChainId, Currency, CurrencyAmount, Native, Token, WNATIVE } from '@pancakeswap/sdk'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId): Token | undefined {
  return currency?.isNative ? WNATIVE[chainId] : currency?.isToken ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount<Currency> | undefined,
  chainId: ChainId | undefined,
): CurrencyAmount<Token> | undefined {
}
