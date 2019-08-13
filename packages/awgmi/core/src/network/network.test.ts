import { beforeEach, describe, expect, it } from 'vitest'

import { getAptosAccounts, setupClient } from '../../test'

import { connect } from '../accounts/connect'
  chains: defaultChains,
})

describe('network', () => {
  beforeEach(() => {
    setupClient()
  })
  describe('getNetwork', () => {
    it('no network', async () => {
      expect(getNetwork()).toMatchInlineSnapshot(`
        {
          "chain": undefined,
          "chains": [],
        }
      `)
    })

    it.todo('has network', async () => {
      await connect({ connector })
      expect(getNetwork()).toMatchInlineSnapshot(``)
    })
  })
})
