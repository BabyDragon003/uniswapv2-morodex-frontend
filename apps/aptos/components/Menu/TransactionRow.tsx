import { BlockIcon, CheckmarkCircleIcon, Flex, Link, OpenNewIcon, RefreshIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { TransactionDetails } from 'state/transactions/reducer'
import { getBlockExploreLink } from 'utils'

interface TransactionRowProps {
  txn: TransactionDetails
  chainId: number
}

const TxnIcon = styled(Flex)`
  align-items: center;
  flex: none;
  width: 24px;
`

const Summary = styled.div`
  flex: 1;
  padding: 0 8px;
  ) : (
    <BlockIcon color="failure" width="24px" />
  )
}

const TransactionRow: React.FC<React.PropsWithChildren<TransactionRowProps>> = ({ txn, chainId }) => {
  const { t } = useTranslation()

  if (!txn) {
    return null
  }

  return (
    <TxnLink href={getBlockExploreLink(txn.hash, 'transaction', chainId)} external>
      <TxnIcon>{renderIcon(txn)}</TxnIcon>
      <Summary>
        {txn.translatableSummary
          ? t(txn.translatableSummary.text, txn.translatableSummary.data)
          : txn.summary ?? txn.hash}
      </Summary>
      <TxnIcon>
        <OpenNewIcon width="24px" color="primary" />
      </TxnIcon>
    </TxnLink>
  )
}

export default TransactionRow
