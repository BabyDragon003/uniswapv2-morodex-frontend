import { Chain } from '../chain'

import { MartianConnector } from './martian'

declare global {
  interface Window {
    safePal?: any
  }
}

export type MartianConnectorOptions = {
  /** Id of connector */
  id?: string
  /** Name of connector */
  name?: string
    })

    this.id = options.id
    this.name = options.name
  }

  async getProvider() {
    if (typeof window !== 'undefined' && !!window.safePal) this.provider = window.safePal
    return this.provider
  }
}
