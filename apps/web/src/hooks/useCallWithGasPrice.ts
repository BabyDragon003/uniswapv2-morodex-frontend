import { AppState } from 'state'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { TransactionResponse } from '@ethersproject/providers'
import { Contract, CallOverrides } from '@ethersproject/contracts'
import { useGasPrice } from 'state/user/hooks'
import get from 'lodash/get'
import { addBreadcrumb } from '@sentry/nextjs'
import { GAS_PRICE_GWEI } from '../state/types'

   */
  const callWithGasPrice = useCallback(
    async (
      contract: Contract,
      methodName: string,
      methodArgs: any[] = [],
      overrides: CallOverrides = null,
    ): Promise<TransactionResponse> => {
      addBreadcrumb({
        type: 'Transaction',
        message:
          userGasPrice === GAS_PRICE_GWEI.rpcDefault
            ? `Call with market gas price`
            : `Call with gas price: ${gasPrice}`,
        data: {
          contractAddress: contract.address,
          methodName,
          methodArgs,
          overrides,
        },
      })

      const contractMethod = get(contract, methodName)
      const hasManualGasPriceOverride = overrides?.gasPrice
      const tx = await contractMethod(
        ...methodArgs,
        hasManualGasPriceOverride ? { ...overrides } : { ...overrides, gasPrice },
      )

      if (tx) {
        addBreadcrumb({
          type: 'Transaction',
          message: `Transaction sent: ${tx.hash}`,
          data: {
            hash: tx.hash,
            from: tx.from,
            gasLimit: tx.gasLimit?.toString(),
            nonce: tx.nonce,
          },
        })
      }

      return tx
    },
    [gasPrice, userGasPrice],
  )

  return { callWithGasPrice }
}
