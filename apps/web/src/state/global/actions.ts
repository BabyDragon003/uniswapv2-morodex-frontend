import { createAction } from '@reduxjs/toolkit'
import { ChainId } from '@pancakeswap/sdk'

// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
}>('transactions/toggleFarmTransactionModal')

export const pickFarmTransactionTx = createAction<{
  tx: string
  chainId: ChainId
}>('transactions/pickFarmTransactionTx')
