import BigNumber from 'bignumber.js'
import { ChainId } from '@pancakeswap/sdk'
import { BLOCKS_PER_YEAR } from 'config'
import lpAprs56 from 'config/constants/lpAprs/56.json'
import lpAprs1 from 'config/constants/lpAprs/1.json'

const getLpApr = (chainId: number) => {
  switch (chainId) {
    case ChainId.BSC:
      return lpAprs56
    case ChainId.ETHEREUM:
      return lpAprs1
    default:
      return {}
  }
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  chainId: number,
  poolWeight: BigNumber,
  cakePriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
  regularCakePerBlock: number,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  const yearlyCakeRewardAllocation = poolWeight
    ? poolWeight.times(BLOCKS_PER_YEAR * regularCakePerBlock)
    : new BigNumber(NaN)
  const cakeRewardsApr = yearlyCakeRewardAllocation.times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  let cakeRewardsAprAsNumber = null
  if (!cakeRewardsApr.isNaN() && cakeRewardsApr.isFinite()) {
    cakeRewardsAprAsNumber = cakeRewardsApr.toNumber()
  }
  const lpRewardsApr = (getLpApr(chainId)[farmAddress?.toLowerCase()] || getLpApr(chainId)[farmAddress]) ?? 0 // can get both checksummed or lowercase
  return { cakeRewardsApr: cakeRewardsAprAsNumber, lpRewardsApr }
}

export default null
