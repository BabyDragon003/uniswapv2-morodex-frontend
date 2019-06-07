import { useTranslation } from '@pancakeswap/localization'
import { Button, useModal, useToast } from '@pancakeswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useCatchTxError from 'hooks/useCatchTxError'
import { useERC20 } from 'hooks/useContract'
import { useAppDispatch } from 'state'

import { fetchFarmUserDataAsync } from 'state/farms'
import { useFarmFromPid, useFarmUser } from 'state/farms/hooks'
import useUnstakeFarms from '../../../hooks/useUnstakeFarms'
import { BCakeMigrateModal } from '../../BCakeMigrateModal'

interface MigrateActionButtonPropsType {
  pid: number
}

const MigrateActionButton: React.FunctionComponent<MigrateActionButtonPropsType> = ({ pid }) => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
    }
  }

  const [onPresentMigrate] = useModal(
    <BCakeMigrateModal
      pid={pid}
      stakedBalance={stakedBalance}
      lpContract={lpContract}
      onUnStack={handleUnstakeWithCallback}
    />,
  )

  return <Button onClick={onPresentMigrate}>{t('Migrate')}</Button>
}

export default MigrateActionButton
