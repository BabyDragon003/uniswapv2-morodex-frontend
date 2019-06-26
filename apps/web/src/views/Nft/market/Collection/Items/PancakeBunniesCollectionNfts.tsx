import { Grid } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import { CollectibleLinkCard } from '../../components/CollectibleCard'
import useAllPancakeBunnyNfts from '../../hooks/useAllPancakeBunnyNfts'
import GridPlaceholder from '../../components/GridPlaceholder'

interface CollectionNftsProps {
  address: string
  sortBy?: string
}
    : []

  if (!sortedNfts.length) {
    return <GridPlaceholder />
  }

  return (
    <>
      <Grid
        gridGap="16px"
        gridTemplateColumns={['1fr', null, 'repeat(3, 1fr)', null, 'repeat(4, 1fr)']}
        alignItems="start"
      >
        {sortedNfts.map((nft) => {
          return <CollectibleLinkCard key={`${nft?.tokenId}-${nft?.collectionName}`} nft={nft} />
        })}
      </Grid>
    </>
  )
}

export default PancakeBunniesCollectionNfts
