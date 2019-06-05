import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

const IfoLayout = styled(Box)`
  > div:not(.sticky-header) {
    margin-bottom: 32px;
  }
`
export const IfoLayoutWrapper = styled(IfoLayout)`
  column-gap: 32px;
`

export default IfoLayout
