import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { Persister, persistQueryClient } from '@tanstack/react-query-persist-client'
import { AptosClient } from 'aptos'
import { ClientConfig, createClient as createCoreClient, Client as CoreClient } from '@pancakeswap/awgmi/core'
import { deserialize, serialize } from './utils'

export type CreateClientConfig<TProvider extends AptosClient> = ClientConfig<TProvider> & {
  queryClient?: QueryClient
  persister?: Persister | null
}
export function createClient<TProvider extends AptosClient>({
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
      })
    : undefined,
  ...config
}: CreateClientConfig<TProvider>) {
  const client = createCoreClient<TProvider>(config)
  if (persister)
    persistQueryClient({
      queryClient,
      persister,
      dehydrateOptions: {
        shouldDehydrateQuery: (query) => query.cacheTime !== 0,
      },
    })
  return Object.assign(client, { queryClient })
}

export type Client<TProvider extends AptosClient = AptosClient> = CoreClient<TProvider> & {
  queryClient: QueryClient
}
