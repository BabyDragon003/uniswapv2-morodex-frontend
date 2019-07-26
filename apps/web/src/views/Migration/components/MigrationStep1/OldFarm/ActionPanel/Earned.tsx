import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Heading, Text, useMatchBreakpoints, Balance } from '@pancakeswap/uikit'
import { ActionContainer, ActionContent, ActionTitles } from 'views/Pools/components/PoolsTable/ActionPanel/styles'
import { usePriceCakeBusd } from 'state/farmsV1/hooks'
import { EarnedProps } from '../../../Farm/Cells/Earned'

const Container = styled(ActionContainer)`
  flex: 2;
  height: 100%;
`

const Earned: React.FC<React.PropsWithChildren<EarnedProps>> = ({ earnings }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const earningsBigNumber = new BigNumber(earnings)
  const cakePrice = usePriceCakeBusd()
    )
  }

  return (
    <Container>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="4px">
          {`CAKE ${t('Earned')}`}
        </Text>
      </ActionTitles>
      <ActionContent>
        <div>
          <Heading color={earningsBigNumber.gt(0) ? 'text' : 'textDisabled'}>{displayBalance}</Heading>
          <Balance
            fontSize="12px"
            color={earningsBusd > 0 ? 'textSubtle' : 'textDisabled'}
            decimals={2}
            value={earningsBusd}
            unit=" USD"
            prefix="~"
          />
        </div>
      </ActionContent>
    </Container>
  )
}

export default Earned
