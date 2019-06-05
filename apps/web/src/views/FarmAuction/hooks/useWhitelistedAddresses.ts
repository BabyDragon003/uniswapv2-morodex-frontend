import useSWR from 'swr'
import { useFarmAuctionContract } from 'hooks/useContract'
import { getBidderInfo } from 'config/constants/farmAuctions'
import { FarmAuctionBidderConfig } from 'config/constants/types'
import { AUCTION_WHITELISTED_BIDDERS_TO_FETCH } from 'config'

const useWhitelistedAddresses = (): FarmAuctionBidderConfig[] => {
  const farmAuctionContract = useFarmAuctionContract(false)

  const { data } = useSWR(['farmAuction', 'whitelistedAddresses'], async () => {
export default useWhitelistedAddresses
