import { JSBI, ERC20Token, CurrencyAmount } from '@pancakeswap/sdk'
import getPriceForOneToken from './getPriceForOneToken'

const CAKE = new ERC20Token(56, '0x43018838ABca94148Fb67A9F61f8b06fAb8F76C9', 18, 'MDEX', 'MORODEX')
const BUSD = new ERC20Token(56, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')
const ONE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(1), EIGHT_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const FIVE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(5), EIGHT_DECIMALS)

describe('limitOrders/utils/getPriceForOneToken', () => {
  describe.each([
    [CurrencyAmount.fromRawAmount(CAKE, ONE), CurrencyAmount.fromRawAmount(BUSD, ONE), '1'],
    [CurrencyAmount.fromRawAmount(CAKE, FIVE), CurrencyAmount.fromRawAmount(BUSD, FIVE), '1'],
    [CurrencyAmount.fromRawAmount(CAKE, ONE), CurrencyAmount.fromRawAmount(BUSD, FIVE), '5'],
    [CurrencyAmount.fromRawAmount(CAKE, FIVE), CurrencyAmount.fromRawAmount(BUSD, ONE), '0.2'],
    [CurrencyAmount.fromRawAmount(DOGE, ONE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, ONE), '1'],
    [CurrencyAmount.fromRawAmount(DOGE, FIVE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, FIVE), '1'],
    [CurrencyAmount.fromRawAmount(DOGE, ONE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, FIVE), '5'],
    [CurrencyAmount.fromRawAmount(DOGE, FIVE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, ONE), '0.2'],
    [CurrencyAmount.fromRawAmount(CAKE, ZERO), CurrencyAmount.fromRawAmount(BUSD, ONE), undefined],
    [CurrencyAmount.fromRawAmount(CAKE, ONE), CurrencyAmount.fromRawAmount(BUSD, ZERO), undefined],
  ])(`returns correct price`, (input, output, expected) => {
    it(`for ${input.toSignificant(6)} ${input.currency.symbol} -> ${output.toSignificant(6)} ${
      output.currency.symbol
    }`, () => {
      const price = getPriceForOneToken(input, output)
      expect(price?.toSignificant(6)).toBe(expected)
    })
  })
})
