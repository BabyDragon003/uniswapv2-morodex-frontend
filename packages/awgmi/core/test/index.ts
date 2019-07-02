import { AptosAccount, AptosClient } from 'aptos'
import { devnet } from '../src/chain'
import { ClientConfig, createClient } from '../src/client'
import { MockConnector } from '../src/connectors/mock'
import { getDefaultProviders } from '../src/providers'
  },
]

export function getAptosAccounts() {
  return accounts.map((x) => AptosAccount.fromAptosAccountObject(x))
}

class AptosProvider extends AptosClient {
  toJSON() {
    return `<AptosProvider url={${this.client.general.httpRequest.config.BASE}} />`
  }
}

export function getAptosClient() {
  return new AptosProvider(devnet.nodeUrls.default)
}

export function setupClient(config: Partial<ClientConfig> = {}) {
  return createClient({
    connectors: [
      new MockConnector({
        options: {
          account: getAptosAccounts()[0],
        },
      }),
    ],
    provider: getDefaultProviders,
    ...config,
  })
}
