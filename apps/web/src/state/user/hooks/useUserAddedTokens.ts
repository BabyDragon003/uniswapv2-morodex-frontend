import { useMemo } from 'react'
import { Token } from '@pancakeswap/sdk'
import { createSelector } from '@reduxjs/toolkit'
import { deserializeToken } from '@pancakeswap/token-lists'
import { useSelector } from 'react-redux'
  createSelector(selectUserTokens, (serializedTokensMap) =>
    Object.values(serializedTokensMap?.[chainId] ?? {}).map(deserializeToken),
  )
export default function useUserAddedTokens(): Token[] {
  const { chainId } = useActiveChainId()
  return useSelector(useMemo(() => userAddedTokenSelector(chainId), [chainId]))
}
