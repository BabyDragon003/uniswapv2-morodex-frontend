import { describe, it, expect } from 'vitest'
import { ChainId, Pair, Coin } from '@pancakeswap/aptos-swap-sdk'
import { SerializedFarm } from '@pancakeswap/farms'
import farms from '../constants/farms/1'
import { CAKE_PID } from '../constants/index'

const getDuplicates = (key: 'pid' | 'lpAddress') => {
  const keys = farms.map((farm) => farm[key])
  return keys.filter((data) => keys.indexOf(data) !== keys.lastIndexOf(data))
}

describe('Config farms', () => {
  it('All farm has an unique pid', () => {
    const duplicates = getDuplicates('pid')
    expect(duplicates).toHaveLength(0)
  })

  it('All farm has an unique address', () => {
    const duplicates = getDuplicates('lpAddress')
    expect(duplicates).toHaveLength(0)
  })

  it.each(mainnetFarmsToTest)('Farm %d has the correct token addresses', async (pid, farm) => {
    const token = new Coin(farm.token.chainId, farm.token.address, farm.token.decimals, farm.token.symbol)
    const quoteToken = new Coin(
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
