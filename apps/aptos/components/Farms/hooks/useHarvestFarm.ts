import { useCallback } from 'react'
import { masterchefDeposit } from 'config/constants/contracts/masterchef'
import useSimulationAndSendTransaction from 'hooks/useSimulationAndSendTransaction'

const useHarvestFarm = (tokenType: string) => {

  return { onReward: handleHarvest }
}

export default useHarvestFarm
