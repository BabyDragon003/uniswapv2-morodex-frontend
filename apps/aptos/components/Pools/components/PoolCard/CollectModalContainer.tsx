import { useCallback } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import { Pool, useToast } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import useCatchTxError, { TxResponse } from 'hooks/useCatchTxError'

const CollectModalContainer = ({
  earningTokenSymbol,
  onDismiss,
  onReward,
  onDone,
  ...rest
}: React.PropsWithChildren<
  Pool.CollectModalProps & {
    onReward: () => Promise<TxResponse>
        </ToastDescriptionWithTx>,
      )

      onDone?.()
      onDismiss?.()
    }
  }, [earningTokenSymbol, fetchWithCatchTxError, onDismiss, onDone, onReward, t, toastSuccess])

  return (
    <Pool.CollectModal
      earningTokenSymbol={earningTokenSymbol}
      onDismiss={onDismiss}
      handleHarvestConfirm={handleHarvestConfirm}
      pendingTx={pendingTx}
      {...rest}
    />
  )
}

export default CollectModalContainer
