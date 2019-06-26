import BigNumber from 'bignumber.js'
import { useMemo } from 'react'
import { PoolIds } from 'config/constants/types'
import { useFetchUserWalletIfoData } from './useFetchUserWalletIfoData'

const useFetchVestingData = () => {
  const currentTimeStamp = new Date().getTime()
  const allData = useFetchUserWalletIfoData()

  const filterVestingIfos = useMemo(
            return true
          }

          const vestingStartTime = new BigNumber(userVestingData.vestingStartTime)
          const isPoolUnlimitedLive = vestingStartTime
            .plus(poolUnlimitedUserInfo.vestingInformationDuration)
            .times(1000)
            .gte(currentTimeStamp)

          if (isPoolUnlimitedLive) return true

          return false
        }

        return false
      }),
    [allData, currentTimeStamp],
  )

  return filterVestingIfos
}

export default useFetchVestingData
