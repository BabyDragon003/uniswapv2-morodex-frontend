import { Children } from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'

const ModalActions: React.FC<React.PropsWithChildren> = ({ children }) => {
  const l = Children.toArray(children).length
  return (
    <StyledModalActions>
      {Children.map(children, (child, i) => (
        <>
  display: flex;
  margin: 0;
  padding: ${(props) => props.theme.spacing[4]} 0;
`

const StyledModalAction = styled.div`
  flex: 1;
`

export default ModalActions
