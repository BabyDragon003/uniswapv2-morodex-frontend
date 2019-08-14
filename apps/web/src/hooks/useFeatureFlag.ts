import { FLAG_FARM } from 'config/flag'
import { Atom, useAtomValue } from 'jotai'
import { createJSONStorage } from 'jotai/utils'
import atomWithStorageWithErrorCatch from 'utils/atomWithStorageWithErrorCatch'

const storage = { ...createJSONStorage(() => sessionStorage), delayInit: true }
export const featureFarmApiAtom = atomWithStorageWithErrorCatch<typeof FLAG_FARM>(
  'feature-farm-api',
  FLAG_FARM,
  // @ts-ignore
export function useFeatureFlag<T>(featureAtom: Atom<T>) {
  return useAtomValue(featureAtom)
}
