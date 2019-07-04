import { useTranslation } from '@pancakeswap/localization'
import { convertTimeToSeconds, distanceToNowStrict } from 'utils/timeHelper'
import formatSecondsToWeeks from '../../utils/formatSecondsToWeeks'

interface UserData {
  lockEndTime: string
  lockStartTime: string
  burnStartTime?: string
}

interface UserDataInVaultPresenter {
  weekDuration: string
  remainingTime: string
  lockEndDate: string
  secondDuration: number
  try {
    const _lockEndDate = new Date(lockEndTimeSeconds)
    lockEndDate = _lockEndDate.toLocaleString(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const _burnStartTime = new Date(lockEndTimeSeconds + 7 * 24 * 60 * 60 * 1000)
    burnStartTime = _burnStartTime.toLocaleString(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  } catch (_) {
    // ignore invalid format
  }

  return {
    weekDuration: formatSecondsToWeeks(secondDuration),
    remainingTime: distanceToNowStrict(lockEndTimeSeconds),
    lockEndDate,
    secondDuration,
    burnStartTime,
  }
}

export default useUserDataInVaultPresenter
