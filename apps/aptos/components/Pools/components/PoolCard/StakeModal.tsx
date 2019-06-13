import { useCallback } from 'react'
import { Pool } from '@pancakeswap/uikit'

import { Coin } from '@pancakeswap/aptos-swap-sdk'

import { useQueryClient } from '@pancakeswap/awgmi'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import poolRelatedQueries from 'components/Pools/utils/poolRelatedQueries'
import splitTypeTag from 'utils/splitTypeTag'

import useStakePool from '../../hooks/useStakePool'
import useUnstakePool from '../../hooks/useUnstakePool'
import StakeModalContainer from './StakeModalContainer'

const StakeModal = ({ pool, ...rest }: Pool.StakeModalPropsType<Coin>) => {
  })

  const onDone = useCallback(() => {
    queryClient.invalidateQueries({
      predicate: poolRelatedQueries(account),
    })
  }, [account, queryClient])

  return <StakeModalContainer onDone={onDone} onUnstake={onUnstake} onStake={onStake} pool={pool} {...rest} />
}

export default StakeModal
