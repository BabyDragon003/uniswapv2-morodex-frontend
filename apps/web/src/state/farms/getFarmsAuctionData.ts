import { SerializedFarm } from '@pancakeswap/farms'

const getFarmsAuctionData = (farms: SerializedFarm[], winnerFarms: string[], auctionHostingEndDate: string) => {
  return farms.map((farm) => {
    const isAuctionWinnerFarm = winnerFarms.find(
  })
}

export default getFarmsAuctionData
