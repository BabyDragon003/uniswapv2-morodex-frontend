import { useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual'
import useSWR from 'swr'
import { useFarmAuctionContract } from 'hooks/useContract'
import { ConnectedBidder } from 'config/constants/types'
import { getBidderInfo } from 'config/constants/farmAuctions'
import { FAST_INTERVAL } from 'config/constants'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { useFarmAuction } from './useFarmAuction'

export const useCurrentFarmAuction = (account: string) => {
  const { data: currentAuctionId = null } = useSWR(
    ['farmAuction', 'currentAuctionId'],
    async () => {
      const auctionId = await farmAuctionContract.currentAuctionId()
      return auctionId.toNumber()
    },
    { refreshInterval: FAST_INTERVAL },
  )

  const {
    data: { auction: currentAuction, bidders },
    mutate: refreshBidders,
  } = useFarmAuction(currentAuctionId, { refreshInterval: FAST_INTERVAL })
  const [connectedBidder, setConnectedBidder] = useState<ConnectedBidder | null>(null)
  useEffect(() => {
    const getBidderData = () => {
      if (bidders && bidders.length > 0) {
        const bidderData = bidders.find((bidder) => bidder.account === account)
        if (bidderData) {
          return bidderData
        }
      }
      const bidderInfo = getBidderInfo(account)
      const defaultBidderData = {
        position: null,
        samePositionAsAbove: false,
        isTopPosition: false,
        amount: BIG_ZERO,
        ...bidderInfo,
      }
      return defaultBidderData
    }
    if (connectedBidder && connectedBidder.isWhitelisted) {
      const bidderData = getBidderData()
      if (!isEqual(bidderData, connectedBidder.bidderData)) {
        setConnectedBidder({
          account,
          isWhitelisted: true,
          bidderData,
        })
      }
    }
  }, [account, connectedBidder, bidders])

  return {
    currentAuction,
    bidders,
    connectedBidder,
    refreshBidders,
  }
}
