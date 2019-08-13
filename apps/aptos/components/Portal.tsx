import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useIsMounted } from '@pancakeswap/hooks'

interface PortalProps {
  return isMounted ? createPortal(children, container()) : null
}

export default Portal
