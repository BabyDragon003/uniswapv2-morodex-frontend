import styled from 'styled-components'
import { Box, Button, Flex, Text } from '@pancakeswap/uikit'
import { useAppDispatch } from 'state'
import { useAllSortedRecentTransactions } from 'state/transactions/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { clearAllTransactions } from 'state/transactions/actions'
import isEmpty from 'lodash/isEmpty'
import TransactionRow from './TransactionRow'
import { chains } from '../../../utils/wagmi'

const TransactionsContainer = styled(Box)`
  max-height: 300px;
  overflow-y: auto;
`

interface WalletTransactionsProps {
  onDismiss: () => void
}

const WalletTransactions: React.FC<React.PropsWithChildren<WalletTransactionsProps>> = ({ onDismiss }) => {
      </Flex>
      {hasTransactions ? (
        <TransactionsContainer>
          {Object.entries(sortedTransactions).map(([chainId, transactions]) => {
            const chainIdNumber = Number(chainId)
            return (
              <Box key={chainId}>
                <Text fontSize="12px" color="textSubtle" mb="4px">
                  {chains.find((c) => c.id === chainIdNumber)?.name ?? 'Unknown network'}
                </Text>
                {Object.values(transactions).map((txn) => (
                  <TransactionRow
                    key={txn.hash}
                    txn={txn}
                    chainId={chainIdNumber}
                    type={txn.type}
                    onDismiss={onDismiss}
                  />
                ))}
              </Box>
            )
          })}
        </TransactionsContainer>
      ) : (
        <Text textAlign="center">{t('No recent transactions')}</Text>
      )}
    </Box>
  )
}

export default WalletTransactions
