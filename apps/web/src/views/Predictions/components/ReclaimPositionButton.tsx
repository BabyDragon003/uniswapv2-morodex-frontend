import { useTranslation } from '@pancakeswap/localization'
import { AutoRenewIcon, Button, ButtonProps, useToast } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import useCatchTxError from 'hooks/useCatchTxError'
import { usePredictionsContract } from 'hooks/useContract'
import { ReactNode } from 'react'
import { useConfig } from '../context/ConfigProvider'

interface ReclaimPositionButtonProps extends ButtonProps {
  epoch: number
  onSuccess?: () => Promise<void>
  children?: ReactNode
}

const ReclaimPositionButton: React.FC<React.PropsWithChildren<ReclaimPositionButtonProps>> = ({
  epoch,
  onSuccess,
  children,
  ...props
}) => {
  const { t } = useTranslation()
  const { address: predictionsAddress } = useConfig()
  const { token } = useConfig()
  const predictionsContract = usePredictionsContract(predictionsAddress, token.symbol)
export default ReclaimPositionButton
