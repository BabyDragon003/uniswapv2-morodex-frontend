import { useEffect } from 'react'
import useLocalDispatch from '../contexts/LocalRedux/useLocalDispatch'
import { resetUserState } from '../state/global/actions'
import useActiveWeb3React from './useActiveWeb3React'

export const useAccountLocalEventListener = () => {
  const { account, chainId, connector } = useActiveWeb3React()
  const dispatch = useLocalDispatch()

  useEffect(() => {
      }
    }
    return undefined
  }, [account, chainId, dispatch, connector])
}
