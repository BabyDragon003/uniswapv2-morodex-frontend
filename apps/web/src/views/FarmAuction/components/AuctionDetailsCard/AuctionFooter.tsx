import { useState } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, CardFooter, ExpandableLabel } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { Auction, AuctionStatus } from 'config/constants/types'
import WhitelistedBiddersButton from '../WhitelistedBiddersButton'

const FooterInner = styled(Box)`
  background-color: ${({ theme }) => theme.colors.dropdown};
`
        <FooterInner>
          <Flex p="16px" flexDirection="column">
            {isLiveOrPendingAuction && (
              <Flex justifyContent="space-between" width="100%" pt="8px" px="8px">
                <Text color="textSubtle">{t('Farms available')}</Text>
                <Text>
                  {topLeaderboard} ({t('top %num% bidders', { num: topLeaderboard })})
                </Text>
              </Flex>
            )}
            <Flex justifyContent="space-between" width="100%" pt="8px" px="8px">
              <Text color="textSubtle">{t('Multiplier per farm')}</Text>
              <Text>1x {t('each')}</Text>
            </Flex>
            <Flex justifyContent="space-between" width="100%" pt="8px" px="8px">
              <Text color="textSubtle">{t('Total whitelisted bidders')}</Text>
              <WhitelistedBiddersButton />
            </Flex>
          </Flex>
        </FooterInner>
      )}
      <Flex p="8px" alignItems="center" justifyContent="center">
        <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </Flex>
    </CardFooter>
  )
}

export default AuctionFooter
