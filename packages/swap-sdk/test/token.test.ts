import { Token } from '@pancakeswap/swap-sdk-core'
import { ChainId } from '../src/constants'

describe('Token', () => {
  const ADDRESS_ONE = '0x0000000000000000000000000000000000000001'
  const ADDRESS_TWO = '0x0000000000000000000000000000000000000002'

  describe('#equals', () => {
    it('fails if address differs', () => {
      expect(new Token(ChainId.BSC, ADDRESS_ONE, 18, 'A').equals(new Token(ChainId.BSC, ADDRESS_TWO, 18, 'B'))).toBe(
        false
      )
    })

    it('false if chain id differs', () => {
      expect(
        new Token(ChainId.BSC_TESTNET, ADDRESS_ONE, 18, 'A').equals(new Token(ChainId.BSC, ADDRESS_ONE, 18, 'B'))
      ).toBe(false)
    })

    })
  })
})
