import { Box, Flex, Skeleton } from '@pancakeswap/uikit'
import times from 'lodash/times'
import styled from 'styled-components'

const Row = styled(Flex)`
`

const VotesLoading = () => {
  return (
    <Box>
      {times(10).map((index) => (
        <Row key={index}>
          <Skeleton height="21px" mr="32px" width="100px" />
          <StyledSkeleton height="21px" mr="32px" width="100%" />
          <StyledSkeleton height="21px" width="100%" />
        </Row>
      ))}
    </Box>
  )
}

export default VotesLoading
