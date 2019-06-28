import React, { useMemo } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Flex, Text, useMatchBreakpoints, Pool } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { formatLpBalance } from '@pancakeswap/utils/formatBalance'

const StyledCell = styled(Pool.BaseCell)`
  flex: 0;
  padding: 0 0 24px 0;
  margin-left: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 3;
    padding: 24px 8px;
    margin-left: 30px;
  }
`

export interface StakedProps {
        <Flex mt="4px">
          <Text fontSize={isMobile ? '14px' : '16px'} color={stakedBalance.gt(0) ? 'text' : 'textDisabled'}>
            {displayBalance}
          </Text>
        </Flex>
      </Pool.CellContent>
    </StyledCell>
  )
}

export default Staked
