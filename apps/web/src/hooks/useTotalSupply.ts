import { useMemo } from 'react'
import { Currency, CurrencyAmount, Token } from '@pancakeswap/sdk'
import { useTokenContract } from './useContract'
import { useSingleCallResult } from '../state/multicall/hooks'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Currency): CurrencyAmount<Token> | undefined {
  const contract = useTokenContract(token?.isToken ? token.address : undefined, false)

