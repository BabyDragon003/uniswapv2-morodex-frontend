import { AptosAccount, AptosClient } from 'aptos'
import { devnet } from '../src/chain'
import { ClientConfig, createClient } from '../src/client'
import { MockConnector } from '../src/connectors/mock'
import { getDefaultProviders } from '../src/providers'

// default generated account for testing
const accounts = [
  {
    privateKeyHex: '0xd7238892323a3440282657b1ebe046c16357521333003783596da9c2cb26a485',
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
