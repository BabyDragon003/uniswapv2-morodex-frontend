import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import HarvestCard from './HarvestCard'
import UserDetail from './UserDetail'

const StyledCard = styled(Box)`
  border-bottom: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-left: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-right: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: ${({ theme }) => `0 0 ${theme.radii.card} ${theme.radii.card}`};
          <UserDetail />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']}>
          <HarvestCard />
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBanner
