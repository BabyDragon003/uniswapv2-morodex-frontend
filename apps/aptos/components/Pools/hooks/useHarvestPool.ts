import { SmartChef } from 'contracts/smartchef'
import useSimulationAndSendTransaction from 'hooks/useSimulationAndSendTransaction'
import { useCallback } from 'react'

export default function useHarvestPool({ stakingTokenAddress, earningTokenAddress, sousId }) {
      stakeTokenAddress: stakingTokenAddress,
      rewardTokenAddress: earningTokenAddress,
    })

    return executeTransaction(payload)
  }, [earningTokenAddress, executeTransaction, sousId, stakingTokenAddress])
}
