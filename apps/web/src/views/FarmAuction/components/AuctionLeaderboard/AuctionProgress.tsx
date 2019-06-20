import { Progress } from '@pancakeswap/uikit'
import { differenceInSeconds } from 'date-fns'
import { Auction, AuctionStatus } from 'config/constants/types'
import { SLOW_INTERVAL } from 'config/constants'
import useSWR from 'swr'

const AuctionProgress: React.FC<React.PropsWithChildren<{ auction: Auction }>> = ({ auction }) => {
  const { data: progress = 0 } = useSWR(
    ['farmAuction', 'auctionProgress'],
    async () => {
      if (auction.status === AuctionStatus.ToBeAnnounced || auction.status === AuctionStatus.Pending) {
        return 0
      }
      const now = new Date()
      const auctionDuration = differenceInSeconds(auction.endDate, auction.startDate)
