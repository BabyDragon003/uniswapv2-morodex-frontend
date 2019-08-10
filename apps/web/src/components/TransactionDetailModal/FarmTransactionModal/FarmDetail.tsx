import { useMemo } from 'react'
import { Flex, Box, Text, LinkExternal, RefreshIcon, WarningIcon } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { useTranslation } from '@pancakeswap/localization'
import { chains } from 'utils/wagmi'
import { ChainLogo } from 'components/Logo/ChainLogo'
import { getBlockExploreLink, getBlockExploreName } from 'utils'
import { FarmTransactionStatus, NonBscFarmTransactionStep } from 'state/transactions/actions'

interface HarvestDetailProps {
  status: FarmTransactionStatus
  step: NonBscFarmTransactionStep
}

const FarmDetail: React.FC<React.PropsWithChildren<HarvestDetailProps>> = ({ step, status }) => {
  const { t } = useTranslation()
  const isFail = step.status === FarmTransactionStatus.FAIL
  const isLoading = step.status === FarmTransactionStatus.PENDING
  const chainInfo = useMemo(() => chains.find((chain) => chain.id === step.chainId), [step])
  const isOneOfTheStepFail = status === FarmTransactionStatus.FAIL && isLoading

  return (
    <Flex mb="16px" justifyContent="space-between">
      <Flex>
        <ChainLogo width={20} height={20} chainId={step.chainId} />
        </Box>
      )}
    </Flex>
  )
}

export default FarmDetail
