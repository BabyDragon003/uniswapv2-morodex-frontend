import { Flex, BunnyPlaceholderIcon, Text } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'

const WalletNotConnected: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDirection="column" padding="16px">
      <BunnyPlaceholderIcon width={80} height={80} />
      <Text m="16px 0" bold textAlign="center">
