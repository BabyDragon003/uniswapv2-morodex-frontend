import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
    18,
    'SDAO',
    'Singularity Dao',
    'https://www.singularitydao.ai/',
  ),
  stg: new ERC20Token(
    ChainId.ETHEREUM,
    '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
    18,
    'STG',
    'StargateToken',
    'https://stargate.finance/',
  ),
}
