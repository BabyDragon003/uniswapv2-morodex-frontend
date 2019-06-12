import styled from 'styled-components'
import { CheckmarkIcon, CloseIcon, LinkExternal } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import { TransactionDetails } from 'state/transactions/reducer'
import CircleLoader from '../../Loader/CircleLoader'

const TransactionState = styled.div<{ pending: boolean; success?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Transaction({ tx, chainId }: { tx: TransactionDetails; chainId: number }) {
  const summary = tx?.summary
  const pending = !tx?.receipt
  const success = !pending && tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined')

  if (!chainId) return null

  return (
    <TransactionState pending={pending} success={success}>
      <LinkExternal isBscScan href={getBlockExploreLink(tx.hash, 'transaction', chainId)}>
        {summary ?? tx.hash}
      </LinkExternal>
      <IconWrapper pending={pending} success={success}>
        {pending ? <CircleLoader /> : success ? <CheckmarkIcon color="success" /> : <CloseIcon color="failure" />}
      </IconWrapper>
    </TransactionState>
  )
}
