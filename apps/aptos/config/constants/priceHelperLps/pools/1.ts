// import { serializeTokens } from '@pancakeswap/tokens/src/helpers'
import type { SerializedFarmConfig } from '@pancakeswap/farms'
// import { mainnetTokens } from 'config/constants/tokens'

// const serializedTokens = serializeTokens(mainnetTokens)
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
]
// .map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
