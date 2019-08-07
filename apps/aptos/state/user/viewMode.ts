import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export enum ViewMode {
  TABLE = 'TABLE',
  CARD = 'CARD',
}

const DEFAULT_MODE = ViewMode.TABLE

  (_get, set, mode: ViewMode) => {
    set(userFarmViewModeAtom, mode)
  },
)

export function useFarmViewMode() {
  return useAtom(userFarmViewModeLocalStorage)
}

const userPoolsViewModeLocalStorage = atom(
  (get) => {
    const got = get(userPoolsViewModeAtom)
    if (got === ViewMode.TABLE) {
      return ViewMode.TABLE
    }
    return ViewMode.CARD
  },
  (_get, set, mode: ViewMode) => {
    set(userPoolsViewModeAtom, mode)
  },
)

export function usePoolsViewMode() {
  return useAtom(userPoolsViewModeLocalStorage)
}
