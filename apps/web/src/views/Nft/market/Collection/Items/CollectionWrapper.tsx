import { Box } from '@pancakeswap/uikit'
import { Collection } from 'state/nftMarket/types'
import Container from 'components/Layout/Container'
import Filters from './Filters'
import CollectionNfts from './CollectionNfts'
  return (
    <Box py="32px">
      <Container px={[0, null, '24px']}>
        <Filters address={collection?.address || ''} attributes={collection?.attributes} />
      </Container>
      <Container>
        <CollectionNfts collection={collection} />
      </Container>
    </Box>
  )
}

export default CollectionWrapper
