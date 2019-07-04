import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import { setLeaderboardFilter } from 'state/predictions'
import { useGetLeaderboardFilters } from 'state/predictions/hooks'

const TimePeriodFilter = () => {
  const { t } = useTranslation()
  const { timePeriod } = useGetLeaderboardFilters()
  const dispatch = useLocalDispatch()

  const timePeriodOptions = [
    { label: t('%num%d', { num: 1 }), value: '1d' },
    { label: t('%num%d', { num: 7 }), value: '7d' },
    { label: t('%num%m', { num: 1 }), value: '1m' },

export default TimePeriodFilter
