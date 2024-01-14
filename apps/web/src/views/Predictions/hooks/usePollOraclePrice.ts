import { useChainlinkOracleContract } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'
import { Zero } from '@ethersproject/constants'
import { useConfig } from '../context/ConfigProvider'

    refreshInterval: seconds * 1000,
    refreshWhenHidden: true,
    refreshWhenOffline: true,
    dedupingInterval: seconds * 1000,
    fallbackData: Zero,
  })

  return { price, refresh: mutate }
}

export default usePollOraclePrice
