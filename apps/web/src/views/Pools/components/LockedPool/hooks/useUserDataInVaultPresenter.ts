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
  burnStartTime?: string
}

type UserDataInVaultPresenterFn = (args: UserData) => UserDataInVaultPresenter

const useUserDataInVaultPresenter: UserDataInVaultPresenterFn = ({ lockEndTime, lockStartTime }) => {
  const {
    currentLanguage: { locale },
  } = useTranslation()
  const secondDuration = Number(lockEndTime) - Number(lockStartTime)
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
