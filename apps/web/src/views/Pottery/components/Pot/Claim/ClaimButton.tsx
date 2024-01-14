import { useMemo } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import { Button, AutoRenewIcon } from '@pancakeswap/uikit'
import { useClaimPottery } from 'views/Pottery/hooks/useClaimPottery'

  const { isPending, handleClaim } = useClaimPottery()

  const isDisabledButton = useMemo(() => rewardToken === 0 || isPending, [rewardToken, isPending])

  return (
    <Button
      width={['110px', '110px', '162px']}
      ml="auto"
      disabled={isDisabledButton}
      endIcon={isPending ? <AutoRenewIcon spin color="currentColor" /> : null}
      onClick={handleClaim}
    >
      {t('Claim')}
    </Button>
  )
}

export default ClaimButton
