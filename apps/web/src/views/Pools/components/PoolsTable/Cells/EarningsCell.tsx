import styled from 'styled-components'
import { Skeleton, Text, Flex, Box, useModal, useMatchBreakpoints, Balance, Pool } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { PoolCategory } from 'config/constants/types'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'
import { useTranslation } from '@pancakeswap/localization'
import { Token } from '@pancakeswap/sdk'
import CollectModal from '../../Modals/CollectModal'

interface EarningsCellProps {
  pool: Pool.DeserializedPool<Token>
  account: string
}

const StyledCell = styled(Pool.BaseCell)`
  flex: 4.5;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 120px;
  }
`

const EarningsCell: React.FC<React.PropsWithChildren<EarningsCellProps>> = ({ pool, account }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  }

  return (
    <StyledCell role="cell">
      <Pool.CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {labelText}
        </Text>
        {!pool.userDataLoaded && account ? (
          <Skeleton width="80px" height="16px" />
        ) : (
          <>
            <Flex>
              <Box mr="8px" height="32px" onClick={hasEarnings ? handleEarningsClick : undefined}>
                <Balance
                  mt="4px"
                  bold={!isMobile}
                  fontSize={isMobile ? '14px' : '16px'}
                  color={hasEarnings ? 'primary' : 'textDisabled'}
                  decimals={hasEarnings ? 5 : 1}
                  value={hasEarnings ? earningTokenBalance : 0}
                />
                {hasEarnings ? (
                  <>
                    {earningTokenPrice > 0 && (
                      <Balance
                        display="inline"
                        fontSize="12px"
                        color="textSubtle"
                        decimals={2}
                        prefix="~"
                        value={earningTokenDollarBalance}
                        unit=" USD"
                      />
                    )}
                  </>
                ) : (
                  <Text mt="4px" fontSize="12px" color="textDisabled">
                    0 USD
                  </Text>
                )}
              </Box>
            </Flex>
          </>
        )}
      </Pool.CellContent>
    </StyledCell>
  )
}

export default EarningsCell
