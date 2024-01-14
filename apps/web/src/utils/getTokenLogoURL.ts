import { getAddress } from '@ethersproject/address'
import memoize from 'lodash/memoize'
import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId]) {
      if (token.chainId == ChainId.BSC) {
        return `/images/tokens/${getAddress(
          token.address,
        )}.png`
      }
      else {
        return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${getAddress(
          token.address,
        )}/logo.png`
      }
    }
    return null
  },
