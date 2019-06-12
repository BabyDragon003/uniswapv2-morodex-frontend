import { useState, useCallback, memo, useMemo } from 'react'
import { useInterval } from '@pancakeswap/hooks'

import getTimePeriods from '@pancakeswap/utils/getTimePeriods'
import { UNLOCK_FREE_DURATION } from 'config/constants/pools'
import addSeconds from 'date-fns/addSeconds'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import { convertTimeToSeconds } from 'utils/timeHelper'

interface PropsType {
  }, [burnDate])

  // Update every minute
  useInterval(updateRemainingSeconds, 1000 * 60)

  const { days, hours, minutes } = getTimePeriods(remainingSeconds)

  return <>{`${days}d: ${hours}h: ${minutes}m`}</>
}

export default memo(BurningCountDown)
