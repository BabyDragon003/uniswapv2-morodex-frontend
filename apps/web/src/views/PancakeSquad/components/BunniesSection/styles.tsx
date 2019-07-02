import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledBunnySectionContainer = styled(Flex)`
  position: relative;
  flex-shrink: 0;

  & > img {
    position absolute;
    height: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out;
  }
`

export const StyledBunnyImage = styled.img<{ $isSelected: boolean }>`
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0)};
`

export const StyledTextContainer = styled(Flex)`
  z-index: 5;
`
