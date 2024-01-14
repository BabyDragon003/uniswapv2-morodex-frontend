import { Progress } from '@pancakeswap/uikit'
import { differenceInSeconds } from 'date-fns'
import { Auction, AuctionStatus } from 'config/constants/types'
import { SLOW_INTERVAL } from 'config/constants'
import useSWR from 'swr'
        return 0
      }
      const now = new Date()
      const auctionDuration = differenceInSeconds(auction.endDate, auction.startDate)
      const secondsPassed = differenceInSeconds(now, auction.startDate)
      const percentagePassed = (secondsPassed * 100) / auctionDuration
      return percentagePassed < 100 ? percentagePassed : 100
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )

  return <Progress variant="flat" primaryStep={progress} />
}

export default AuctionProgress
