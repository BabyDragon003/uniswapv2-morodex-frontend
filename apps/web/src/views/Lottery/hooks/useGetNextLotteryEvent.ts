import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { useMemo } from 'react'

interface LotteryEvent {
  nextEventTime: number
  postCountdownText?: string
  preCountdownText?: string
}

        preCountdownText: null,
        postCountdownText: t('until the draw'),
      }
    }
    // Current lottery has finished but not yet claimable
    if (status === LotteryStatus.CLOSE) {
      return {
        nextEventTime: endTime + transactionResolvingBuffer + vrfRequestTime,
        preCountdownText: t('Winners announced in'),
        postCountdownText: null,
      }
    }
    // Current lottery claimable. Next lottery has not yet started
    if (status === LotteryStatus.CLAIMABLE) {
      return {
        nextEventTime: endTime + transactionResolvingBuffer + secondsBetweenRounds,
        preCountdownText: t('Tickets on sale in'),
        postCountdownText: null,
      }
    }
    return { nextEventTime: null, preCountdownText: null, postCountdownText: null }
  }, [endTime, status, t])
}

export default useGetNextLotteryEvent
