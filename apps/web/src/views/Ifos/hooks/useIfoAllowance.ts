import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useAccount } from 'wagmi'
import { Contract } from '@ethersproject/contracts'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'

// Retrieve IFO allowance
const useIfoAllowance = (tokenContract: Contract, spenderAddress: string, dependency?: any): BigNumber => {
  const { address: account } = useAccount()
  const [allowance, setAllowance] = useState(BIG_ZERO)
    if (account) {
      fetch()
    }
  }, [account, spenderAddress, tokenContract, dependency])

  return allowance
}

export default useIfoAllowance
