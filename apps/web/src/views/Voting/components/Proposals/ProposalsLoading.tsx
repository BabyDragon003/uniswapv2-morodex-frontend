import { Box, Flex, Skeleton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import times from 'lodash/times'
import { PROPOSALS_TO_SHOW } from '../../config'

const Row = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Wrapper = styled.div`
            <Skeleton height="21px" width="70%" mb="4px" />
            <Skeleton height="21px" width="30%" mb="4px" />
            <Skeleton height="21px" width="40%" />
          </Box>
          <Skeleton height="32px" width="32px" />
        </Row>
      ))}
    </Wrapper>
  )
}

export default ProposalsLoading
