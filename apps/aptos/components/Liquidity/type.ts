import { Dispatch, SetStateAction } from 'react'

export enum Field {
  LIQUIDITY_PERCENT = 'LIQUIDITY_PERCENT',
  LIQUIDITY = 'LIQUIDITY',
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

export interface LiquidityHandlerReturn {
  attemptingTxn: boolean
  liquidityErrorMessage: string | undefined
  txHash: string | undefined
  setLiquidityState: Dispatch<
    SetStateAction<{
      attemptingTxn: boolean
      liquidityErrorMessage: string | undefined
      txHash: string | undefined
    }>
  >
}
