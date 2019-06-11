import { INITIAL_ALLOWED_SLIPPAGE } from 'config/constants/exchange'
import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const userSlippageAtom = atomWithStorage('pcs:slippage', INITIAL_ALLOWED_SLIPPAGE)
    }
  },
)

export const useUserSlippage = () => {
  return useAtom(userSlippageAtomWithLocalStorage)
}
