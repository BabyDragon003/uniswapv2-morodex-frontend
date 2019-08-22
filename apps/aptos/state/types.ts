import BigNumber from 'bignumber.js'
import { DeserializedPoolConfig } from 'config/constants/types'

export enum VaultKey {
  CakeVaultV1 = 'cakeVaultV1',
  CakeVault = 'cakeVault',
  CakeFlexibleSideVault = 'cakeFlexibleSideVault',
  IfoPool = 'ifoPool',
}

interface CorePoolProps {
  startBlock?: number
  endBlock?: number
  apr?: number
  rawApr?: number
}
