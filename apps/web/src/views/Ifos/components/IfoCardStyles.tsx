import { Card, Link } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
  background: none;
  max-width: 368px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`

export const CardsWrapper = styled.div<{ singleCard?: boolean; shouldReverse?: boolean }>`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`
