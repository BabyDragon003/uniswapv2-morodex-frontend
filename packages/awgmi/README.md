# @pancakeswap/awgmi

Connect to Aptos with similar [wagmi](https://github.com/wagmi-dev/wagmi) React hooks.

Support Aptos Wallet Connectors:
- Petra
- Martian
- Pontem
- Fewcha
- SafePal
- Trust Wallet


```jsx
import {
  createClient,
  AwgmiConfig,
  useConnect,
  getDefaultProviders,
  defaultChains,
});


function App() {
  return (
    <AwgmiConfig client={client}>
      <YourApp />
    </AwgmiConfig>
  )
}
```


## Connector
```jsx
import { useConnect, useDisconnect } from '@pancakeswap/awgmi'

function ConnectButton() {
  const { connect, connectors } = useConnect()

  return (
    <div>
      {connectors.map((connector) => (
        <button type="button" key={connector.id} onClick={() => connect({ connector, networkName: 'mainnet' })}>
          {connector.name}
        </button>
      ))}
    </div>
  )
}
```


## Hooks
```jsx
import {
  useAccountBalance,
  useAccountBalances,
  useAccountResource,
  useAccountResources,
  useCoin,
  useCoins,
  useNetwork,
  useSendTransaction,
  useSimulateTransaction,
  useTableItem,
} from '@pancakeswap/awgmi'
```

### Balance
```js
const { data } = useAccountBalance({
  address: Address,
  coin: '0x1::aptos_coin::AptosCoin',
  watch: true
})
```

### Send Transaction
```js
import { UserRejectedRequestError } from '@pancakeswap/awgmi'

const { sendTransactionAsync } = useSendTransaction()

sendTransactionAsync({
  payload: {
    type: 'entry_function_payload',
    function: '<address>::message::set_message',
    arguments: ['are we gonna make it?'],
    type_arguments: [],
  },
}).catch(err => {
  if (err instanceof UserRejectedRequestError) {
    // handle user reject
  }
  // handle transaction error
})
```