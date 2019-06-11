import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'

interface StickerProps {
  backgroundColor?: string
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.colors.invertedContrast};
  border: 2px solid ${({ theme, borderColor }) => borderColor || theme.colors.invertedContrast};
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`

export default Sticker
