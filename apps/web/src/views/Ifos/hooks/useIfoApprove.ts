import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Ifo } from 'config/constants/types'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { useERC20 } from 'hooks/useContract'
  }, [spenderAddress, raisingTokenContract, callWithGasPrice])

  return onApprove
}

export default useIfoApprove
