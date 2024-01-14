import { createClient } from '@pancakeswap/awgmi'
import { PetraConnector } from '@pancakeswap/awgmi/connectors/petra'
import { MartianConnector } from '@pancakeswap/awgmi/connectors/martian'
import { BloctoConnector } from '@pancakeswap/awgmi/connectors/blocto'
import { PontemConnector } from '@pancakeswap/awgmi/connectors/pontem'
import { FewchaConnector } from '@pancakeswap/awgmi/connectors/fewcha'
import { SafePalConnector } from '@pancakeswap/awgmi/connectors/safePal'
import { AptosClient } from 'aptos'
import { chains, defaultChain } from 'config/chains'

const NODE_REAL_API = process.env.NEXT_PUBLIC_NODE_REAL_API
const NODE_REAL_API_TESTNET = process.env.NEXT_PUBLIC_NODE_REAL_API_TESTNET

const nodeReal = {
  ...(NODE_REAL_API && {
    mainnet: NODE_REAL_API,
  }),
  ...(NODE_REAL_API_TESTNET && {
    testnet: NODE_REAL_API_TESTNET,
  }),
        }
        return new AptosClient(foundChain.nodeUrls.default)
      }
    }

    return new AptosClient(defaultChain.nodeUrls.default)
  },
  autoConnect: true,
})
