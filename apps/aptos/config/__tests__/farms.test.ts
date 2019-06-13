import { describe, it, expect } from 'vitest'
import { ChainId, Pair, Coin } from '@pancakeswap/aptos-swap-sdk'
import { SerializedFarm } from '@pancakeswap/farms'
import farms from '../constants/farms/1'
import { CAKE_PID } from '../constants/index'

// Test only against the last 10 farms, for performance concern
const mainnetFarmsToTest: [number, SerializedFarm, number][] = farms
  .filter((farm) => farm.pid !== 0 && farm.pid !== null)
  .slice(0, 10)
  .map((farm) => [farm.pid, farm, ChainId.MAINNET])

const getDuplicates = (key: 'pid' | 'lpAddress') => {
  const keys = farms.map((farm) => farm[key])
  return keys.filter((data) => keys.indexOf(data) !== keys.lastIndexOf(data))
      farm.quoteToken.chainId,
      farm.quoteToken.address,
      farm.quoteToken.decimals,
      farm.quoteToken.symbol,
    )

    // Skip CAKE
    if (pid !== CAKE_PID) {
      const reservesAddress = Pair.getReservesAddress(token, quoteToken)
      const lpAddress = Pair.parseType(reservesAddress)
      const token0Address = lpAddress[0].toLowerCase()
      const token1Address = lpAddress[1].toLowerCase()

      expect(token0Address === quoteToken.address.toLowerCase()).toBeTruthy()
      expect(token1Address === token.address.toLowerCase()).toBeTruthy()
    }
  })
})
