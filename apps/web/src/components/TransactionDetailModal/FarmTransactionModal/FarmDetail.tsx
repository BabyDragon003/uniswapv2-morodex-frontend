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
          {isLoading ? (
            <Flex>
              <Text color="textSubtle" bold fontSize="14px">
                {t('Loading')}
              </Text>
              <RefreshIcon ml="5px" color="textSubtle" spin />
            </Flex>
          ) : (
            <Flex>
              {isFail && <WarningIcon mr="4px" color="failure" />}
              {step.tx && (
                <LinkExternal
                  isBscScan={step.chainId === ChainId.BSC}
                  href={getBlockExploreLink(step.tx, 'transaction', step.chainId)}
                >
                  {getBlockExploreName(step.chainId)}
                </LinkExternal>
              )}
            </Flex>
          )}
        </Box>
      )}
    </Flex>
  )
}

export default FarmDetail
