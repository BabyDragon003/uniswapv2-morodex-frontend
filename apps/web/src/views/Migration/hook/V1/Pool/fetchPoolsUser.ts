import BigNumber from 'bignumber.js'
import { getMasterchefV1Contract } from 'utils/contractHelpers'

export const fetchUserStakeBalances = async (account) => {
  // Cake / Cake pool
  const pendingReward = await getMasterchefV1Contract().pendingCake('0', account)
  return new BigNumber(pendingReward.toString()).toJSON()
}
