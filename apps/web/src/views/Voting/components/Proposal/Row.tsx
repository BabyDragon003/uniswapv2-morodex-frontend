import styled from 'styled-components'
import { Grid, Box } from '@pancakeswap/uikit'

export const AddressColumn = styled(Box).attrs({ alignItems: 'center' })`
  grid-area: address;
`

export const ChoiceColumn = styled(Box)`
  grid-area: choice;
  overflow: hidden;
`

export const VotingPowerColumn = styled(Box)`
  justify-self: end;
  grid-area: vote;
`

export default Row
