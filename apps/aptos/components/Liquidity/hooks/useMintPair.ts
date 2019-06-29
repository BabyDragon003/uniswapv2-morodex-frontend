import { Currency, CurrencyAmount, JSBI, Pair } from '@pancakeswap/aptos-swap-sdk'
import { useTranslation } from '@pancakeswap/localization'
import { useCurrencyBalance } from 'hooks/Balances'
import { PairState, usePair } from 'hooks/usePairs'
import useTotalSupply from 'hooks/useTotalSupply'
import { createContext, useMemo } from 'react'
import { BIG_INT_ZERO } from 'config/constants/exchange'
import { Field } from '../type'

interface MintPairContextValue {
  pair?: Pair | null
  pairState: PairState
  currencyBalances: { [field in Field]?: CurrencyAmount<Currency> }
  error?: string
  totalSupply: CurrencyAmount<Currency> | undefined
  noLiquidity: boolean
}

export const MintPairContext = createContext<MintPairContextValue>({
  pair: undefined,
  pairState: PairState.LOADING,
  currencyBalances: {
    [Field.CURRENCY_A]: undefined,
    [Field.CURRENCY_B]: undefined,
  },
  // balances
  const currencyBalances: { [field in Field]?: CurrencyAmount<Currency> } = useMemo(
    () => ({
      [Field.CURRENCY_A]: balanceA,
      [Field.CURRENCY_B]: balanceB,
    }),
    [balanceA, balanceB],
  )

  let error: string | undefined

  if (pairState === PairState.INVALID) {
    error = error ?? t('Choose a valid pair')
  }

  // If account has not registered, the balance will return undefined
  if (
    !currencyBalances[Field.CURRENCY_A] ||
    !currencyBalances?.[Field.CURRENCY_B] ||
    currencyBalances?.[Field.CURRENCY_A]?.equalTo(0) ||
    currencyBalances?.[Field.CURRENCY_B]?.equalTo(0)
  ) {
    error = error ?? t('No token balance')
  }

  return useMemo(
    () => ({
      pair,
      pairState,
      currencyBalances,
      error,
      totalSupply,
      noLiquidity,
    }),
    [pair, pairState, currencyBalances, error, totalSupply, noLiquidity],
  )
}
