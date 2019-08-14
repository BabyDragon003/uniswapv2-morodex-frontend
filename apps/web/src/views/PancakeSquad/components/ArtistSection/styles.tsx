import { Flex, Link } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledArtistSectionContainer = styled(Flex)<{ $isDark: boolean }>`
  position: relative;
  background: ${({ $isDark }) =>
    $isDark
      ? `linear-gradient(90deg, #313D5C 0%, #3D2A54 100%);`
      : `linear-gradient(90deg, #faf9fa 0%, #d7caec 100%);`};
`
    height: 85px;
    left: calc(50% - 10px);
    top: -51px;
    transform: rotate(90deg);

    ${({ theme }) => theme.mediaQueries.md} {
      left: -19px;
      top: calc(50% - 42px);
      transform: none;
    }
  }
`

export const StyledSocialButton = styled(Link)`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: fit-content;
  }
`
