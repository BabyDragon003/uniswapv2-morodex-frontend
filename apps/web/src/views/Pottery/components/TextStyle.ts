import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'

export const OutlineText = styled(Text)<{ defaultType?: boolean }>`
  padding: 0 2px;
  color: ${({ theme, defaultType }) => (defaultType ? '#ffffff' : theme.colors.secondary)};
  background: ${({ theme, defaultType }) => (defaultType ? theme.colors.secondary : '#ffffff')};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
