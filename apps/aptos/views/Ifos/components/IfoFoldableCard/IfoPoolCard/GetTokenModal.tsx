import { Currency } from '@pancakeswap/aptos-swap-sdk'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Image, Link, Modal, ModalBody, OpenNewIcon, Text } from '@pancakeswap/uikit'

interface Props {
  currency: Currency
  onDismiss?: () => void
}

const GetTokenModal: React.FC<React.PropsWithChildren<Props>> = ({ currency, onDismiss }) => {
  const { t } = useTranslation()
  return (
    <Modal title={t('%symbol% required', { symbol: currency.symbol })} onDismiss={onDismiss}>
      <ModalBody maxWidth="288px">
        <Image
          src={`https://tokens.dapp-frontend-prince.web.app/images/aptos/${currency.address}.png`}
          width={72}
          height={72}
          margin="auto"
          mb="24px"
export default GetTokenModal
