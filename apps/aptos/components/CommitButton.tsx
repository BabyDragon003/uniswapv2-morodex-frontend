import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useAccount } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useActiveNetwork } from 'hooks/useNetwork'
import { ConnectWalletButton } from './ConnectWalletButton'
}

export const CommitButton = (props: ButtonProps) => {
  const { isWrongNetwork } = useActiveNetwork()
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()

  if (!isConnected && isMounted) {
    return <ConnectWalletButton />
  }

  return (
    <Button
      {...props}
      onClick={(e) => {
        if (!isWrongNetwork) {
          props.onClick?.(e)
        }
      }}
      {...(isWrongNetwork && wrongNetworkProps)}
    />
  )
}
