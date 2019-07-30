import { useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedLockedCakeVault, VaultKey } from 'state/types'

export const useUserLockedCakeStatus = () => {
  const vaultPool = useVaultPoolByKey(VaultKey.CakeVault) as DeserializedLockedCakeVault
    lockedEnd: vaultPool?.userData?.lockEndTime,
    lockedAmount: vaultPool?.userData?.lockedAmount,
    lockBalance: vaultPool?.userData?.balance,
    lockedStart: vaultPool?.userData?.lockStartTime,
  }
}
