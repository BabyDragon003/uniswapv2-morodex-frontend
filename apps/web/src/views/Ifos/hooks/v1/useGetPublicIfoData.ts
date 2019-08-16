import { useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { BSC_BLOCK_TIME } from 'config'
import { Ifo, IfoStatus, PoolIds } from 'config/constants/types'
import { useLpTokenPrice } from 'state/farms/hooks'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { multicallv2 } from 'utils/multicall'
import ifoV1Abi from 'config/abi/ifoV1.json'
import { PublicIfoData } from '../../types'
import { getStatus } from '../helpers'

/**
 * Gets all public data of an IFO
 */
const useGetPublicIfoData = (ifo: Ifo): PublicIfoData => {
  const { address } = ifo
  const lpTokenPriceInUsd = useLpTokenPrice(ifo.currency.symbol)
  const [state, setState] = useState({
    isInitialized: false,
    status: 'idle' as IfoStatus,
        name: method,
      }))

      const [startBlock, endBlock, raisingAmount, totalAmount] = await multicallv2({ abi: ifoV1Abi, calls: ifoCalls })

      const startBlockNum = startBlock ? startBlock[0].toNumber() : 0
      const endBlockNum = endBlock ? endBlock[0].toNumber() : 0

      const status = getStatus(currentBlock, startBlockNum, endBlockNum)
      const totalBlocks = endBlockNum - startBlockNum
      const blocksRemaining = endBlockNum - currentBlock

      // Calculate the total progress until finished or until start
      const progress = status === 'live' ? ((currentBlock - startBlockNum) / totalBlocks) * 100 : null

      setState((prev) => ({
        ...prev,
        isInitialized: true,
        status,
        blocksRemaining,
        secondsUntilStart: (startBlockNum - currentBlock) * BSC_BLOCK_TIME,
        progress,
        secondsUntilEnd: blocksRemaining * BSC_BLOCK_TIME,
        startBlockNum,
        endBlockNum,
        [PoolIds.poolUnlimited]: {
          ...prev.poolUnlimited,
          raisingAmountPool: raisingAmount ? new BigNumber(raisingAmount[0].toString()) : BIG_ZERO,
          totalAmountPool: totalAmount ? new BigNumber(totalAmount[0].toString()) : BIG_ZERO,
        },
      }))
    },
    [address],
  )

  return { ...state, currencyPriceInUSD: lpTokenPriceInUsd, fetchIfoData }
}

export default useGetPublicIfoData
