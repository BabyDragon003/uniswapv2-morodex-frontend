import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSquadContainer = styled(Box)`
  min-height: 100vh;
  background-color: #e6feff;
`

export const LandingBodyWrapper = styled(Flex)`
  max-width: 1200px;
  width: 100%;
  margin: 0 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 40px;
  }
`

export const StyledWaveContainer = styled(Box)`
  position: absolute;
