import { createStore, Store } from 'redux'
import { DEFAULT_DEADLINE_FROM_NOW, INITIAL_ALLOWED_SLIPPAGE } from 'config/constants'
import { updateVersion } from '../global/actions'
import reducer, { initialState, UserState } from './reducer'

describe('swap reducer', () => {
  let store: Store<UserState>

  beforeEach(() => {
    store = createStore(reducer, initialState)
  })

  describe('updateVersion', () => {
    it('has no timestamp originally', () => {
      expect(store.getState().lastUpdateVersionTimestamp).toBeUndefined()
  })
})
