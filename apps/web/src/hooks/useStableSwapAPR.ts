import useSWRImmutable from 'swr/immutable'
import { SWRConfiguration } from 'swr'
import { getAprsForStableFarm } from 'utils/getAprsForStableFarm'
import BigNumber from 'bignumber.js'
import { useGetChainName } from '../state/info/hooks'
const SWR_SETTINGS: SWRConfiguration = {
  refreshInterval: refreshIntervalForInfo,
  ...SWR_SETTINGS_WITHOUT_REFETCH,
}

export const useStableSwapAPR = (address: string | undefined): number => {
  const chainName = useGetChainName()
  const { data } = useSWRImmutable<BigNumber>(
    address && [`info/pool/stableAPR/${address}/`, chainName],
    () => getAprsForStableFarm(address),
    SWR_SETTINGS,
  )
  return data?.toNumber()
}
