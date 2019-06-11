import { ChainId, WBNB } from '@pancakeswap/sdk'
import { BUSD } from '@pancakeswap/tokens'
import { equalsIgnoreCase } from '@pancakeswap/utils/equalsIgnoreCase'
import { FarmData } from './types'

 */
export const getFarmFromTokenAddress = (
  farms: FarmData[],
  tokenAddress: string,
  preferredQuoteTokensAddress: string[] = [BUSD[ChainId.BSC].address, WBNB[ChainId.BSC].address],
): FarmData => {
  const farmsWithToken = farms.filter((farm) => equalsIgnoreCase(farm.token.address, tokenAddress))
  const filteredFarm = farmsWithToken.find((farm) => {
    return preferredQuoteTokensAddress.some((quoteTokenAddress) => {
      return equalsIgnoreCase(farm.quoteToken.address, quoteTokenAddress)
    })
  })
  return filteredFarm || farmsWithToken[0]
}
