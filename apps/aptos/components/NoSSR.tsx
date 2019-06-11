import React from 'react'
import { useIsMounted } from '@pancakeswap/hooks'

interface NoSSRProps {
  children?: React.ReactNode
  return <>{isMounted ? children : loader ?? null}</>
}

export default NoSSR
