import styled from 'styled-components'
import { Tag, Flex, Heading, Box, Skeleton, Farm as FarmUI } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { TokenPairImage } from 'components/TokenImage'
import BoostedTag from '../YieldBooster/components/BoostedTag'

const { FarmAuctionTag, CoreTag, StableFarmTag } = FarmUI.Tags

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  boosted?: boolean
  isCommunityFarm,
  token,
  quoteToken,
  boosted,
  isStable,
}) => {
  const isReady = multiplier !== undefined

  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      {isReady ? (
        <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64} />
      ) : (
        <Skeleton mr="8px" width={63} height={63} variant="circle" />
      )}
      <Flex flexDirection="column" alignItems="flex-end">
        {isReady ? <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading> : <Skeleton mb="4px" width={60} height={18} />}
        <Flex justifyContent="center">
          {isStable ? <StableFarmTag mr="4px" /> : null}
          {isReady ? <Box>{isCommunityFarm ? <FarmAuctionTag /> : <CoreTag />}</Box> : null}
          {isReady && boosted && <BoostedTag ml="4px" />}
          {isReady ? (
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          ) : (
            <Skeleton ml="4px" width={42} height={28} />
          )}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
