import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'

const Row = styled(Box)<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding ?? '0'};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`

  margin: ${({ gap }) => gap && `-${gap}`};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`

export default Row
