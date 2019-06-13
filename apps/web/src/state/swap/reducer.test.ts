import { createStore, Store } from 'redux'
import { Field, selectCurrency } from './actions'
import reducer, { SwapState } from './reducer'

describe('swap reducer', () => {
  let store: Store<SwapState>

  beforeEach(() => {
    store = createStore(reducer, {
      [Field.OUTPUT]: { currencyId: '' },
      [Field.INPUT]: { currencyId: '' },
      typedValue: '',
      independentField: Field.INPUT,
      recipient: null,
    })
        recipient: null,
      })
    })
  })
})
