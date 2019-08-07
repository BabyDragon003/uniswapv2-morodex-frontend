/* eslint-disable camelcase */
import { FetchTableItemArgs, fetchTableItem } from '@pancakeswap/awgmi/core'
import { useQueries } from '@tanstack/react-query'
import { Types } from 'aptos'
import { useMemo } from 'react'
import { queryClientContext } from '../context'

import { QueryConfig, QueryFunctionArgs } from '../types'
import { useNetwork } from './useNetwork'
import { useQuery } from './utils/useQuery'
  return fetchTableItem({ networkName, handle, data })
}

export type PayloadTableItem = {
  keyType: string
  valueType: string
  key: any
}

export function useTableItems({
  handles,
  data: data_,
  networkName: networkName_,
}: {
  handles?: string[]
  data?: PayloadTableItem[]
  networkName?: string
}) {
  const { chain } = useNetwork()

  return useQueries({
    context: queryClientContext,
    queries: useMemo(
      () =>
        handles?.length && data_?.length
          ? handles.map((handle, idx) => ({
              handle,
              queryFn,
              queryKey: queryKey({ networkName: networkName_ ?? chain?.network, handle, data: data_[idx] }),
              staleTime: Infinity,
              refetchInterval: 3_000,
            }))
          : [],
      [chain?.network, handles, networkName_, data_],
    ),
  })
}

export function useTableItem<TData = unknown>({
  cacheTime,
  keepPreviousData,
  enabled = true,
  networkName: networkName_,
  staleTime,
  suspense,
  onError,
  onSettled,
  onSuccess,
  select,
  handle,
  data: data_,
}: Partial<FetchTableItemArgs> & UseTableItemConfig<TData>) {
  const { chain } = useNetwork()

  return useQuery(queryKey({ networkName: networkName_ ?? chain?.network, handle, data: data_ }), queryFn, {
    cacheTime,
    enabled: enabled && !!handle && !!data_,
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess,
    select,
    keepPreviousData,
    refetchInterval: (data) => {
      if (!data) return 6_000
      return 3_000
    },
  })
}
