import { Modal, ModalBody, Text, Image, Button, Link, OpenNewIcon, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { useTranslation } from '@pancakeswap/localization'

interface Props {
  currency: Token
  onDismiss?: () => void
}

const GetTokenModal: React.FC<React.PropsWithChildren<Partial<Props>>> = ({ currency, onDismiss }) => {
          {t('Get %symbol%, or make sure your tokens aren’t staked somewhere else.', { symbol: currency.symbol })}
        </Text>
        <Button
          as={Link}
          external
          href={`/swap?outputCurrency=${currency.address}`}
          endIcon={<OpenNewIcon color="invertedContrast" />}
          minWidth="100%" // Bypass the width="fit-content" on Links
        >
          {t('Get %symbol%', { symbol: currency.symbol })}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default GetTokenModal
