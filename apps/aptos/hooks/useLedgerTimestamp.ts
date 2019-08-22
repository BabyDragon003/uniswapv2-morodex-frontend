import { useCallback } from 'react'
import { useSWRConfig } from 'swr'
import useSWRImmutable from 'swr/immutable'
import { fetchLedgerInfo } from '@pancakeswap/awgmi/core'
import { useActiveChainId } from './useNetwork'

export const useLedgerTimestamp = () => {
  const chainId = useActiveChainId()
  const { mutate } = useSWRConfig()
  const { data: lastCheck } = useSWRImmutable(['ledgerTimestampLastCheck', chainId])

  const { data: ledgerTimestamp, error } = useSWRImmutable(
    ['ledgerTimestamp', chainId],
    async () => {
      /* eslint-disable camelcase */
    }
    return Date.now()
  }, [error, lastCheck, ledgerTimestamp])
}

export default useLedgerTimestamp
