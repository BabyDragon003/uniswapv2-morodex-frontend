import { Dispatch, SetStateAction } from 'react'

export enum Field {
  LIQUIDITY_PERCENT = 'LIQUIDITY_PERCENT',
  LIQUIDITY = 'LIQUIDITY',
  CURRENCY_A = 'currencyA',
  CURRENCY_B = 'currencyB',
}

export enum ApprovalState {
    SetStateAction<{
      attemptingTxn: boolean
      liquidityErrorMessage: string | undefined
      txHash: string | undefined
    }>
  >
}
