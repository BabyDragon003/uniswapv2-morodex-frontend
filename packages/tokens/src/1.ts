import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
  sdao: new ERC20Token(
    ChainId.ETHEREUM,
    'StargateToken',
    'https://stargate.finance/',
  ),
}
