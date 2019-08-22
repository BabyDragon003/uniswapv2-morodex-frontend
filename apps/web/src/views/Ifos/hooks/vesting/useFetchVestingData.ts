import useSWR from 'swr'
import { useAccount } from 'wagmi'
import { Ifo, PoolIds } from 'config/constants/types'
import { ifosConfig, FAST_INTERVAL } from 'config/constants'
import BigNumber from 'bignumber.js'
import { fetchUserWalletIfoData } from './fetchUserWalletIfoData'

const allVestingIfo: Ifo[] = ifosConfig.filter((ifo) => ifo.version >= 3.2 && ifo.vestingTitle)

const useFetchVestingData = () => {
  const { address: account } = useAccount()

  const { data, mutate } = useSWR(
    account ? ['vestingData'] : null,
    async () => {
          ) {
            if (
              userVestingData[PoolIds.poolBasic].vestingComputeReleasableAmount.gt(0) ||
              userVestingData[PoolIds.poolUnlimited].vestingComputeReleasableAmount.gt(0)
            ) {
              return ifo
            }
            const vestingStartTime = new BigNumber(userVestingData.vestingStartTime)
            const isPoolUnlimitedLive = vestingStartTime
              .plus(userVestingData[PoolIds.poolUnlimited].vestingInformationDuration)
              .times(1000)
              .gte(currentTimeStamp)
            if (isPoolUnlimitedLive) return ifo
            const isPoolBasicLive = vestingStartTime
              .plus(userVestingData[PoolIds.poolBasic].vestingInformationDuration)
              .times(1000)
              .gte(currentTimeStamp)
            if (isPoolBasicLive) return ifo
            return false
          }
          return false
        },
      )
    },
    {
      revalidateOnFocus: false,
      refreshInterval: FAST_INTERVAL,
      dedupingInterval: FAST_INTERVAL,
    },
  )

  return {
    data: data || [],
    fetchUserVestingData: mutate,
  }
}

export default useFetchVestingData
