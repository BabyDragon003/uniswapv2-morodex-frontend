import { EventStatus, StepStatus } from '@pancakeswap/uikit'
import { SaleStatusEnum } from 'views/PancakeSquad/types'
import { getEventStepStatus, getEventStepStatusType } from 'views/PancakeSquad/utils'

type getStepperStatusType = getEventStepStatusType & {
  hasProfileActivated: boolean
  numberTicketsOfUser?: number
  isLastPhase?: boolean
}

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
