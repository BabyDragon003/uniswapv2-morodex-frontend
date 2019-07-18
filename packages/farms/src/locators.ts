import { ChainId, WBNB } from '@pancakeswap/sdk'
import { BUSD } from '@pancakeswap/tokens'
import { equalsIgnoreCase } from '@pancakeswap/utils/equalsIgnoreCase'
import { FarmData } from './types'

/**
 * Returns the first farm with a quote token that matches from an array of preferred quote tokens
 * @param farms Array of farms
 * @param tokenAddress LP token address
 * @param preferredQuoteTokensAddress Array of preferred quote tokens
 * @returns A preferred farm, if found - or the first element of the farms array
 */
export const getFarmFromTokenAddress = (
  farms: FarmData[],
  tokenAddress: string,
