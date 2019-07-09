import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { masterchefWithdraw } from 'config/constants/contracts/masterchef'
import { FARMS_DEFAULT_TOKEN_DECIMAL } from 'config'
import useSimulationAndSendTransaction from 'hooks/useSimulationAndSendTransaction'
      const value = new BigNumber(_amount).times(FARMS_DEFAULT_TOKEN_DECIMAL).toString()
      const payload = masterchefWithdraw([value], [tokenType])
      return executeTransaction(payload)
    },
    [tokenType, executeTransaction],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
