import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useCake } from 'hooks/useContract'
import { useSWRContract, UseSWRContractKey } from 'hooks/useSWRContract'
import BigNumber from 'bignumber.js'

// TODO: refactor as useTokenApprovalStatus for generic use

export const useCakeApprovalStatus = (spender) => {
  const { address: account } = useAccount()
    [account, cakeContract, spender],
  )

  const { data, mutate } = useSWRContract(key)

  return {
    isVaultApproved: data ? data.gt(0) : false,
    allowance: new BigNumber(data?.toString()),
    setLastUpdated: mutate,
  }
}

export default useCakeApprovalStatus
