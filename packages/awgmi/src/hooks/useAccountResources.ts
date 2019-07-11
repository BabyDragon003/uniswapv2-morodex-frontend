import { fetchAccountResources, FetchAccountResourcesArgs, FetchAccountResourcesResult } from '@pancakeswap/awgmi/core'

import { QueryConfig, QueryFunctionArgs } from '../types'
import { useNetwork } from './useNetwork'
import { useQuery } from './utils/useQuery'

export type UseAccountResourcesArgs = Partial<FetchAccountResourcesArgs> & {
  /** Subscribe to changes */
  watch?: boolean
}

export type UseAccountResourcesConfig<TData = unknown> = QueryConfig<FetchAccountResourcesResult, Error, TData>

export const queryKey = ({ networkName, address }: { networkName?: string; address?: string }) =>
  [{ entity: 'accountResources', networkName, address }] as const
  onSettled,
  onSuccess,
  select,
}: UseAccountResourcesArgs & UseAccountResourcesConfig<TData> = {}) {
  const { chain } = useNetwork()
  const networkName = networkName_ ?? chain?.network

  return useQuery(queryKey({ networkName, address }), queryFn, {
    cacheTime,
    enabled: Boolean(enabled && address),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess,
    select,
    keepPreviousData,
    refetchInterval: (data) => {
      if (!data) return 6_000
      return watch ? 3_000 : 0
    },
  })
}
