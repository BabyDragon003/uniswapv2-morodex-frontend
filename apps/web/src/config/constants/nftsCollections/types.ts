import { Address } from '../types'

export enum PancakeCollectionKey {
  PANCAKE = 'pancake',
  SQUAD = 'pancakeSquad',
  address: Address
}

export type PancakeCollections = {
  [key in PancakeCollectionKey]: PancakeCollection
}
