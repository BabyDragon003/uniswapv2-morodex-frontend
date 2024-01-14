import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Text, Select, OptionProps } from '@pancakeswap/uikit'
import { useGetCollection } from 'state/nftMarket/hooks'
import { useTranslation } from '@pancakeswap/localization'
const Items = () => {
  const collectionAddress = useRouter().query.collectionAddress as string
  const [sortBy, setSortBy] = useState('updatedAt')
  const { t } = useTranslation()
  const collection = useGetCollection(collectionAddress)
  const isPBCollection = isAddress(collectionAddress) === pancakeBunniesAddress

  const sortByItems = [
    { label: t('Recently listed'), value: 'updatedAt' },
    { label: t('Lowest price'), value: 'currentAskPrice' },
  ]

  const handleChange = (newOption: OptionProps) => {
    setSortBy(newOption.value)
  }

  return (
    <>
      {isPBCollection ? (
        <Container mb="24px">
          <Flex alignItems="center" justifyContent={['flex-start', null, null, 'flex-end']} mb="24px">
            <Box minWidth="165px">
              <Text fontSize="12px" textTransform="uppercase" color="textSubtle" fontWeight={600} mb="4px">
                {t('Sort By')}
              </Text>
              <Select options={sortByItems} onOptionChange={handleChange} />
            </Box>
          </Flex>
          <PancakeBunniesCollectionNfts address={collection?.address} sortBy={sortBy} />
        </Container>
      ) : (
        <CollectionWrapper collection={collection} />
      )}
    </>
  )
}

export default Items
