import { SaleStatusEnum, UserStatusEnum } from 'views/PancakeSquad/types'
import { ButtonsEnum } from './types'

type getCurrentButtonType = {
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  numberTicketsOfUser: number
}

export const getCurrentButton = ({
}
