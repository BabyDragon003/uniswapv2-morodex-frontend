import { useSendTransaction, useSimulateTransaction } from '@pancakeswap/awgmi'
import { useCallback } from 'react'

const SAFE_FACTOR = 1.5

export default function useSimulationAndSendTransaction() {
  const { simulateTransactionAsync } = useSimulateTransaction()

  const { sendTransactionAsync } = useSendTransaction()

  const execute = useCallback(
    async (payload, simulateError?: (err: any) => void) => {
      console.info('payload: ', payload)

      let results
        options = { max_gas_amount: maxGasAmount, gas_unit_price: gasUnitPrice }
      }

      return sendTransactionAsync({
        payload,
        options,
      })
    },
    [sendTransactionAsync, simulateTransactionAsync],
  )

  return execute
}
