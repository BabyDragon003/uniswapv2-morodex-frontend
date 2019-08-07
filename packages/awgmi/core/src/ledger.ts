import { Types } from 'aptos'

import { getProvider } from './providers'

export type FetchLedgerArgs = {
  networkName?: string
}

export type FetchLedgerResult = Types.IndexResponse

