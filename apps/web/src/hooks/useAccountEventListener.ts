import { useEffect, useMemo } from 'react'
import { ExtendEthereum } from 'global'
import replaceBrowserHistory from '@pancakeswap/utils/replaceBrowserHistory'
import { ConnectorData } from 'wagmi'
import { CHAIN_QUERY_NAME } from 'config/chains'
import { useAppDispatch } from '../state'
import { clearUserStates } from '../utils/clearUserStates'
import useActiveWeb3React from './useActiveWeb3React'
import { useSessionChainId } from './useSessionChainId'

export const useAccountEventListener = () => {
  const { account, chainId, connector } = useActiveWeb3React()
  const [, setSessionChainId] = useSessionChainId()
  const dispatch = useAppDispatch()

  const isBloctoMobileApp = useMemo(() => {
    return typeof window !== 'undefined' && Boolean((window.ethereum as ExtendEthereum)?.isBlocto)
  }, [])

  useEffect(() => {
        connector.removeListener('disconnect', handleDeactiveEvent)
        connector.removeListener('change', handleUpdateEvent)
      }
    }
    return undefined
  }, [account, chainId, dispatch, connector, setSessionChainId, isBloctoMobileApp])
}
