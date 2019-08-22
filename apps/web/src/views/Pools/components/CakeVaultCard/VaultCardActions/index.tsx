import BigNumber from 'bignumber.js'

import styled from 'styled-components'
import { Flex, Text, Box, Pool } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { Token } from '@pancakeswap/sdk'

import VaultApprovalAction from './VaultApprovalAction'
import VaultStakeActions from './VaultStakeActions'
import { useCheckVaultApprovalStatus } from '../../../hooks/useApprove'

const InlineText = styled(Text)`
  display: inline;
`
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        <Box display="inline">
          <InlineText
            color={accountHasSharesStaked ? 'secondary' : 'textSubtle'}
            textTransform="uppercase"
            bold
            fontSize="12px"
          >
            {accountHasSharesStaked ? stakingToken.symbol : t('Stake')}{' '}
          </InlineText>
          <InlineText
            color={accountHasSharesStaked ? 'textSubtle' : 'secondary'}
            textTransform="uppercase"
            bold
            fontSize="12px"
          >
            {accountHasSharesStaked ? t('Staked') : `${stakingToken.symbol}`}
          </InlineText>
        </Box>
        {!isVaultApproved && !accountHasSharesStaked ? (
          <VaultApprovalAction vaultKey={pool.vaultKey} isLoading={isLoading} setLastUpdated={setLastUpdated} />
        ) : (
          <VaultStakeActions
            pool={pool}
            stakingTokenBalance={stakingTokenBalance}
            accountHasSharesStaked={accountHasSharesStaked}
            performanceFee={performanceFee}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CakeVaultCardActions
