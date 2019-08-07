import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useAccount } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useActiveNetwork } from 'hooks/useNetwork'
import { ConnectWalletButton } from './ConnectWalletButton'
import Trans from './Trans'

const wrongNetworkProps: ButtonProps = {
  variant: 'danger',
  disabled: false,

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
