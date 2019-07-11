import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'

export const getHasWithdrawFee = (lastDepositedTime: number, withdrawalFeePeriod = 259200) => {
  const feeEndTime = lastDepositedTime + withdrawalFeePeriod
  const currentSeconds = Math.floor(Date.now() / 1000)
  const secondsRemainingCalc = feeEndTime - currentSeconds
  return secondsRemainingCalc > 0
}

const useWithdrawalFeeTimer = (lastDepositedTime: number, userShares: BigNumber, withdrawalFeePeriod = 259200) => {
  const [secondsRemaining, setSecondsRemaining] = useState(null)
  const [hasUnstakingFee, setHasUnstakingFee] = useState(false)
  const [currentSeconds, setCurrentSeconds] = useState(() => Math.floor(Date.now() / 1000))


    return () => clearInterval(timerInterval)
  }, [lastDepositedTime, withdrawalFeePeriod, setSecondsRemaining, currentSeconds, userShares])

  return { hasUnstakingFee, secondsRemaining }
}

export default useWithdrawalFeeTimer
