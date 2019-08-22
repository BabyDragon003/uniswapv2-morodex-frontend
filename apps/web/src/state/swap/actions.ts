import { createAction } from '@reduxjs/toolkit'
import { DerivedPairDataNormalized, PairDataNormalized, PairDataTimeWindowEnum } from './types'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export const selectCurrency = createAction<{ field: Field; currencyId: string }>('swap/selectCurrency')
export const switchCurrencies = createAction<void>('swap/switchCurrencies')
export const typeInput = createAction<{ field: Field; typedValue: string }>('swap/typeInput')
export const replaceSwapState = createAction<{
  field: Field
  typedValue: string
  inputCurrencyId?: string
