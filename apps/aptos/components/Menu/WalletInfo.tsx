import { useAccount, useAccountBalance, APTOS_COIN } from '@pancakeswap/awgmi'

import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Button,
  CopyAddress,
  Flex,
  InjectedModalProps,
  LinkExternal,
  Message,
  Skeleton,
  Text,
} from '@pancakeswap/uikit'
import { useAuth } from 'hooks/useAuth'

import { useActiveChainId } from 'hooks/useNetwork'
import { getBlockExploreLink } from 'utils'
import useNativeCurrency from 'hooks/useNativeCurrency'

interface WalletInfoProps {
  hasLowNativeBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

              })}
            </Text>
            <Text as="p">
              {t('You need %currency% for transaction fees.', {
                currency: native.symbol,
              })}
            </Text>
          </Box>
        </Message>
      )}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          <Text color="textSubtle">
            {native.symbol} {t('Balance')}
          </Text>
        </Flex>
        {!isFetched ? <Skeleton height="22px" width="60px" /> : <Text>{data?.formatted}</Text>}
      </Flex>
      {account && (
        <Flex alignItems="center" justifyContent="end" mb="24px">
          <LinkExternal href={getBlockExploreLink(account.address, 'address', chainId)}>
            {t('View on %site%', {
              site: t('Explorer'),
            })}
          </LinkExternal>
        </Flex>
      )}
      <Button variant="secondary" width="100%" onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </Button>
    </>
  )
}

export default WalletInfo
