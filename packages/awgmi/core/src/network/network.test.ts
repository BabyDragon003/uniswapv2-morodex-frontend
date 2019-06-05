import { beforeEach, describe, expect, it } from 'vitest'

import { getAptosAccounts, setupClient } from '../../test'

import { connect } from '../accounts/connect'
import { getNetwork } from './network'
import { MockConnector } from '../connectors/mock'
import { defaultChains } from '../chain'

const connector = new MockConnector({
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
