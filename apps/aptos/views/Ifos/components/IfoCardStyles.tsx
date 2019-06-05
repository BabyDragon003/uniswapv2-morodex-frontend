import { Card, Link } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
  background: none;
  max-width: 368px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`
    order: ${({ shouldReverse }) => (shouldReverse ? 2 : 1)};
  }

  > div:nth-child(2) {
    order: ${({ shouldReverse }) => (shouldReverse ? 1 : 2)};
  }
`

export const MessageTextLink = styled(Link)`
  display: inline;
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`
