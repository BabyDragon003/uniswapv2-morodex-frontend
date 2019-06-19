import { AptosCoin, ChainId, Coin } from '@pancakeswap/aptos-swap-sdk'

export const APT = {
  [ChainId.TESTNET]: AptosCoin.onChain(ChainId.TESTNET),
  [ChainId.MAINNET]: AptosCoin.onChain(ChainId.MAINNET),
}

export const L0_USDC = {
  [ChainId.MAINNET]: new Coin(
    ChainId.MAINNET,
  ),
}

export const CE_USDC_MAINNET = new Coin(
  ChainId.MAINNET,
  '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin',
  6,
  'ceUSDC',
  'Celer - USD Coin',
)

export const WH_USDC_MAINNET = new Coin(
  ChainId.MAINNET,
  '0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T',
  6,
  'whUSDC',
  'Wormhole - USD Coin',
)

export const CAKE = {
  [ChainId.MAINNET]: new Coin(
    ChainId.MAINNET,
    '0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT',
    8,
    'MDEX',
    'MORODEX',
  ),
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xe0e5ad285cbcdb873b2ee15bb6bcac73d9d763bcb58395e894255eeecf3992cf::pancake::Cake',
    8,
    'MDEX',
    'MORODEX',
  ),
}
