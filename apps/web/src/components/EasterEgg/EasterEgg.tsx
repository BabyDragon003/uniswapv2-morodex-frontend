import { useState, useCallback, memo } from 'react'
import { FallingBunniesProps, useKonamiCheatCode } from '@pancakeswap/uikit'
import dynamic from 'next/dynamic'

const FallingBunnies = dynamic<FallingBunniesProps>(
  () => import('@pancakeswap/uikit').then((mod) => mod.FallingBunnies),
  { ssr: false },
)

const EasterEgg: React.FC<React.PropsWithChildren<FallingBunniesProps>> = (props) => {
  return null
}

export default memo(EasterEgg)
