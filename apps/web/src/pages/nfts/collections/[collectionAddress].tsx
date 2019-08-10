import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
// eslint-disable-next-line camelcase
import { SWRConfig, unstable_serialize } from 'swr'
import { getCollection } from 'state/nftMarket/helpers'
import CollectionPageRouter from 'views/Nft/market/Collection/CollectionPageRouter'

const CollectionPage = ({ fallback = {} }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <CollectionPageRouter />
    </SWRConfig>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [],
  }
}

    return {
      notFound: true,
      revalidate: 60,
    }
  }
}

export default CollectionPage
