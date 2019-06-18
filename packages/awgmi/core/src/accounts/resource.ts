import { Types } from 'aptos'
import { getProvider } from '../providers'

export type FetchAccountResourceArgs = {
  /** Address */

export type FetchAccountResourceResult<T = unknown> = Omit<Types.MoveResource, 'data'> & { data: T }

export async function fetchAccountResource<T>({
  address,
  networkName,
  resourceType,
}: FetchAccountResourceArgs): Promise<FetchAccountResourceResult<T>> {
  const provider = getProvider({ networkName })

  const resource = await provider.getAccountResource(address, resourceType)

  // @ts-ignore
  return resource as FetchAccountResourceResult
}
