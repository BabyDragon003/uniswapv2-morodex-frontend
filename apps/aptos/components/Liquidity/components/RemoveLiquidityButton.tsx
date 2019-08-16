import { useTranslation } from '@pancakeswap/localization'
import { Button, useModal } from '@pancakeswap/uikit'
import { useCallback } from 'react'
import useRemoveLiquidityHandler from '../hooks/useRemoveLiquidityHandler'
import { useBurnActionHandlers } from '../state/remove'
import { Field } from '../type'
import ConfirmRemoveLiquidityModal from './ConfirmRemoveLiquidityModal'

export default function RemoveLiquidityButton({ error, parsedAmounts, currencyA, currencyB, tokenA, tokenB }) {
  const { t } = useTranslation()

  const { attemptingTxn, txHash, liquidityErrorMessage, onRemove, setLiquidityState } = useRemoveLiquidityHandler({
    parsedAmounts,
    currencyA,
    currencyB,
  })

  const { onUserInput } = useBurnActionHandlers()

  const handleDismissConfirmation = useCallback(() => {
    true,
    'removeLiquidityModal',
  )

  return (
    <Button
      variant={error && !!parsedAmounts[Field.CURRENCY_A] && !!parsedAmounts[Field.CURRENCY_B] ? 'danger' : 'primary'}
      onClick={() => {
        setLiquidityState({
          attemptingTxn: false,
          liquidityErrorMessage: undefined,
          txHash: undefined,
        })
        onPresentRemoveLiquidity()
      }}
      width="100%"
      disabled={error}
    >
      {error || t('Remove')}
    </Button>
  )
}
