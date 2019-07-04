import { Modal, ModalBody, Text, Image, Button, Link, OpenNewIcon, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { useTranslation } from '@pancakeswap/localization'

interface Props {
  currency: Token
  onDismiss?: () => void
}

const GetTokenModal: React.FC<React.PropsWithChildren<Partial<Props>>> = ({ currency, onDismiss }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  return (
    <Modal title={t('%symbol% required', { symbol: currency.symbol })} onDismiss={onDismiss}>
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default GetTokenModal
