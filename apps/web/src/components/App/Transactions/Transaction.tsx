import styled from 'styled-components'
import { CheckmarkIcon, CloseIcon, LinkExternal } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import { TransactionDetails } from 'state/transactions/reducer'
import CircleLoader from '../../Loader/CircleLoader'

const TransactionState = styled.div<{ pending: boolean; success?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-weight: 500;
  font-size: 0.825rem;
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
