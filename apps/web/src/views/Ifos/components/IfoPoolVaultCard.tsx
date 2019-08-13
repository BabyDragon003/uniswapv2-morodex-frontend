import { useMemo } from 'react'
import { Flex, useMatchBreakpoints, Pool } from '@pancakeswap/uikit'
import CakeVaultCard from 'views/Pools/components/CakeVaultCard'
import { usePoolsWithVault } from 'state/pools/hooks'
import { Token } from '@pancakeswap/sdk'
  const { pools } = usePoolsWithVault()
  const cakePool = useMemo(
    () => pools.find((pool) => pool.userData && pool.sousId === 0),
    [pools],
  ) as Pool.DeserializedPool<Token>

  return (
    <Flex width="100%" maxWidth={400} alignItems="center" flexDirection="column">
      {isSmallerThanXl ? (
        <IfoPoolVaultCardMobile pool={cakePool} />
      ) : (
        <CakeVaultCard pool={cakePool} showSkeleton={false} showStakedOnly={false} showICake />
      )}
      <IfoVesting pool={cakePool} />
    </Flex>
  )
}

export default IfoPoolVaultCard
