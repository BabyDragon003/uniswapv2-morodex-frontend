import { Currency, CurrencyAmount } from '@pancakeswap/aptos-swap-sdk'
import { useCoin } from '@pancakeswap/awgmi'
import { FetchCoinResult } from '@pancakeswap/awgmi/core'
import { useMemo } from 'react'

    coin: token?.wrapped.address,
    staleTime: 0,
    watch: true,
    select,
  })

  return useMemo(
    () => (token?.wrapped && data ? CurrencyAmount.fromRawAmount(token.wrapped, data) : undefined),
    [data, token?.wrapped],
  )
}

export default useTotalSupply
