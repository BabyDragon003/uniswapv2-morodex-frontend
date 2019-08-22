import { useCallback } from 'react'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { useSousChef } from 'hooks/useContract'
import { DEFAULT_GAS_LIMIT } from 'config'
import { useGasPrice } from 'state/user/hooks'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const harvestPool = async (sousChefContract, gasPrice) => {
  return sousChefContract.deposit('0', { ...options, gasPrice })
}

const harvestPoolBnb = async (sousChefContract, gasPrice) => {
    return harvestPool(sousChefContract, gasPrice)
  }, [isUsingBnb, sousChefContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestPool
