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
          virtualPriceAtLatestBlock: pair(id: $stableSwapAddress) {
            virtualPrice
          }
          virtualPriceOneDayAgo: pair(id: $stableSwapAddress, block: { number: $blockDayAgo }) {
            virtualPrice

  return new BigNumber('0')
}
