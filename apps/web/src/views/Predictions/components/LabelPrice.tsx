import { useMemo, memo } from 'react'
import CountUp from 'react-countup'
import { Text } from '@pancakeswap/uikit'
import { formatBigNumberToFixed } from '@pancakeswap/utils/formatBalance'
import styled from 'styled-components'
import { BigNumber } from '@ethersproject/bignumber'

const Price = styled(Text)`
  height: 18px;
  justify-self: start;
  width: 70px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
  }
        <Price fontSize="12px">
          <span ref={countUpRef} />
        </Price>
      )}
    </CountUp>
  )
}

export default memo(LabelPrice)
