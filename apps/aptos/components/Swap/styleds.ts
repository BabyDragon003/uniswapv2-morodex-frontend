import { AutoColumn, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => `${theme.colors.warning33}`};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
`

