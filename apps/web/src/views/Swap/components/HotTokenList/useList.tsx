import { PANCAKE_EXTENDED } from 'config/constants/lists'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'
import { selectorByUrlsAtom } from 'state/lists/hooks'
import { useTokenDatasSWR, useAllTokenHighLight } from 'state/info/hooks'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'

export const useBSCWhiteList = () => {
  const listsByUrl = useAtomValue(selectorByUrlsAtom)
  const allTokensFromETH = useAllTokenHighLight()

  return chainId === ChainId.BSC ? allTokensFromBSC : allTokensFromETH
}
