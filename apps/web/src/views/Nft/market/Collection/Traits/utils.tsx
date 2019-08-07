import { ApiResponseCollectionTokens } from 'state/nftMarket/types'

type sortBuilder = {
  data: ApiResponseCollectionTokens
  raritySort: string
}

export const sortBunniesByRarityBuilder =
  ({ raritySort, data }: sortBuilder) =>
  (bunnyIdA, bunnyIdB) => {
