import { createReducer } from '@reduxjs/toolkit'
import { Field, typeInput } from './actions'

export interface BurnState {
  readonly independentField: Field
}

export default createReducer<BurnState>(initialState, (builder) =>
  builder.addCase(typeInput, (state, { payload: { field, typedValue } }) => {
    return {
      ...state,
      independentField: field,
      typedValue,
    }
  }),
)
