import { createAction } from '@reduxjs/toolkit'
import { Field, Rate, OrderState } from './types'

export const replaceLimitOrdersState = createAction<OrderState>('limitOrders/replaceLimitOrdersState')
export const selectCurrency = createAction<{
