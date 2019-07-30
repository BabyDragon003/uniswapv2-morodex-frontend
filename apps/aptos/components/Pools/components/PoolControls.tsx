import { Coin } from '@pancakeswap/aptos-swap-sdk'
import { Pool } from '@pancakeswap/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { usePoolsStakedOnly, usePoolsViewMode } from 'state/user'


  return (
    <Pool.PoolControls<Coin>
      {...props}
      stakedOnly={stakedOnly}
      setStakedOnly={setStakedOnly}
      viewMode={viewMode}
      setViewMode={setViewMode}
      account={account}
      threshHold={threshHold}
    />
  )
}
