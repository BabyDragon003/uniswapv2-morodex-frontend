import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledBunnySectionContainer = styled(Flex)`
  position: relative;
  background: ${({ theme }) => theme.colors.gradientBubblegum};
`

export const StyledImageContainer = styled(Flex)`
  position:relative;
  z-index: 5;
  flex-shrink: 0;

  & > img {
    position absolute;
