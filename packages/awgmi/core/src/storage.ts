type BaseStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

export type ClientStorage = {
  getItem: <T>(key: string, defaultState?: T | null) => T | null
  setItem: <T>(key: string, value: T | null) => void
  removeItem: (key: string) => void
}

export const noopStorage: BaseStorage = {
  getItem: (_key) => '',
  setItem: (_key, _value) => null,
  removeItem: (_key) => null,
}

export function createStorage({
  storage,
  key: prefix = 'awgmi',
}: {
  storage: BaseStorage
  key?: string
      }
    },
    removeItem: (key) => storage.removeItem(`${prefix}.${key}`),
  }
}
