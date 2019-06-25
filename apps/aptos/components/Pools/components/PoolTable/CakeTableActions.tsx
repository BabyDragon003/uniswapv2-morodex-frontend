import { Pool } from '@pancakeswap/uikit'
import { Coin } from '@pancakeswap/aptos-swap-sdk'
import { ConnectWalletButton } from 'components/ConnectWalletButton'

import CakeCollectModal from '../PoolCard/CakeCollectModal'
export default Pool.withTableActions<Coin>(Pool.withCollectModalTableAction(CakeCollectModal), StakeActionContainer)
