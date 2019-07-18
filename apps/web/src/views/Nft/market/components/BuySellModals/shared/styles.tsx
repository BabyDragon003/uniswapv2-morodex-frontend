import styled from 'styled-components'
import { Flex, Image } from '@pancakeswap/uikit'

export const RoundedImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radii.small};
  overflow: hidden;
`

export const Divider = styled.div`
  margin: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

export const HorizontalDivider = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
`
