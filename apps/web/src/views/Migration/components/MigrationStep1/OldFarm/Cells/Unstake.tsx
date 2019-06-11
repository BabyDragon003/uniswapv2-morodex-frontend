import React from 'react'
import styled from 'styled-components'
import UnstakeButton from '../UnstakeButton'

const Container = styled.div`
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 32px;
  }
`
export interface UnstakeProps {
  pid: number
}

const Unstake: React.FC<React.PropsWithChildren<UnstakeProps>> = ({ pid }) => {
  return (
    <Container>
      <UnstakeButton pid={pid} />
    </Container>
  )
}

export default Unstake
