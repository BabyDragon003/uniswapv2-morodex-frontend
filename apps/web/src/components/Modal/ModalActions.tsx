import { Children } from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'

const ModalActions: React.FC<React.PropsWithChildren> = ({ children }) => {
  const l = Children.toArray(children).length
  return (
    <StyledModalActions>
      {Children.map(children, (child, i) => (
        <>
          <StyledModalAction>{child}</StyledModalAction>
          {i < l - 1 && <Spacer />}
        </>
      ))}
    </StyledModalActions>
  )
}

const StyledModalActions = styled.div`
  align-items: center;
