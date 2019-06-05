import { Box, ChevronLeftIcon, Flex, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import SearchBar from '../components/SearchBar'

const BackLink = styled(NextLinkFromReactRouter)`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
      </BackLink>
      <Box>
        <SearchBar />
      </Box>
    </Flex>
  )
}

export default TopBar
