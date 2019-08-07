import { useFarmUser } from 'state/farms/hooks'
import { Farm as FarmUI, FarmTableFarmTokenInfoProps } from '@pancakeswap/uikit'
import { TokenPairImage } from 'components/TokenImage'

const { FarmTokenInfo } = FarmUI.FarmTable

const Farm: React.FunctionComponent<React.PropsWithChildren<FarmTableFarmTokenInfoProps>> = ({
  token,
  quoteToken,
  label,
      quoteToken={quoteToken}
      isReady={isReady}
      isStable={isStable}
      stakedBalance={proxy?.stakedBalance?.gt(0) ? proxy?.stakedBalance : stakedBalance}
    >
      <TokenPairImage width={40} height={40} variant="inverted" primaryToken={token} secondaryToken={quoteToken} />
    </FarmTokenInfo>
  )
}

export default Farm
