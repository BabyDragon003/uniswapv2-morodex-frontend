import styled from 'styled-components'
import { Flex, Box } from '@pancakeswap/uikit'

export const CompetitionPage = styled.div`
  min-height: calc(100vh - 64px);
`

export const BannerFlex = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 10px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

    height: 214px;
  }
`
