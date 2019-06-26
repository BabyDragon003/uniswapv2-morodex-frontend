import { Text } from '@pancakeswap/uikit'
import { toDate, format } from 'date-fns'
import { useTranslation } from '@pancakeswap/localization'
import { ProposalState } from 'state/types'

interface TimeFrameProps {
  startDate: number
  endDate: number
  proposalState: ProposalState
}
    ml: '8px',
  }

  if (proposalState === ProposalState.CLOSED) {
    return <Text {...textProps}>{t('Ended %date%', { date: getFormattedDate(endDate) })}</Text>
  }

  if (proposalState === ProposalState.PENDING) {
    return <Text {...textProps}>{t('Starts %date%', { date: getFormattedDate(startDate) })}</Text>
  }

  return <Text {...textProps}>{t('Ends %date%', { date: getFormattedDate(endDate) })}</Text>
}

export default TimeFrame
