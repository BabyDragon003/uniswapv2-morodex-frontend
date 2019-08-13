import { useAccount, useProvider } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useActiveChainId, useActiveNetwork } from './useNetwork'

export default function useActiveWeb3React() {

  return {
    chainId,
    networkName,
    provider,
    account: isMounted ? account?.address : undefined,
  }
}
