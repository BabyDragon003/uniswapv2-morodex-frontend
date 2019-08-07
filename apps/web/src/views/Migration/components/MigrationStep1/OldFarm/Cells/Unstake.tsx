import React from 'react'
import styled from 'styled-components'
import UnstakeButton from '../UnstakeButton'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 14px 0 0;

  ${({ theme }) => theme.mediaQueries.sm} {

const Unstake: React.FC<React.PropsWithChildren<UnstakeProps>> = ({ pid }) => {
  return (
    <Container>
      <UnstakeButton pid={pid} />
    </Container>
  )
}

export default Unstake
