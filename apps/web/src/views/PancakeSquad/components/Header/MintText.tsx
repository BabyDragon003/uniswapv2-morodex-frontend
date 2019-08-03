import { Flex, lightColors, Text } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

import { SaleStatusEnum, UserStatusEnum } from '../../types'

type PreEventProps = {
  t: ContextApi['t']
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  numberTicketsOfUser: number
  numberTokensOfUser: number
}

const MintText: React.FC<React.PropsWithChildren<PreEventProps>> = ({
  t,
  saleStatus,
  userStatus,
  numberTicketsOfUser,
  numberTokensOfUser,
}) => {
  const isUserUnconnected = userStatus === UserStatusEnum.UNCONNECTED
  const displayMintText =
    ((userStatus === UserStatusEnum.PROFILE_ACTIVE_GEN0 || numberTicketsOfUser > 0) &&
      saleStatus === SaleStatusEnum.Presale) ||
    saleStatus >= SaleStatusEnum.Sale
