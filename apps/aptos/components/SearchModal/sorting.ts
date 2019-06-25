import { Token, getTokenComparator } from '@pancakeswap/aptos-swap-sdk'
import { useMemo } from 'react'
import { useAllTokenBalances } from 'hooks/Tokens'

function useTokenComparator(inverted: boolean): (tokenA: Token, tokenB: Token) => number {
    return comparator
  }, [inverted, comparator])
}

export default useTokenComparator
