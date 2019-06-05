import { Address } from '../types'

export enum PancakeCollectionKey {
  PANCAKE = 'pancake',
  SQUAD = 'pancakeSquad',
}

export type PancakeCollection = {
  name: string
  description?: string
