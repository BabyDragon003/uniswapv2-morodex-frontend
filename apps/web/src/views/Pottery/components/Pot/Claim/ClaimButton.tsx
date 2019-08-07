import { useMemo } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import { Button, AutoRenewIcon } from '@pancakeswap/uikit'
import { useClaimPottery } from 'views/Pottery/hooks/useClaimPottery'

interface ClaimButtonProps {
  rewardToken: number
}

const ClaimButton: React.FC<React.PropsWithChildren<ClaimButtonProps>> = ({ rewardToken }) => {
      onClick={handleClaim}
    >
      {t('Claim')}
    </Button>
  )
}

export default ClaimButton
