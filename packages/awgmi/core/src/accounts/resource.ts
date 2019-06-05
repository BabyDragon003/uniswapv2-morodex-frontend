import { Types } from 'aptos'
import { getProvider } from '../providers'

export type FetchAccountResourceArgs = {
  /** Address */
  address: string
  /** Network to use for provider */
  networkName?: string
  /** String representation of an on-chain Move struct type */
  resourceType: string
  const resource = await provider.getAccountResource(address, resourceType)

  // @ts-ignore
  return resource as FetchAccountResourceResult
}
