import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { AptosClient } from 'aptos'
import { Client } from './client'

export const Context = React.createContext<Client<AptosClient> | undefined>(undefined)

export const queryClientContext = React.createContext<QueryClient | undefined>(undefined)

export type AwgmiConfigProps<TProvider extends AptosClient = AptosClient> = {
  /** React-decorated Client instance */
  client: Client<TProvider>
}

export function AwgmiConfig<TProvider extends AptosClient>({
  children,
  client,
}: React.PropsWithChildren<AwgmiConfigProps<TProvider>>) {
  return (
    <Context.Provider value={client as unknown as Client}>
