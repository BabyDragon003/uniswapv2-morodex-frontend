import { Pool } from '@pancakeswap/uikit'
import { useCallback } from 'react'

import { Coin, ChainId } from '@pancakeswap/aptos-swap-sdk'
import useUnstakeFarms from 'components/Farms/hooks/useUnstakeFarms'
import useStakeFarms from 'components/Farms/hooks/useStakeFarms'
import { useQueryClient } from '@pancakeswap/awgmi'
import cakePoolRelatedQueries from 'components/Pools/utils/cakePoolRelatedQueries'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import StakeModalContainer from './StakeModalContainer'

const CakeStakeModal = ({ pool, ...rest }: Pool.StakeModalPropsType<Coin>) => {
  const { contractAddress } = pool
  const queryClient = useQueryClient()
  const { account, networkName } = useActiveWeb3React()
export default CakeStakeModal
