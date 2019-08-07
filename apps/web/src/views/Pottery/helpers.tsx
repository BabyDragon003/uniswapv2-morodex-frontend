import BigNumber from 'bignumber.js'
import { PotteryDepositStatus } from 'state/types'

const calculateSecondsRemaining = (today, daysToFri) => {
  // Get milliseconds to noon friday
  const fridayNoon = new Date(+today)
  fridayNoon.setUTCDate(fridayNoon.getDate() + daysToFri)
  fridayNoon.setUTCHours(12, 0, 0, 0)

  // Round up remaining

  const secondsRemaining = calculateSecondsRemaining(today, daysToFri)
  if (secondsRemaining <= 0) {
    daysToFri = 5 - (dayNum - 7)
    return calculateSecondsRemaining(today, daysToFri)
  }

  return secondsRemaining
}

interface CalculateCakeAmount {
  status: PotteryDepositStatus
  previewRedeem: string
  shares: string
  totalSupply: BigNumber
  totalLockCake: BigNumber
}

export const calculateCakeAmount = ({
  status,
  previewRedeem,
  shares,
  totalSupply,
  totalLockCake,
}: CalculateCakeAmount): BigNumber => {
  if (status === PotteryDepositStatus.LOCK) {
    return new BigNumber(shares).div(totalSupply).times(totalLockCake)
  }

  return new BigNumber(previewRedeem)
}
