import { goerliTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'CELR-WETH LP',
    lpAddress: '0xF8E1FA0648F87c115F26E43271B3D6e4a80A2944',
    quoteToken: goerliTestnetTokens.weth,
    token: goerliTestnetTokens.celr,
  },
  {
    pid: 23,
    vaultPid: 3,
