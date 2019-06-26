import { useAccount } from 'wagmi'
import { ChainId } from '@pancakeswap/sdk'
import useSWRImmutable from 'swr/immutable'
import { useCakeVaultContract } from 'hooks/useContract'
import { useActiveChainId } from './useActiveChainId'

export const useUserCakeLockStatus = () => {
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()
  const cakeVaultContract = useCakeVaultContract()
