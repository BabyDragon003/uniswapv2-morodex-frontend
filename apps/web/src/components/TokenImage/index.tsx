import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from '@pancakeswap/uikit'
import { Token, ChainId } from '@pancakeswap/sdk'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  const address = token?.isNative ? token.wrapped.address : token.address
  if (token.chainId !== ChainId.BSC) {
    return `/images/${token.chainId}/tokens/${address}.png`
  }
  return `/images/tokens/${address}.png`
}
}
