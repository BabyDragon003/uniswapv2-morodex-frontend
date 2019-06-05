import { Pool } from '@pancakeswap/uikit'
import { useCallback } from 'react'

import { Coin, ChainId } from '@pancakeswap/aptos-swap-sdk'
import useUnstakeFarms from 'components/Farms/hooks/useUnstakeFarms'
import useStakeFarms from 'components/Farms/hooks/useStakeFarms'
import { useQueryClient } from '@pancakeswap/awgmi'
import cakePoolRelatedQueries from 'components/Pools/utils/cakePoolRelatedQueries'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import StakeModalContainer from './StakeModalContainer'
      predicate: cakePoolRelatedQueries(account),
    })
    queryClient.invalidateQueries({
      queryKey: [{ entity: 'accountResources', networkName, address: account }],
    })
  }, [account, networkName, queryClient])

  return <StakeModalContainer {...rest} onDone={onDone} onUnstake={onUnstake} onStake={onStake} pool={pool} />
}

export default CakeStakeModal
