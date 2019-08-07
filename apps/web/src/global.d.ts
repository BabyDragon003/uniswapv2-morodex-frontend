import type { Ethereum } from '@wagmi/core'

export interface ExtendEthereum extends Ethereum {
  isSafePal?: true
  isCoin98?: true
  isBlocto?: true
  isMathWallet?: true
  isTrustWallet?: true
  isBlocto?: true
}

export {}
