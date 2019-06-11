import { useCallback } from 'react'
import { useCrossFarmingProxy } from 'hooks/useContract'

const useNonBscHarvestFarm = (farmPid: number, cProxyAddress: string) => {
  const contract = useCrossFarmingProxy(cProxyAddress)
}

export default useNonBscHarvestFarm
