import { EventStatus, StepStatus } from '@pancakeswap/uikit'
import { SaleStatusEnum } from 'views/PancakeSquad/types'
import { getEventStepStatus, getEventStepStatusType } from 'views/PancakeSquad/utils'

type getStepperStatusType = getEventStepStatusType & {
  past: 'past',
  live: 'current',
  upcoming: 'future',
}

export const getStepperStatus = ({
  eventStatus,
  saleStatus: currentSaleStatus,
  hasProfileActivated,
  numberTicketsOfUser = 0,
  isLastPhase = false,
}: getStepperStatusType): StepStatus => {
  if (!hasProfileActivated) return 'future'
  if (currentSaleStatus === SaleStatusEnum.Claim && numberTicketsOfUser === 0 && !isLastPhase) return 'past'

  const status = getEventStepStatus({
    saleStatus: currentSaleStatus,
    eventStatus,
  })

  return eventStatusMapping[status]
}
