import { useEffect, memo, useCallback } from 'react'
import { useModal } from '@pancakeswap/uikit'
import DisclaimerModal from 'components/DisclaimerModal'
import { useUserLimitOrderAcceptedWarning } from 'state/user/hooks'

import { useTranslation } from '@pancakeswap/localization'

function ClaimWarning() {
  const { t } = useTranslation()
  const [hasAcceptedRisk, setHasAcceptedRisk] = useUserLimitOrderAcceptedWarning()

  const handleSuccess = useCallback(() => {
    setHasAcceptedRisk(true)
  }, [setHasAcceptedRisk])

      onSuccess={handleSuccess}
    />,
    false,
    false,
  )

  useEffect(() => {
    if (!hasAcceptedRisk) {
      onPresentRiskDisclaimer()
    }

    return () => {
      onDismiss()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAcceptedRisk])

  return null
}

export default memo(ClaimWarning)
