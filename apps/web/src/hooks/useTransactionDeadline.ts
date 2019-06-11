import { BigNumber } from '@ethersproject/bignumber'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../state'
import useCurrentBlockTimestamp from './useCurrentBlockTimestamp'
    if (blockTimestamp && ttl) return blockTimestamp.add(ttl)
    return undefined
  }, [blockTimestamp, ttl])
}
