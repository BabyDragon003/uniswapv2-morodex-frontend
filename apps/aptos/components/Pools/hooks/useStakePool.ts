import { SmartChef } from 'contracts/smartchef'
import { getFullDecimalMultiplier } from '@pancakeswap/utils/getFullDecimalMultiplier'
import BigNumber from 'bignumber.js'
import useSimulationAndSendTransaction from 'hooks/useSimulationAndSendTransaction'
import { useCallback } from 'react'
      const stakeAmount = new BigNumber(amount).times(getFullDecimalMultiplier(stakingTokenDecimals)).toString()

      const payload = SmartChef.deposit({
        amount: stakeAmount,
        uid,
        stakeTokenAddress: stakingTokenAddress,
        rewardTokenAddress: earningTokenAddress,
      })

      return executeTransaction(payload)
    },
    [earningTokenAddress, executeTransaction, stakingTokenAddress, stakingTokenDecimals, uid],
  )
}
