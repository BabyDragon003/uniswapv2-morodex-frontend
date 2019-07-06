import { useTranslation } from '@pancakeswap/localization'
import { LinkExternal, ModalV2 } from '@pancakeswap/uikit'
import DisclaimerModal from 'components/DisclaimerModal'
import { ConnectorNames, getDocLink } from 'config/wallet'
import { ExtendEthereum } from 'global'
import { useState, useCallback } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { FarmsContext } from './context'
import Farms from './Farms'

export function useIsBloctoETH() {
  const { chain } = useNetwork()
  const { isConnected, connector } = useAccount()
  const isETH = chain?.id === mainnet.id
  return (
    (connector?.id === ConnectorNames.Blocto ||
      (typeof window !== 'undefined' && Boolean((window.ethereum as ExtendEthereum)?.isBlocto))) &&
    isConnected &&
    isETH
  )
}

// Blocto EVM address is different across chains
function BloctoWarning() {
        }
        subtitle={t('If you have previously deposited any LP tokens, please unstake.')}
        checks={[
          {
            key: 'blocto-understand',
            content: t('I understand'),
          },
        ]}
        onSuccess={handleSuccess}
      />
    </ModalV2>
  )
}

export const FarmsPageLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <BloctoWarning />
      <Farms>{children}</Farms>
    </>
  )
}

export { FarmsContext }
