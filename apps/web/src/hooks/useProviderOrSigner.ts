import { useMemo } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { useAccount, useProvider, useSigner } from 'wagmi'
import { useActiveChainId } from './useActiveChainId'

  return useMemo(
    () => (withSignerIfPossible && address && isConnected && signer ? signer : provider),
    [address, isConnected, provider, signer, withSignerIfPossible],
  )
}
