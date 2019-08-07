// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { NATIVE, WNATIVE } from '@pancakeswap/sdk'
import { CHAIN_QUERY_NAME } from 'config/chains'

const getLiquidityUrlPathParts = ({
  quoteTokenAddress,
  tokenAddress,
  chainId,
}: {
export default getLiquidityUrlPathParts
