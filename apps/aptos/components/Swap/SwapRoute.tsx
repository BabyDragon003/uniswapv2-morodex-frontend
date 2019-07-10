import { Fragment, memo } from 'react'
import { Trade, Currency, TradeType } from '@pancakeswap/aptos-swap-sdk'
import { Text, Flex, ChevronRightIcon } from '@pancakeswap/uikit'

export default memo(function SwapRoute({ trade }: { trade: Trade<Currency, Currency, TradeType> }) {
  return (
    <Flex flexWrap="wrap" width="100%" justifyContent="flex-end" alignItems="center">
      {trade.route.path.map((token, i, path) => {
        const isLastItem: boolean = i === path.length - 1
        return (
    </Flex>
  )
})
