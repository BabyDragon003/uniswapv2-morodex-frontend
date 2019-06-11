import { memo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gradientVioletAlt};
  overflow: hidden;
`

export default memo(Container)
