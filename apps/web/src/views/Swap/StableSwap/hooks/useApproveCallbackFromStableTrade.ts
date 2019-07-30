import { useMemo } from 'react'
import { useApproveCallback } from 'hooks/useApproveCallback'
import { Field } from 'state/swap/actions'
import { computeSlippageAdjustedAmounts } from 'utils/exchange'
import { StableTrade } from './useStableTradeExactIn'
}: {
  trade?: StableTrade
  allowedSlippage: number
  swapAddress: string
}) {
  const amountToApprove = useMemo(
    () => (trade ? computeSlippageAdjustedAmounts(trade, allowedSlippage)[Field.INPUT] : undefined),
    [trade, allowedSlippage],
  )

  return useApproveCallback(amountToApprove, swapAddress)
}
