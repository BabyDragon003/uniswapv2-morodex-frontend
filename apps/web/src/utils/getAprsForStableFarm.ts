import BigNumber from 'bignumber.js'
import { gql } from 'graphql-request'
import _toLower from 'lodash/toLower'
import { getDeltaTimestamps } from './getDeltaTimestamps'
import { getBlocksFromTimestamps } from './getBlocksFromTimestamps'
import { stableSwapClient } from './graphql'

export const getAprsForStableFarm = async (stableSwapAddress?: string): Promise<BigNumber> => {
  try {
    const [, , t7d] = getDeltaTimestamps()
    const [blockDay7Ago] = await getBlocksFromTimestamps([t7d])

    const { virtualPriceAtLatestBlock, virtualPriceOneDayAgo: virtualPrice7DayAgo } = await stableSwapClient.request(
      gql`
        query virtualPriceStableSwap($stableSwapAddress: String, $blockDayAgo: Int!) {

    const result = current.minus(prev).div(current).plus(1).pow(52).minus(1).times(100)

    if (result.isFinite() && result.isGreaterThan(0)) {
      return result
    }
    return new BigNumber(0)
  } catch (error) {
    console.error(error, '[LP APR Update] getAprsForStableFarm error')
  }

  return new BigNumber('0')
}
