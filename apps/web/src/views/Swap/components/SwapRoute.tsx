import { Currency } from '@pancakeswap/sdk'
import { ChevronRightIcon, Flex, Text } from '@pancakeswap/uikit'
import { Fragment, memo } from 'react'
import { unwrappedToken } from 'utils/wrappedCurrency'

        return (
          <Fragment key={token.isToken ? token.address : ''}>
            <Flex alignItems="end">
              <Text fontSize="14px" ml="0.125rem" mr="0.125rem">
                {currency.symbol}
              </Text>
            </Flex>
            {!isLastItem && <ChevronRightIcon width="12px" />}
          </Fragment>
        )
      })}
    </Flex>
  )
})
