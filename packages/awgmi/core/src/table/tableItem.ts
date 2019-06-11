import { Types } from 'aptos'
import { getProvider } from '../providers'

export type FetchTableItemArgs = {
  /** Network to use for provider */
  }
}

export async function fetchTableItem({ networkName, handle, data }: FetchTableItemArgs) {
  const provider = getProvider({ networkName })

  return provider.getTableItem(handle, {
    key: data.key,
    value_type: data.valueType,
    key_type: data.keyType,
  })
}
