import React from 'react'
import styled from 'styled-components'
import { ChartIcon, Flex, Heading, HistoryIcon, IconButton, Text, useModal, ChartDisableIcon } from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

          <Heading as="h2">{title}</Heading>
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton>
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Text color="textSubtle" fontSize="14px">
          {subtitle}
        </Text>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
