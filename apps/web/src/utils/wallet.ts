// Set of helper functions to facilitate wallet setup
import { Address } from 'wagmi'
import { BAD_SRCS } from '../components/Logo/constants'

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress as Address,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image,
      },
    },
  })

  return tokenAdded
}

export const canRegisterToken = () =>
  typeof window !== 'undefined' &&
  // @ts-ignore
  !window?.ethereum?.isSafePal &&
  (window?.ethereum?.isMetaMask ||
    window?.ethereum?.isTrust ||
    window?.ethereum?.isCoinbaseWallet ||
    window?.ethereum?.isTokenPocket)
