import React from 'react'
import { Flex, Link, Text, TimerIcon, Balance } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import BigNumber from 'bignumber.js'
import { useTranslation } from '@pancakeswap/localization'
import { getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'
import { Token } from '@pancakeswap/sdk'

interface MaxStakeRowProps {
  small?: boolean
  stakingLimit: BigNumber
  currentBlock: number
  stakingLimitEndBlock: number
  stakingToken: Token
  hasPoolStarted: boolean
}

const MaxStakeRow: React.FC<React.PropsWithChildren<MaxStakeRowProps>> = ({
  small = false,
  stakingLimit,
  currentBlock,
  stakingLimitEndBlock,
  stakingToken,
  hasPoolStarted,
}) => {
      )}
    </Flex>
  )
}

export default MaxStakeRow
