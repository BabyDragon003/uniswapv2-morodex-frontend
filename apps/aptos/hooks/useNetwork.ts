import { useAccount, useNetwork } from '@pancakeswap/awgmi'
import { equalsIgnoreCase } from '@pancakeswap/utils/equalsIgnoreCase'
import { chains, defaultChain } from 'config/chains'
import { atom, useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { isChainSupported } from 'utils'

const queryNetworkAtom = atom('')

queryNetworkAtom.onMount = (set) => {
  const params = new URL(window.location.href).searchParams
  const n = params.get('network')
  if (n && isChainSupported(n)) {
    set(n.toLowerCase())
  } else {
    set(defaultChain.name)
  }
}

function useLocalNetwork() {
  const queryNetwork = useAtomValue(queryNetworkAtom)
  const { query } = useRouter()

  const network = query.network || queryNetwork

    return {
      networkName,
      isWrongNetwork,
    }
  }, [queryNetwork, chain?.network, localNetworkName, isWrongNetwork])
}

export function useActiveChainId() {
  const { networkName } = useActiveNetwork()

  return useMemo(
    () => chains.find((c) => equalsIgnoreCase(c.network, networkName))?.id ?? defaultChain.id,
    [networkName],
  )
}
