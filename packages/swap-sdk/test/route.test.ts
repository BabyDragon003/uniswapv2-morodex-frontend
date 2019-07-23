import { Token, CurrencyAmount } from '@pancakeswap/swap-sdk-core'
import { Pair, Route, Native } from '../src/entities'
import { ChainId, WNATIVE } from '../src/constants'

describe('Route', () => {
  const pair1Weth = new Pair(CurrencyAmount.fromRawAmount(token1, '175'), CurrencyAmount.fromRawAmount(weth, '100'))

  it('constructs a path from the tokens', () => {
    const route = new Route([pair01], token0, token1)
    expect(route.pairs).toEqual([pair01])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(ChainId.BSC)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair0Weth, pair01, pair1Weth], weth, weth)
    expect(route.pairs).toEqual([pair0Weth, pair01, pair1Weth])
    expect(route.input).toEqual(weth)
    expect(route.output).toEqual(weth)
  })

  it('supports ether input', () => {
    const route = new Route([pair0Weth], ETHER, token0)
    expect(route.pairs).toEqual([pair0Weth])
    expect(route.input).toEqual(ETHER)
    expect(route.output).toEqual(token0)
  })

  it('supports ether output', () => {
    const route = new Route([pair0Weth], token0, ETHER)
    expect(route.pairs).toEqual([pair0Weth])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(ETHER)
  })
})
