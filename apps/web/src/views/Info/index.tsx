import { useTranslation } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import { SubMenuItems } from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { useGetChainName } from 'state/info/hooks'
import { useRouter } from 'next/router'
import { useActiveChainId } from 'hooks/useActiveChainId'
import InfoNav from './components/InfoNav'

    else if (account && chainId === ChainId.ETHEREUM && router.query.chainName !== 'eth')
      router.replace('/info/eth', undefined, { shallow: true })
    else if (isStableSwap && router.query.chainName) {
      if (router.query.chainName === 'eth') {
        router.replace('/info/eth', undefined, { shallow: true })
      } else {
        router.replace('/info?type=stableSwap', undefined, { shallow: true })
      }
    }
  }, [isStableSwap, chainId, account, chainName, router])

  return (
    <>
      {chainName === 'BSC' && (
        <SubMenuItems
          items={[
            {
              label: t('Swap'),
              href: '/info',
            },
            {
              label: t('StableSwap'),
              href: '/info?type=stableSwap',
            },
          ]}
          activeItem={isStableSwap ? '/info?type=stableSwap' : '/info'}
        />
      )}

      <InfoNav isStableSwap={isStableSwap} />
      {children}
    </>
  )
}
