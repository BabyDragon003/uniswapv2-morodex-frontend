import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { StarFillIcon, StarLineIcon } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

const HoverIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export default SaveIcon
