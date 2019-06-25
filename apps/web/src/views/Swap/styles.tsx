import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;

  // ${({ theme }) => theme.mediaQueries.xxl} {
  //   ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 120px' : 'padding: 0 40px')};
  // }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  max-width: 576px;
  width: 100%;
`
