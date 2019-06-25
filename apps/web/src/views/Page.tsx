import { useTranslation } from '@pancakeswap/localization'
import { Swap } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { PageMeta } from 'components/Layout/Page'
import { useActiveChainId } from 'hooks/useActiveChainId'
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const isBSC = chainId === ChainId.BSC
  const externalText = isBSC ? t('Bridge assets to BNB Chain') : ''
  const externalLinkUrl = isBSC ? 'https://bridge.dapp-frontend-prince.web.app/' : ''

  return (
    <>
      <PageMeta />
      <Swap.Page
        removePadding={removePadding}
        noMinHeight={noMinHeight}
        hideFooterOnDesktop={hideFooterOnDesktop}
        helpUrl={helpUrl}
        externalText={externalText}
        externalLinkUrl={externalLinkUrl}
        {...props}
      >
        {children}
      </Swap.Page>
    </>
  )
}

export default Page
