import { useCallback } from 'react'
import { Pool } from '@pancakeswap/uikit'

import { Coin } from '@pancakeswap/aptos-swap-sdk'

import useUnstakePool from '../../hooks/useUnstakePool'
import StakeModalContainer from './StakeModalContainer'

const StakeModal = ({ pool, ...rest }: Pool.StakeModalPropsType<Coin>) => {
  const { stakingToken, contractAddress } = pool
  const queryClient = useQueryClient()
  const { account, chainId } = useActiveWeb3React()
  const [stakingTokenAddress, earningTokenAddress, uid] = splitTypeTag(contractAddress[chainId])

  const onUnstake = useUnstakePool({
    uid,
    earningTokenAddress,
    stakingTokenAddress,
    stakingTokenDecimals: stakingToken?.decimals,
  })
  const onStake = useStakePool({
    uid,
    earningTokenAddress,
    stakingTokenAddress,
    stakingTokenDecimals: stakingToken?.decimals,
  })

  const onDone = useCallback(() => {
    queryClient.invalidateQueries({
      predicate: poolRelatedQueries(account),
    })
  }, [account, queryClient])

  return <StakeModalContainer onDone={onDone} onUnstake={onUnstake} onStake={onStake} pool={pool} {...rest} />
}

export default StakeModal
