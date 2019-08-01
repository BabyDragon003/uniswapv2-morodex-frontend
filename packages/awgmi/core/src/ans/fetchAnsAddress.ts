import { getNetwork } from '../network/network'
import { Address } from '../types'

export type FetchAnsAddressArgs = {
  /** Network to use for provider */
  networkName?: string
  /** ENS name to resolve */
  name: string
}

export type FetchAnsAddressResult = Address | null

export async function fetchAnsAddress({
  networkName: networkName_,
  name,
}
