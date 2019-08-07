import { SmartChef } from 'contracts/smartchef'
import { getFullDecimalMultiplier } from '@pancakeswap/utils/getFullDecimalMultiplier'
import BigNumber from 'bignumber.js'
import useSimulationAndSendTransaction from 'hooks/useSimulationAndSendTransaction'
import { useCallback } from 'react'

export default function useStakePool({ stakingTokenAddress, earningTokenAddress, uid, stakingTokenDecimals }) {
  const executeTransaction = useSimulationAndSendTransaction()

  return useCallback(
    },
    [earningTokenAddress, executeTransaction, stakingTokenAddress, stakingTokenDecimals, uid],
  )
}
