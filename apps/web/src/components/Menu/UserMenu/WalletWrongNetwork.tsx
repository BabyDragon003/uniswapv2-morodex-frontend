import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, Link, HelpIcon, Message, MessageText } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`

interface WalletWrongNetworkProps {
  onDismiss: () => void
}

const WalletWrongNetwork: React.FC<React.PropsWithChildren<WalletWrongNetworkProps>> = ({ onDismiss }) => {
  const { t } = useTranslation()
  const { switchNetworkAsync, canSwitch } = useSwitchNetwork()

  const handleSwitchNetwork = async (): Promise<void> => {
    await switchNetworkAsync(ChainId.BSC)
    onDismiss?.()
  }
